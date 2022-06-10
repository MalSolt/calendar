import React, { useState } from 'react'
import { Input } from 'shared/ui'

interface Props {
  addTask: (text: string) => void
}

export const AddTask = ({ addTask }: Props) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleEnter = () => {
    if (!inputValue.trim()) return
    addTask(inputValue)
    setInputValue('')
  }

  return <Input value={inputValue} onChange={handleChange} onEnter={handleEnter} />
}
