import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { formatDate } from 'shared/helpers'
import { DateType, TasksState, TaskStateType } from 'shared/types'
import { RootState } from 'store'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {} as TasksState,
  reducers: {
    addTask: (state, action: PayloadAction<{ text: string; date: DateType }>) => {
      const { text, date } = action.payload
      const id = nanoid()
      const key = formatDate(date)
      state[key] = [{ id, text, state: 'progress' }, ...(state[key] || [])]
    },
    deleteTask: (state, action: PayloadAction<{ id: string; date: DateType }>) => {
      const { id, date } = action.payload
      const key = formatDate(date)
      state[key] = state[key].filter((task) => task.id !== id)
    },
    changeTaskState: (state, action: PayloadAction<{ id: string; newState: TaskStateType }>) => {
      const { id, newState } = action.payload
      const targetTask = Object.values(state)
        .flat()
        .find((task) => task.id === id)
      if (targetTask) targetTask.state = newState
    },
    changeTaskText: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const { id, text } = action.payload
      const targetTask = Object.values(state)
        .flat()
        .find((task) => task.id === id)
      if (targetTask) targetTask.text = text
    },
  },
})

export const getTasks = (state: RootState) => state.tasks
export const getTaskById = (id: string | undefined) => (state: RootState) =>
  Object.values(state.tasks)
    .flat()
    .find((task) => task.id === id)

export const getDayTasks = (date: DateType) => (state: RootState) => {
  const dayTasks = state.tasks[formatDate(date)]
  return dayTasks || []
}

export const { addTask, deleteTask, changeTaskState, changeTaskText } = tasksSlice.actions

export default tasksSlice.reducer
