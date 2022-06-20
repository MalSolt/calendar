import clsx from 'clsx'
import React, { useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useClickOutside } from 'shared/hooks'
import menuIcon from 'shared/images/menu.png'
import { toTask } from 'shared/routing'
import { TaskType } from 'shared/types'
import { ChangeTaskText } from '..'
import styles from './index.module.scss'

interface Props extends TaskType {
  className?: string
  toolbar?: JSX.Element
}

export const Task = ({ id, text, state, className, toolbar }: Props) => {
  const navigate = useNavigate()
  const [isToolbarOpen, setIsToolbarOpen] = useState(false)
  const toolbarRef = useRef<HTMLDivElement | null>(null)
  const handleClosePopover = useCallback(() => setIsToolbarOpen(false), [])
  useClickOutside(toolbarRef, handleClosePopover)

  const handleToggleToolbar = () => setIsToolbarOpen((prev) => !prev)

  const handleNavigateToTask = () => {
    navigate(toTask(id))
  }

  return (
    <div
      onDoubleClick={handleNavigateToTask}
      className={clsx(styles.task, className, {
        [styles.done]: state === 'done',
        [styles.notDone]: state === 'notDone',
      })}
    >
      <ChangeTaskText text={text} id={id} className={styles.text} edit={!!toolbar} />
      <div ref={toolbarRef}>
        {isToolbarOpen && <div className={styles.toolbar}>{toolbar}</div>}
        {toolbar && (
          <img className={styles.menuIcon} src={menuIcon} alt='' onClick={handleToggleToolbar} />
        )}
      </div>
    </div>
  )
}
