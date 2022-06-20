import clsx from 'clsx'
import { useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { toCalendar } from 'shared/routing'
import { ChangeTaskState, ChangeTaskText } from 'shared/ui'
import { getTaskById } from 'store/tasks'
import styles from './index.module.scss'

export const Task = () => {
  const params = useParams()
  const task = useSelector(getTaskById(params.id))

  if (!task) {
    return <Navigate to={toCalendar()} />
  }

  const { state, id, text } = task

  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.done]: state === 'done',
        [styles.notDone]: state === 'notDone',
      })}
    >
      <h1>{text}</h1>
      <ChangeTaskState state={state} id={id} />
      <ChangeTaskText text={text} id={id} />
    </div>
  )
}
