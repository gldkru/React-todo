import Container from './components/Container'

export const App = () => {
  return (
    <Container>
      <div className='m-auto max-w-xl overflow-hidden rounded-2xl bg-white shadow-xl'>
        {/* Header */}
        <div className='bg-blue-50 px-6 py-5'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci autem libero odio neque doloribus possimus
          vero consequuntur ratione est! Vel facere repellendus illum modi adipisci exercitationem earum doloremque
          reiciendis deleniti.
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
