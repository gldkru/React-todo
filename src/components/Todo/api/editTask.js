export const editTask = (list, updatedTask) => {
  return list.map((task) => {
    if (task.id === updatedTask.id) {
      return updatedTask
    }

    return task
  })
}
