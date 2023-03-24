import { useMemo } from 'react'
import { useTasksList } from '../context'

export const Counter = () => {
  const list = useTasksList()

  const tasksCount = useMemo(() => list.length, [list])
  const completedTasksCount = useMemo(() => list.filter((task) => task.completed).length, [list])

  return (
    <div className='text-sm text-gray-400'>
      {tasksCount ? `Сделано ${completedTasksCount} из ${tasksCount}` : 'Задач нет'}
    </div>
  )
}
