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

  return (
    <td
      className={clsx(styles.day, { [styles.disabled]: !date.day, [styles.today]: isToday(date) })}
      onClick={onClick}
    >
      {tasks.slice(0, 2).map((task) => (
        <Task {...task} className={styles.task} />
      ))}
      {tasks.length > 2 && <span className={styles.tasksInfo}> +{tasks.slice(2).length} more</span>}
      <span className={styles.dayNumber}>{date.day}</span>
    </td>
  )
}
