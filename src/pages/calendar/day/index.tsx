import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { isToday } from 'shared/helpers'
import { DateType } from 'shared/types'
import { Task } from 'shared/ui'
import { getDayTasks } from 'store/tasks'
import styles from './index.module.scss'

interface Props {
  date: DateType
  onClick?: () => void
}

export const Day = ({ date, onClick }: Props) => {
  const tasks = useSelector(getDayTasks(date))

  const visibleTasksNumber = 2
  const otherTasksNumber = tasks.length - visibleTasksNumber

  const visibleTasks = tasks
    .slice(0, visibleTasksNumber)
    .map((task) => <Task {...task} className={styles.task} key={task.id} />)

  return (
    <td
      className={clsx(styles.day, { [styles.disabled]: !date.day, [styles.today]: isToday(date) })}
      onClick={date.day ? onClick : undefined}
    >
      {visibleTasks}
      {otherTasksNumber > 0 && <span className={styles.tasksInfo}> +{otherTasksNumber} more</span>}
      <span className={styles.dayNumber}>{date.day || null}</span>
    </td>
  )
}
