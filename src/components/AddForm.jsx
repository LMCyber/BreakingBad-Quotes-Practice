import { Button, Form } from 'react-bootstrap'
import { getQuote } from '../helpers/getQuote'
import { useForm } from '../hooks/useForm'

export const AddForm = ({ handleAddQuote }) => {
  const [{ author }, handleInputChange, reset] = useForm({
    author: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newQuote = await getQuote(author)

    if (newQuote) {
      handleAddQuote(newQuote)
      reset()
    }
  }

  return (
    <>
      <h4>Add Quote</h4>
      <hr />

      <Form onSubmit={handleSubmit}>
        <Form.Control
          type='text'
          placeholder='Author'
          name='author'
          onChange={handleInputChange}
          value={author}
        />

        <Button
          type='submit'
          variant='primary'
          className='mt-2'
        >Add
        </Button>

      </Form>
    </>
  )
}
