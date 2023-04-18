function randomize<T>(list: T[]): T {
  const randomNumber = Math.floor(Math.random() * list.length)
  return list[randomNumber]
}

export default randomize
