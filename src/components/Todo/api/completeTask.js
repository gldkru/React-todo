export const completeTask = (list, completedTaskId, completed) => {
  return list.map((task) => {
    if (task.id === completedTaskId) {
      return {
        ...task,
        completed
      }
    }

    return task
  })
}
