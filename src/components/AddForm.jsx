import { Button, Form } from 'react-bootstrap'
import { useForm } from '../hooks/useForm'

export const AddForm = () => {
  const [{ author }, handleInputChange, reset] = useForm({
    author: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(author)

    reset()
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
