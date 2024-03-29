function debounce(callback: () => void, duration: number): () => void {
  let timeOutId: string | number | NodeJS.Timeout | undefined
  return (): void => {
    clearTimeout(timeOutId)
    timeOutId = setTimeout(callback, duration)
  }
}

export default debounce
