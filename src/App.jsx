import Container from './components/Container'

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
            <button className='inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500'>
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10.75 4.75C10.75 4.55109 10.671 4.36032 10.5303 4.21967C10.3897 4.07902 10.1989 4 10 4C9.80109 4 9.61032 4.07902 9.46967 4.21967C9.32902 4.36032 9.25 4.55109 9.25 4.75V9.25H4.75C4.55109 9.25 4.36032 9.32902 4.21967 9.46967C4.07902 9.61032 4 9.80109 4 10C4 10.1989 4.07902 10.3897 4.21967 10.5303C4.36032 10.671 4.55109 10.75 4.75 10.75H9.25V15.25C9.25 15.4489 9.32902 15.6397 9.46967 15.7803C9.61032 15.921 9.80109 16 10 16C10.1989 16 10.3897 15.921 10.5303 15.7803C10.671 15.6397 10.75 15.4489 10.75 15.25V10.75H15.25C15.4489 10.75 15.6397 10.671 15.7803 10.5303C15.921 10.3897 16 10.1989 16 10C16 9.80109 15.921 9.61032 15.7803 9.46967C15.6397 9.32902 15.4489 9.25 15.25 9.25H10.75V4.75Z'
                  fill='white'
                />
              </svg>
            </button>
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
            <button
              className='inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md hover:bg-red-600 hover:text-white'
              type='button'
            >
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6.28003 5.22C6.13786 5.08752 5.94981 5.0154 5.75551 5.01882C5.56121 5.02225 5.37582 5.10096 5.23841 5.23838C5.101 5.37579 5.02228 5.56118 5.01886 5.75548C5.01543 5.94978 5.08755 6.13782 5.22003 6.28L8.94003 10L5.22003 13.72C5.14634 13.7887 5.08724 13.8715 5.04625 13.9635C5.00526 14.0555 4.98322 14.1548 4.98144 14.2555C4.97966 14.3562 4.99819 14.4562 5.03591 14.5496C5.07363 14.643 5.12977 14.7278 5.20099 14.799C5.27221 14.8703 5.35705 14.9264 5.45043 14.9641C5.54382 15.0018 5.64385 15.0204 5.74455 15.0186C5.84526 15.0168 5.94457 14.9948 6.03657 14.9538C6.12857 14.9128 6.21137 14.8537 6.28003 14.78L10 11.06L13.72 14.78C13.7887 14.8537 13.8715 14.9128 13.9635 14.9538C14.0555 14.9948 14.1548 15.0168 14.2555 15.0186C14.3562 15.0204 14.4562 15.0018 14.5496 14.9641C14.643 14.9264 14.7279 14.8703 14.7991 14.799C14.8703 14.7278 14.9264 14.643 14.9642 14.5496C15.0019 14.4562 15.0204 14.3562 15.0186 14.2555C15.0168 14.1548 14.9948 14.0555 14.9538 13.9635C14.9128 13.8715 14.8537 13.7887 14.78 13.72L11.06 10L14.78 6.28C14.9125 6.13782 14.9846 5.94978 14.9812 5.75548C14.9778 5.56118 14.8991 5.37579 14.7617 5.23838C14.6242 5.10096 14.4389 5.02225 14.2446 5.01882C14.0503 5.0154 13.8622 5.08752 13.72 5.22L10 8.94L6.28003 5.22Z'
                  fill='currentColor'
                />
              </svg>
            </button>
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
            <button
              className='inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md hover:bg-red-600 hover:text-white'
              type='button'
            >
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6.28003 5.22C6.13786 5.08752 5.94981 5.0154 5.75551 5.01882C5.56121 5.02225 5.37582 5.10096 5.23841 5.23838C5.101 5.37579 5.02228 5.56118 5.01886 5.75548C5.01543 5.94978 5.08755 6.13782 5.22003 6.28L8.94003 10L5.22003 13.72C5.14634 13.7887 5.08724 13.8715 5.04625 13.9635C5.00526 14.0555 4.98322 14.1548 4.98144 14.2555C4.97966 14.3562 4.99819 14.4562 5.03591 14.5496C5.07363 14.643 5.12977 14.7278 5.20099 14.799C5.27221 14.8703 5.35705 14.9264 5.45043 14.9641C5.54382 15.0018 5.64385 15.0204 5.74455 15.0186C5.84526 15.0168 5.94457 14.9948 6.03657 14.9538C6.12857 14.9128 6.21137 14.8537 6.28003 14.78L10 11.06L13.72 14.78C13.7887 14.8537 13.8715 14.9128 13.9635 14.9538C14.0555 14.9948 14.1548 15.0168 14.2555 15.0186C14.3562 15.0204 14.4562 15.0018 14.5496 14.9641C14.643 14.9264 14.7279 14.8703 14.7991 14.799C14.8703 14.7278 14.9264 14.643 14.9642 14.5496C15.0019 14.4562 15.0204 14.3562 15.0186 14.2555C15.0168 14.1548 14.9948 14.0555 14.9538 13.9635C14.9128 13.8715 14.8537 13.7887 14.78 13.72L11.06 10L14.78 6.28C14.9125 6.13782 14.9846 5.94978 14.9812 5.75548C14.9778 5.56118 14.8991 5.37579 14.7617 5.23838C14.6242 5.10096 14.4389 5.02225 14.2446 5.01882C14.0503 5.0154 13.8622 5.08752 13.72 5.22L10 8.94L6.28003 5.22Z'
                  fill='currentColor'
                />
              </svg>
            </button>
          </label>

          {/* Completed task */}
          <label className='flex h-14 items-center space-x-4 rounded-md border p-4 text-gray-400'>
            {/* Task checkbox */}
            <input type='checkbox' checked className='shrink-0' />
            {/* Task name */}
            <div className='grow truncate'>Развернуть проект</div>
            {/* Task remove */}
            <button
              className='inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md hover:bg-red-600 hover:text-white'
              type='button'
            >
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M6.28003 5.22C6.13786 5.08752 5.94981 5.0154 5.75551 5.01882C5.56121 5.02225 5.37582 5.10096 5.23841 5.23838C5.101 5.37579 5.02228 5.56118 5.01886 5.75548C5.01543 5.94978 5.08755 6.13782 5.22003 6.28L8.94003 10L5.22003 13.72C5.14634 13.7887 5.08724 13.8715 5.04625 13.9635C5.00526 14.0555 4.98322 14.1548 4.98144 14.2555C4.97966 14.3562 4.99819 14.4562 5.03591 14.5496C5.07363 14.643 5.12977 14.7278 5.20099 14.799C5.27221 14.8703 5.35705 14.9264 5.45043 14.9641C5.54382 15.0018 5.64385 15.0204 5.74455 15.0186C5.84526 15.0168 5.94457 14.9948 6.03657 14.9538C6.12857 14.9128 6.21137 14.8537 6.28003 14.78L10 11.06L13.72 14.78C13.7887 14.8537 13.8715 14.9128 13.9635 14.9538C14.0555 14.9948 14.1548 15.0168 14.2555 15.0186C14.3562 15.0204 14.4562 15.0018 14.5496 14.9641C14.643 14.9264 14.7279 14.8703 14.7991 14.799C14.8703 14.7278 14.9264 14.643 14.9642 14.5496C15.0019 14.4562 15.0204 14.3562 15.0186 14.2555C15.0168 14.1548 14.9948 14.0555 14.9538 13.9635C14.9128 13.8715 14.8537 13.7887 14.78 13.72L11.06 10L14.78 6.28C14.9125 6.13782 14.9846 5.94978 14.9812 5.75548C14.9778 5.56118 14.8991 5.37579 14.7617 5.23838C14.6242 5.10096 14.4389 5.02225 14.2446 5.01882C14.0503 5.0154 13.8622 5.08752 13.72 5.22L10 8.94L6.28003 5.22Z'
                  fill='currentColor'
                />
              </svg>
            </button>
          </label>
        </div>
        {/* Footer */}
        <div className='px-6 pb-5 text-center text-sm text-gray-400'>Сделано 1 из 3</div>
      </div>
    </Container>
  )
}
