import { useReducer } from 'react'
import { List, Task, Counter, Content, Header, Footer, AddForm, Empty } from './components'
import { initialState, taskReducer, TasksContext, DispatchTasksContext } from './context'

export const Todo = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  return (
    <TasksContext.Provider value={state}>
      <DispatchTasksContext.Provider value={dispatch}>
        <Content>
          <Header>
            <AddForm />
          </Header>
          <List renderItem={(task) => <Task {...task} key={task.id} />} renderEmpty={() => <Empty />} />
          <Footer>
            <Counter />
          </Footer>
        </Content>
      </DispatchTasksContext.Provider>
    </TasksContext.Provider>
  )
}
