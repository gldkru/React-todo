import { Button } from '../../ui/Button'
import { RemoveIcon } from '../../ui/icons/Remove'

export const Task = () => {
  return (
    <label className='flex h-14 items-center space-x-4 rounded-md border p-4'>
      {/* Task checkbox */}
      <input type='checkbox' className='shrink-0' />
      {/* Task name */}
      <div className='grow truncate'>Вывести список задач</div>
      {/* Task remove */}
      <Button size='small' className='shrink-0 hover:bg-red-600 hover:text-white'>
        <RemoveIcon />
      </Button>
    </label>
  )
}
