import { Button } from 'react-bootstrap'

export const QuotesListItem = ({ quote, handleDelete }) => {
  return (
    <div className='d-flex align-items-center' key={quote.id}>
      <div className='me-auto'>
        <p className='m-0'>{quote.quote} <span className='text-secondary'>- {quote.author}</span></p>
      </div>

      <div>
        <Button variant='danger' onClick={() => handleDelete(quote.id)}>Delete</Button>
      </div>
    </div>

  )
}
