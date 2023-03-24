export const editTask = (list, updatedTask) => {
  return list.map((task) => {
    if (task.taskId === updatedTask.taskId) {
      return updatedTask
    }

    return task
  })
}
