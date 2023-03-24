import { Button } from '../../ui/Button'
import { PlusIcon } from '../../ui/icons/Plus'

export const AddForm = () => {
  return (
    <form action='#' className='flex h-12 w-full items-center overflow-hidden rounded-md border-2 bg-white pr-2'>
      <input
        type='text'
        className='h-full grow px-3 placeholder:text-gray-500 focus:outline-none'
        placeholder='Новая задача...'
      />
      <Button className='bg-blue-600 text-white hover:bg-blue-500'>
        <PlusIcon />
      </Button>
    </form>
  )
}
