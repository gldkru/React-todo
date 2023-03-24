import { useReducer } from 'react'
import { initialState, taskReducer, TasksContext, DispatchTasksContext } from './context'
import { List, Task, Counter, Content, Header, Footer, AddForm } from './components'

export const Todo = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  return (
    <TasksContext.Provider value={state}>
      <DispatchTasksContext.Provider value={dispatch}>{children}</DispatchTasksContext.Provider>
    </TasksContext.Provider>
  )
}

Todo.List = List
Todo.Task = Task
Todo.Counter = Counter
Todo.Content = Content
Todo.Header = Header
Todo.Footer = Footer
Todo.AddForm = AddForm
