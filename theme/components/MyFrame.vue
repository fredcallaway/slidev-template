<script setup lang="ts">
import { ref, onMounted } from 'vue'

/**
 * Checks if a URL is reachable by making a HEAD request
 * @param url - The URL to check
 * @param timeout - Timeout in milliseconds (default: 1000ms)
 * @returns Promise<boolean> - true if URL is reachable, false otherwise
 */
 async function checkUrl(url: string, timeout: number = 1000): Promise<boolean> {
  try {
    const response = await fetch(url, {
      method: 'HEAD',
      mode: 'no-cors',
      signal: AbortSignal.timeout(timeout)
    })
    return true
  } catch {
    return false
  }
}

/**
 * Checks a list of URLs and returns the first one that is live/reachable
 * @param urls - Array of URLs to check in order
 * @param timeout - Timeout in milliseconds for each URL check (default: 1000ms)
 * @returns Promise<string | null> - First live URL or null if none are reachable
 */
export async function getFirstLiveUrl(urls: string[], timeout: number = 1000): Promise<string | null> {
  for (const url of urls) {
    const isLive = await checkUrl(url, timeout)
    if (isLive) {
      return url
    }
  }
  return null
}

const { trials, controls, layout } = defineProps({
  trials: {
    default: 'pid=1&trial=30',
  },
  controls: {
    default: false
  },
  layout: {
    default: 2
  }
})

const currentUrl = ref('')

// Generate URLs for both local and online domains
function generateAllUrls() {
  const domains = ["http://localhost:3401", "https://eyeplan-viewer.web.app"]
  const trialParams = trials.trim().split("\n")
  
  return trialParams.map(t => {
    return domains.map(domain => 
      `${domain}/human?layout=${layout}&controls=${controls ? 1 : 0}&${t}`
    )
  })
}

onMounted(async () => {
  const allUrlSets = generateAllUrls()
  // Check the first trial's URLs to determine which domain is available
  const firstLiveUrl = await getFirstLiveUrl(allUrlSets[0])
  
  if (firstLiveUrl) {
    console.log('url is', firstLiveUrl)
    currentUrl.value = firstLiveUrl
  } else {
    // Fallback to online version if no URLs are reachable
    console.log('No URLs reachable, using fallback')
    currentUrl.value = allUrlSets[0][1] // Use online version as fallback
  }
})

</script>

<template>
  <NonLocal>
    <Box l0 t5 tilt-l w-65 z-1 title="Gaze contingent display" text-sm>
      Visit <a href="https://eyeplan-viewer.web.app" target="_blank">https://eyeplan-viewer.web.app</a> for the full interactive version!

    <p text-xs pt1 text-gray-3 font-300>
    keys not working? 
    <a @click="$slidev.nav.next()"> next slide </a>
    </p>
    </Box>
  </NonLocal>
  <iframe full
    :src="currentUrl"
    scrolling="no"
  />
</template>
