import { useReducer } from 'react'
import { AddForm } from './components/AddForm'
import { QuotesList } from './components/QuotesList'
import { useFetch } from './hooks/useFetch'
import { quoteReducer } from './reducers/quoteReducer'

const initialState = [{
  id: 1,
  author: 'Walter White',
  quote: 'I am not in danger, Skyler. I am the danger!'
}]

function App () {
  const [quotes, dispatch] = useReducer(quoteReducer, initialState)

  const url = 'https://www.breakingbadapi.com/api/quote?author=Walter+White'
  const { loading, data } = useFetch(url)

  return (
    <div className='container mt-3'>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <QuotesList quotes={quotes} />
        </div>

        <div className='col-5'>
          <AddForm />
        </div>

      </div>
    </div>
  )
}

export default App
