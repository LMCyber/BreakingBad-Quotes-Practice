
export const getQuote = async (author) => {
  if (author) {
    const [name, lastname] = author?.split(' ')
    const url = `https://www.breakingbadapi.com/api/quote?author=${name}+${lastname}`

    try {
      const res = await window.fetch(url)
      const data = await res.json()

      const max = data.length
      const id = Math.floor(Math.random() * max)

      return data[id]
    } catch (error) {
      console.log(error)
    }
  }
}
