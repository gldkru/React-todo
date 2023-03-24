import { useContext } from 'react'
import { DispatchTasksContext } from '../context'
import { Button } from '../../ui/Button'
import { RemoveIcon } from '../../ui/icons/Remove'

export const Task = ({ name, id, completed }) => {
  const dispatchTasks = useContext(DispatchTasksContext)

  const handleCompleted = (e) => {
    dispatchTasks({
      type: 'COMPLETE_TASK',
      completed: e.target.checked,
      id
    })
  }

  const handleRemove = (e) => {
    e.stopPropagation()

    dispatchTasks({
      type: 'REMOVE_TASK',
      id
    })
  }

  // todo
  // const handleEdit = () => {}

  return (
    <label className={`flex h-14 items-center space-x-4 rounded-md border p-4 ${completed && 'text-gray-400'}`}>
      {/* Task checkbox */}
      <input type='checkbox' className='shrink-0' value={completed} onChange={handleCompleted} />
      {/* Task name */}
      <div className='grow truncate'>{name}</div>
      {/* Task remove */}
      <Button size='small' className='shrink-0 hover:bg-red-600 hover:text-white' onClick={handleRemove}>
        <RemoveIcon />
      </Button>
    </label>
  )
}
