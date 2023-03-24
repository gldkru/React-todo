export const completeTask = (list, completedTaskId) => {
  return list.map((task) => {
    if (task.taskId === completedTaskId.taskId) {
      return {
        ...task,
        completed: !task.completed
      }
    }

    return task
  })
}
