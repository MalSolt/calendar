import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTaskText } from 'store/tasks'
import { Input } from '..'

interface Props {
  text: string
  id: string
  className?: string
}

export const ChangeTaskText = ({ text, id, className }: Props) => {
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
    />
  ) : (
    <div className={className} onClick={handleActivateEditMode}>
      {text}
    </div>
  )
}
