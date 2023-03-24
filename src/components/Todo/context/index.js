import { useReducer, useContext } from 'react'
import { taskReducer } from './reducers'
import { initialState } from './state'
import { TasksContext, DispatchTasksContext } from './context'

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState)

  return (
    <TasksContext.Provider value={state}>
      <DispatchTasksContext.Provider value={dispatch}>{children}</DispatchTasksContext.Provider>
    </TasksContext.Provider>
  )
}

export const useTasks = () => {
  return useContext(TasksContext)
}

export const useTasksList = () => {
  const state = useTasks()
  return state.list || []
}

export const useTasksDispatch = () => {
  return useContext(DispatchTasksContext)
}
