import clsx from 'clsx'
import { TaskType } from 'shared/types'
import { Task } from 'shared/ui'
import styles from './index.module.scss'

interface Props {
  day: number | null
  isToday: boolean
  onClick?: () => void
  tasks: TaskType[]
}

export const Day = ({ day, isToday, onClick, tasks }: Props) => (
  <td
    className={clsx(styles.day, { [styles.disabled]: !day, [styles.today]: isToday })}
    onClick={onClick}
  >
    {tasks.slice(0, 2).map((task) => (
      <Task {...task} className={styles.task} />
    ))}
    {tasks.length > 2 && <span className={styles.tasksInfo}> +{tasks.slice(2).length} more</span>}
    <span className={styles.dayNumber}>{day}</span>
  </td>
)
