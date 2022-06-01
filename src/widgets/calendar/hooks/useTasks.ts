import { useEffect, useState } from 'react'
import { createId } from 'shared/helpers'
import { DateType, TaskStateType, TaskType } from 'shared/types'

const formatDate = ({ day, month }: DateType) => `${day}.${month}`

export const useTasks = () => {
  const [tasks, setTasks] = useState<{ [index: string]: TaskType[] }>(
    JSON.parse(localStorage.getItem('tasks') || '')
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const getDayTasks = (date: DateType) => {
    const dayTasks = tasks[formatDate(date)]
    return dayTasks || []
  }

  const addTask = (text: string, date: DateType) => {
    const id = createId()
    const key = formatDate(date)
    setTasks((prev) => ({
      ...prev,
      [key]: [{ id, text, state: 'progress' }, ...(prev[key] || [])],
    }))
  }

  const changeTaskState = (id: number, state: TaskStateType, date: DateType) => {
    const key = formatDate(date)
    setTasks((prev) => ({
      ...prev,
      [key]: prev[key].map((task) => (task.id === id ? { ...task, state } : task)),
    }))
  }

  return { addTask, getDayTasks, changeTaskState }
}
