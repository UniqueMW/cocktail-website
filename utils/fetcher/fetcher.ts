import axios from 'axios'
async function fetcher(url: string): Promise<any> {
  const fetchedData = await axios(url)

  return fetchedData.data
}

export default fetcher
