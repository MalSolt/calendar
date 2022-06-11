import { format, getMonth } from 'date-fns'
import { DateType } from 'shared/types'

export const isToday = ({ day, month }: DateType) => {
  return +format(new Date(), 'dd') === day && month === getMonth(new Date())
}
