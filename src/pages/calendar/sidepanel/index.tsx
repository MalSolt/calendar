import { useSelector } from 'react-redux'
import { DateType } from 'shared/types'
import { AddTask, ChangeTaskState, DeleteTask, Sidepanel as SharedSidepanel, Task } from 'shared/ui'
import { getDayTasks } from 'store/tasks'
import styles from './index.module.scss'

interface Props {
  isOpen: boolean
  onClose: () => void
  date: DateType
}

export const Sidepanel = ({ isOpen, onClose, date }: Props) => {
  const tasks = useSelector(getDayTasks(date))

  return (
    <SharedSidepanel isOpen={isOpen} onClose={onClose}>
      <AddTask date={date} />
      {tasks.map((task) => (
        <Task
          {...task}
          key={task.id}
          className={styles.task}
          toolbar={
            <>
              <DeleteTask id={task.id} date={date} />
              <ChangeTaskState state={task.state} id={task.id} />
            </>
          }
        />
      ))}
    </SharedSidepanel>
  )
}
