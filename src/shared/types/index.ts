export type TaskStateType = 'done' | 'notDone' | 'progress'

export type TaskType = {
  id: number
  state: TaskStateType
  text: string
}

export type DateType = {
  day: number
  month: number
}
