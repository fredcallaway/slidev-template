<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getFirstLiveUrl } from '../utils/connectivity'

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
