import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTaskText } from 'store/tasks'
import { Input } from '..'
import pencilIcon from 'shared/images/pencil.svg'
import styles from './index.module.scss'
import clsx from 'clsx'

interface Props {
  text: string
  id: string
  editable?: boolean
  className?: string
}

export const ChangeTaskText = ({ text, id, editable = true, className }: Props) => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState(text)
  const [editMode, setEditMode] = useState(false)

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleActivateEditMode = () => setEditMode(true)

  const handleEditText = () => {
    setEditMode(false)
    dispatch(changeTaskText({ id, text: inputValue }))
  }

  return editMode ? (
    <Input
      className={className}
      value={inputValue}
      onChange={handleChangeInput}
      onEnter={handleEditText}
      autoFocus
    />
  ) : (
    <div className={clsx(styles.text, className)}>
      {text}
      {editable && (
        <img className={styles.pencil} src={pencilIcon} alt='' onClick={handleActivateEditMode} />
      )}
    </div>
  )
}
