export type TaskType = {
  id: number
  state?: 'done' | 'notDone'
  text: string
}

export type DateType = {
  day: number
  month: number
}
