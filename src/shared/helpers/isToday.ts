import { format, getMonth } from 'date-fns'

export const isToday = (day: number | null, month: number) => {
  return +format(new Date(), 'dd') === day && month === getMonth(new Date())
}
