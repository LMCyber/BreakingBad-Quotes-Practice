import { ListGroup } from 'react-bootstrap'
import { QuotesListItem } from './QuotesListItem'

export const QuotesList = ({ quotes, handleDelete }) => {
  return (
    <ListGroup variant='flush'>
      {
          quotes.map((quote) => (
            <ListGroup.Item key={quote.id}>
              <QuotesListItem quote={quote} handleDelete={handleDelete} />
            </ListGroup.Item>
          ))
        }
    </ListGroup>
  )
}
