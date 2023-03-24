import { addTask, createTask, removeTask, editTask, completeTask } from '../api'

export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK': {
      const task = createTask(action.taskName)

      return {
        ...state,
        list: addTask(state.list, task)
      }
    }

    case 'REMOVE_TASK': {
      return {
        ...state,
        list: removeTask(state.list, action.id)
      }
    }

    case 'EDIT_TASK': {
      const task = createTask(action.taskName)

      return {
        ...state,
        list: editTask(state.list, task)
      }
    }

    case 'COMPLETE_TASK': {
      return {
        ...state,
        list: completeTask(state.list, action.id)
      }
    }
  }
}
