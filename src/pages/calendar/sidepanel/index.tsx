import { useDispatch, useSelector } from 'react-redux'
import { DateType } from 'shared/types'
import { AddTask, ChangeTaskState, Sidepanel as SharedSidepanel, Task } from 'shared/ui'
import { addTask, changeTaskState, getDayTasks } from 'store/tasks'
import styles from './index.module.scss'

interface Props {
  isOpen: boolean
  onClose: () => void
  date: DateType
}

export const Sidepanel = ({ isOpen, onClose, date }: Props) => {
  const dispatch = useDispatch()
  const tasks = useSelector(getDayTasks(date))

  return (
    <SharedSidepanel isOpen={isOpen} onClose={onClose}>
      <AddTask addTask={(text) => dispatch(addTask({ text, date }))} />
      {tasks.map((task) => (
        <Task
          {...task}
          key={task.id}
          className={styles.task}
          toolbar={
            <ChangeTaskState
              state={task.state}
              onChange={(newState) => dispatch(changeTaskState({ id: task.id, newState, date }))}
            />
          }
        />
      ))}
    </SharedSidepanel>
  )
}
