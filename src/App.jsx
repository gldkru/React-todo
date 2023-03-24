import { StrictMode } from 'react'
import { Container } from './components/ui/Container'
import { Todo } from './components/Todo'

export const App = () => {
  return (
    <StrictMode>
      <Container>
        <Todo>
          <Todo.Content>
            <Todo.Header>
              <Todo.AddForm />
            </Todo.Header>
            <Todo.List className='px-6 pt-6' renderItem={(task) => <Todo.Task {...task} key={task.id} />} />
            <Todo.Footer>
              <Todo.Counter />
            </Todo.Footer>
          </Todo.Content>
        </Todo>
      </Container>
    </StrictMode>
  )
}
