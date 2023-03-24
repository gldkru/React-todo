import { useContext, useMemo } from 'react'
import { TasksContext } from '../context'

export const Counter = () => {
  const state = useContext(TasksContext)

  const tasksCount = useMemo(() => state.list.length, [state.list])
  const completedTasksCount = useMemo(() => state.list.filter((task) => task.completed).length, [state.list])

  return (
    <div className='text-sm text-gray-400'>
      {tasksCount ? `Сделано ${completedTasksCount} из ${tasksCount}` : 'Задач нет'}
    </div>
  )
}
