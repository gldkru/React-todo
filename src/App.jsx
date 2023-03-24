import { StrictMode } from 'react'
import { Container } from './components/ui/Container'
import { Todo } from './components/Todo'

export const App = () => {
  return (
    <StrictMode>
      <Container>
        <Todo />
      </Container>
    </StrictMode>
  )
}
