export type TasksState = Record<string, TaskType[]>

export type TaskStateType = 'done' | 'notDone' | 'progress'

export type TaskType = {
  id: string
  state: TaskStateType
  text: string
}

export type DateType = {
  day: number
  month: number
  year: number
}
