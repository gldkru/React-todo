import { useState } from 'react'
import { Button } from '../../ui/Button'
import { PlusIcon } from '../../ui/icons/Plus'
import { useTasksDispatch } from '../context'

export const AddForm = () => {
  const [taskName, setTaskName] = useState('')
  const dispatchTasks = useTasksDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatchTasks({
      type: 'ADD_TASK',
      taskName: taskName
    })

    setTaskName('')
  }

  return (
    <form
      action='#'
      className='flex h-12 w-full items-center overflow-hidden rounded-md border-2 bg-white pr-2'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        className='h-full grow px-3 placeholder:text-gray-500 focus:outline-none'
        placeholder='Новая задача...'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Button type='submit' className='bg-blue-600 text-white hover:bg-blue-500'>
        <PlusIcon />
      </Button>
    </form>
  )
}
