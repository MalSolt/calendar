import { format, getMonth, getYear } from 'date-fns'
import { DateType } from 'shared/types'

export const isToday = ({ day, month, year }: DateType) => {
  return (
    +format(new Date(), 'd') === day &&
    month === getMonth(new Date()) &&
    year === getYear(new Date())
  )
}
