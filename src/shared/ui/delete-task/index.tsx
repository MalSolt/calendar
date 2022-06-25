import { useDispatch } from 'react-redux'
import { DateType } from 'shared/types'
import { deleteTask } from 'store/tasks'
import { Cross } from '..'

interface Props {
  id: string
  date: DateType
}
export const DeleteTask = ({ id, date }: Props) => {
  const dispatch = useDispatch()

  const handleDeleteTask = () => dispatch(deleteTask({ id, date }))

  return <Cross onClick={handleDeleteTask} />
}
