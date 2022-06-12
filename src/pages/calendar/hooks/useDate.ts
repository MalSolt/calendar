import { getDay, getDaysInMonth, getMonth, getYear } from 'date-fns'
import { useMemo, useState } from 'react'
import { DATE } from 'shared/consts'
import { newArr } from 'shared/helpers'

const { FIRST_MONTH, LAST_MONTH, WEEK_DAYS_NUMBER } = DATE

const getInitialDate = () => {
  const month = getMonth(new Date())
  const year = getYear(new Date())
  const monthDaysCount = getDaysInMonth(new Date(year, month))
  const monthFirstDay = getDay(new Date(year, month))
  return { month, year, monthDaysCount, monthFirstDay }
}

export const useDate = () => {
  const [date, setDate] = useState(getInitialDate())

  const toPrevMonth = () => {
    if (date.month !== FIRST_MONTH) {
      const newMonth = date.month - 1
      setDate({
        ...date,
        month: newMonth,
        monthDaysCount: getDaysInMonth(new Date(date.year, newMonth)),
        monthFirstDay: getDay(new Date(date.year, newMonth)),
      })
    }
  }

  const toNextMonth = () => {
    if (date.month !== LAST_MONTH) {
      const newMonth = date.month + 1
      setDate({
        ...date,
        month: newMonth,
        monthDaysCount: getDaysInMonth(new Date(date.year, newMonth)),
        monthFirstDay: getDay(new Date(date.year, newMonth)),
      })
    }
  }

  const monthDays = useMemo(
    () =>
      newArr(6).map((_, weekIndex) =>
        newArr(7).map((_, dayIndex) => {
          const day = dayIndex + weekIndex * WEEK_DAYS_NUMBER
          const monthLastDay = date.monthDaysCount + date.monthFirstDay
          return day >= date.monthFirstDay && day < monthLastDay ? day - date.monthFirstDay + 1 : 0
        })
      ),
    [date]
  )

  return {
    month: date.month,
    toPrevMonth,
    toNextMonth,
    monthDays,
  }
}
