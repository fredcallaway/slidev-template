export interface ScrollHandlerOptions {
  threshold?: number
  resetTime?: number
}

export const useScrollHandler = (
  action: (direction: number) => void,
  options: ScrollHandlerOptions = {}
) => {
  const { threshold = 20, resetTime = 100 } = options

  let scrollAccumulator = 0
  let lastScrollTime = 0

  return (event: WheelEvent) => {
    event.preventDefault()
    
    const now = Date.now()
    const timeDelta = now - lastScrollTime
    lastScrollTime = now

    // Always act on first scroll event 
    if (timeDelta > resetTime) {
      action(Math.sign(event.deltaY))
      scrollAccumulator = 0
    } else {
      // accumulate deltas
      scrollAccumulator += event.deltaY
      if (Math.abs(scrollAccumulator) >= threshold) {
        action(Math.sign(scrollAccumulator))
        scrollAccumulator = 0 // Reset after action
      }
    }
  }
}
