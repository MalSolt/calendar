import { useDispatch } from 'react-redux'
import { DateType } from 'shared/types'
import { deleteTask } from 'store/tasks'
import styles from './index.module.scss'

interface Props {
  id: string
  date: DateType
}
export const DeleteTask = ({ id, date }: Props) => {
  const dispatch = useDispatch()

  const handleDeleteTask = () => dispatch(deleteTask({ id, date }))

  return (
    <div className={styles.cross} onClick={handleDeleteTask}>
      &times;
    </div>
  )
}
