import { useContext } from 'react'
import { TasksContext } from '../context'

// Doc: https://react.dev/reference/react/Children#calling-a-render-prop-to-customize-rendering

export const List = ({ renderItem, className }) => {
  const { list } = useContext(TasksContext)

  return (
    list &&
    list.length > 0 && <div className={`space-y-4 ${className}`}>{<>{list.map((task) => renderItem(task))}</>}</div>
  )
}
