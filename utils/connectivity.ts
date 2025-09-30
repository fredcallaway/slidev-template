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
