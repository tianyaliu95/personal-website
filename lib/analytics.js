export function track(event) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      time_stamp: `${new Date()}`,
    })
  }
}
