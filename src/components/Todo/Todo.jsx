import { TodoProvider } from './context'
import { List, Task, Counter, Content, Header, Footer, AddForm } from './components'

export const Todo = ({ children }) => {
  return <TodoProvider>{children}</TodoProvider>
}

Todo.List = List
Todo.Task = Task
Todo.Counter = Counter
Todo.Content = Content
Todo.Header = Header
Todo.Footer = Footer
Todo.AddForm = AddForm
