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
        <div className='p-6'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur temporibus vitae, cupiditate doloribus
          necessitatibus iure aliquam ullam inventore eaque dolorem omnis quas! Rem voluptas necessitatibus doloribus
          maiores quae saepe alias.
        </div>
        {/* Footer */}
        <div className='px-6 pb-5 text-center'>123</div>
      </div>
    </Container>
  )
}
