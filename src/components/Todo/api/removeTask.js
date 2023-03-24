export const removeTask = (list, removedId) => {
  return list.filter((task) => task.taskId !== removedId)
}
