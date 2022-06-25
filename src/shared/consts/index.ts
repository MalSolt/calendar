import { DateType } from 'shared/types'

export const DATE = {
  MONTHS: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  WEEK_DAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  WEEK_DAYS_NUMBER: 7,
}

export const defaultDate: DateType = {
  day: 0,
  month: 0,
  year: 0,
}
