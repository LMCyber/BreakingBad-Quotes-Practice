import { ListGroup } from 'react-bootstrap'
import { QuotesListItem } from './QuotesListItem'

export const QuotesList = ({ quotes, handleDelete }) => {
  console.log(quotes)
  return (
    <ListGroup variant='flush'>
      <ListGroup.Item>
        {
          quotes.map((quote) => (
            <QuotesListItem key={quote.id} quote={quote} handleDelete={handleDelete} />
          ))
        }
      </ListGroup.Item>
    </ListGroup>
  )
}
