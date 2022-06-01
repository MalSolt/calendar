import { useEffect, useState } from 'react'
import { createId } from 'shared/helpers'
import { DateType, TaskType } from 'shared/types'

const formatDate = (day: number, month: number) => `${day}.${month}`

export const useTasks = () => {
  const [tasks, setTasks] = useState<{ [index: string]: TaskType[] }>(
    JSON.parse(localStorage.getItem('tasks') || '')
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const getDayTasks = ({ day, month }: DateType) => {
    const dayTasks = tasks[formatDate(day, month)]
    return dayTasks || []
  }

  const addTask = (text: string, { day, month }: DateType) => {
    const id = createId()
    const date = formatDate(day, month)
    setTasks(prev => ({...prev, [date]: [{id, text}, ...(prev[date] || [])]}))
  }

  return { addTask, getDayTasks }
}
