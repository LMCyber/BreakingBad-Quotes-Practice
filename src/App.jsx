import { useEffect, useReducer } from 'react'
import { AddForm } from './components/AddForm'
import { QuotesList } from './components/QuotesList'

import { quoteReducer } from './reducers/quoteReducer'

const init = () => {
  return JSON.parse(window.localStorage.getItem('quotes')) || []
}

function App () {
  const [quotes, dispatch] = useReducer(quoteReducer, [], init)

  useEffect(() => {
    window.localStorage.setItem('quotes', JSON.stringify(quotes))
  }, [quotes])

  const handleAddQuote = (newQuote) => {
    dispatch({
      type: 'add',
      payload: newQuote
    })
  }

  const handleDelete = (quoteId) => {
    const action = {
      type: 'delete',
      payload: quoteId
    }

    dispatch(action)
  }

  return (
    <div className='container mt-3'>
      <h1>Breaking Bad Quotes ({quotes.length})</h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <QuotesList quotes={quotes} handleDelete={handleDelete} />
        </div>

        <div className='col-5'>
          <AddForm handleAddQuote={handleAddQuote} />
        </div>

      </div>
    </div>
  )
}

export default App
