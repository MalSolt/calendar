import React, { useState } from 'react'
import { TaskType } from 'shared/types'
import { Input, Sidepanel as SharedSidepanel, Task } from 'shared/ui'
import styles from './index.module.scss'

interface Props {
  date: { day: number; month: number }
  tasks: TaskType[]
  addTask: (text: string, date: { day: number; month: number }) => void
  isOpen: boolean
  onClose: () => void
}

export const Sidepanel = ({ date, addTask, tasks, isOpen, onClose }: Props) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTask(inputValue, date)
      setInputValue('')
    }
  }

  return (
    <SharedSidepanel isOpen={isOpen} onClose={onClose}>
      <Input value={inputValue} onChange={handleInputChange} onKeyDown={handleInputKeyDown} />
      {tasks.map((task) => (
        <Task className={styles.task} {...task} />
      ))}
    </SharedSidepanel>
  )
}
