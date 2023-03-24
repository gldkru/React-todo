import { Button } from './components/ui/Button'
import { PlusIcon } from './components/ui/icons/Plus'
import { RemoveIcon } from './components/ui/icons/Remove'
import { Container } from './components/ui/Container'

export const App = () => {
  return (
    <Container>
      <div className='m-auto w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-xl'>
        {/* Header */}
        <div className='bg-blue-50 px-6 py-5'>
          {/* Task add form */}
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
        </div>
        {/* Content (TaskList) */}
        <div className='space-y-4 p-6'>
          {/* Task */}
          {/* label for checkbox click scope */}
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

          {/* Task with long text */}
          <label className='flex h-14 items-center space-x-4 rounded-md border p-4'>
            {/* Task checkbox */}
            <input type='checkbox' className='shrink-0' />
            {/* Task name */}
            <div className='grow truncate'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iure temporibus blanditiis et adipisci,
              iusto ipsam cum unde repellendus saepe itaque suscipit eos, corporis possimus consequuntur magnam non
              eligendi! Voluptas?
            </div>
            {/* Task remove */}
            <Button size='small' className='shrink-0 hover:bg-red-600 hover:text-white'>
              <RemoveIcon />
            </Button>
          </label>

          {/* Completed task */}
          <label className='flex h-14 items-center space-x-4 rounded-md border p-4 text-gray-400'>
            {/* Task checkbox */}
            <input type='checkbox' checked className='shrink-0' />
            {/* Task name */}
            <div className='grow truncate'>Развернуть проект</div>
            {/* Task remove */}
            <Button size='small' className='shrink-0 hover:bg-red-600 hover:text-white'>
              <RemoveIcon />
            </Button>
          </label>
        </div>
        {/* Footer */}
        <div className='px-6 pb-5 text-center text-sm text-gray-400'>Сделано 1 из 3</div>
      </div>
    </Container>
  )
}
