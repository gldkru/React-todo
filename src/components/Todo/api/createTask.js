import { v4 as uuid } from 'uuid'

export const createTask = (taskName) => {
  return {
    // todo: time
    // todo: due time
    // todo: descrtiption
    id: uuid(),
    name: taskName,
    completed: false
  }
}
