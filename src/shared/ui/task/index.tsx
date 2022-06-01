import clsx from 'clsx'
import { TaskType } from 'shared/types'
import styles from './index.module.scss'

interface Props extends TaskType {
  className?: string
}

export const Task = ({ text, state, className }: Props) => {
  return (
    <div
      className={clsx(styles.task, className, {
        [styles.done]: state === 'done',
        [styles.notDone]: state === 'notDone',
      })}
    >
      {text}
    </div>
  )
}
