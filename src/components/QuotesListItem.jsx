import { Button } from 'react-bootstrap'

export const QuotesListItem = ({ quote, handleDelete }) => {
  return (
    <div className='d-flex' key={quote.id}>
      <div className='me-auto'>
        <p>{quote.quote} <span className='text-secondary'>- {quote.author}</span></p>
      </div>

      <div>
        <Button variant='danger'>Delete</Button>
      </div>
    </div>

  )
}
