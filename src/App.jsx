import { useReducer } from 'react'
import { AddForm } from './components/AddForm'
import { QuotesList } from './components/QuotesList'
import { getQuote } from './helpers/getQuote'

import { quoteReducer } from './reducers/quoteReducer'

const initialState = [{
  id: 1,
  author: 'Walter White',
  quote: 'I am not in danger, Skyler. I am the danger!'
}]

function App () {
  const [quotes, dispatch] = useReducer(quoteReducer, initialState)

  getQuote()

  const handleAddQuote = (newQuote) => {
    dispatch({
      type: 'add',
      payload: newQuote
    })
  }

  return (
    <div className='container mt-3'>
      <h1>Breaking Bad Quotes ({quotes.length})</h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <QuotesList quotes={quotes} />
        </div>

        <div className='col-5'>
          <AddForm handleAddQuote={handleAddQuote} />
        </div>

      </div>
    </div>
  )
}

export default App
