import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createId, formatDate } from 'shared/helpers'
import { DateType, TasksState, TaskStateType } from 'shared/types'
import { RootState } from 'store'

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {} as TasksState,
  reducers: {
    addTask: (state, action: PayloadAction<{ text: string; date: DateType }>) => {
      const { text, date } = action.payload
      const id = createId()
      const key = formatDate(date)
      state[key] = [{ id, text, state: 'progress' }, ...(state[key] || [])]
    },
    changeTaskState: (
      state,
      action: PayloadAction<{ id: number; newState: TaskStateType; date: DateType }>
    ) => {
      const { id, newState, date } = action.payload
      const key = formatDate(date)
      const targetTask = state[key].find((task) => task.id === id)
      if (targetTask) targetTask.state = newState
    },
  },
})

export const getTasks = (state: RootState) => state.tasks
export const getDayTasks = (date: DateType) => (state: RootState) => {
  const dayTasks = state.tasks[formatDate(date)]
  return dayTasks || []
}

export const { addTask, changeTaskState } = tasksSlice.actions

export default tasksSlice.reducer
