import { useContext } from 'react'
import { TasksContext } from '../context'

// Doc: https://react.dev/reference/react/Children#calling-a-render-prop-to-customize-rendering

export const List = ({ renderItem, renderEmpty }) => {
  const { list } = useContext(TasksContext)

  return (
    <div className='space-y-4 p-6'>
      {list && list.length ? <>{list.map((task) => renderItem(task))}</> : renderEmpty()}
    </div>
  )
}
