import clsx from 'clsx'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import menuIcon from 'shared/images/menu.png'
import { toTask } from 'shared/routing'
import { TaskType } from 'shared/types'
import { ChangeTaskText, Popover } from '..'
import styles from './index.module.scss'

interface Props extends TaskType {
  className?: string
  toolbar?: JSX.Element
}

export const Task = ({ id, text, state, className, toolbar }: Props) => {
  const navigate = useNavigate()
  const [isToolbarOpen, setIsToolbarOpen] = useState(false)

  const handleClosePopover = () => setIsToolbarOpen(false)
  const handleToggleToolbar = () => setIsToolbarOpen((prev) => !prev)
  const handleNavigateToTask = () => navigate(toTask(id))

  return (
    <div onDoubleClick={handleNavigateToTask} className={clsx(styles[state], className)}>
      <ChangeTaskText text={text} id={id} className={styles.text} editable={Boolean(toolbar)} />
      {toolbar && (
        <Popover
          containerClassName={styles.popover}
          onClickOutside={handleClosePopover}
          isOpen={isToolbarOpen}
          content={<div className={styles.toolbar}>{toolbar}</div>}
        >
          <img src={menuIcon} alt='' onClick={handleToggleToolbar} />
        </Popover>
      )}
    </div>
  )
}
