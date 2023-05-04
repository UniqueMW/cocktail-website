function debounce(callback: () => void, duration: number): () => void {
  let timeOutId: string | number | NodeJS.Timeout | undefined
  console.log('called')
  return (): void => {
    clearTimeout(timeOutId)
    timeOutId = setTimeout(callback, duration)
  }
}

export default debounce
