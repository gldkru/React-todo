import { List, Task, Counter, Content, Header, Footer, AddForm } from './components'

export const Todo = () => {
  return (
    <Content>
      <Header>
        <AddForm />
      </Header>
      <List>
        <Task />
        <Task />
        <Task />
      </List>
      <Footer>
        <Counter />
      </Footer>
    </Content>
  )
}
