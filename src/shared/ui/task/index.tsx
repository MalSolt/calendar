import clsx from 'clsx'
import React, { useCallback, useRef, useState } from 'react'
import { useClickOutside } from 'shared/hooks'
import menuIcon from 'shared/images/menu.png'
import { TaskType } from 'shared/types'
import styles from './index.module.scss'

interface Props extends TaskType {
  className?: string
  toolbar?: JSX.Element
}

export const Task = ({ text, state, className, toolbar }: Props) => {
  const [isToolbarOpen, setIsToolbarOpen] = useState(false)
  const toolbarRef = useRef<HTMLDivElement | null>(null)
  const handleClosePopover = useCallback(() => setIsToolbarOpen(false), [])
  useClickOutside(toolbarRef, handleClosePopover)

  const handleToggleToolbar = () => setIsToolbarOpen((prev) => !prev)

  return (
    <div
      className={clsx(styles.task, className, {
        [styles.done]: state === 'done',
        [styles.notDone]: state === 'notDone',
      })}
    >
      <div className={styles.text}>{text}</div>
      <div ref={toolbarRef}>
        {isToolbarOpen && <div className={styles.toolbar}>{toolbar}</div>}
        {toolbar && (
          <img className={styles.menuIcon} src={menuIcon} alt='' onClick={handleToggleToolbar} />
        )}
      </div>
    </div>
  )
}
