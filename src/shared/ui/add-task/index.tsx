import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DateType } from 'shared/types'
import { Input } from 'shared/ui'
import { addTask } from 'store/tasks'

interface Props {
  date: DateType
}

export const AddTask = ({ date }: Props) => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleEnter = () => {
    const text = inputValue.trim()
    if (!text) return
    dispatch(addTask({ text, date }))
    setInputValue('')
  }

  return <Input value={inputValue} onChange={handleChange} onEnter={handleEnter} />
}
