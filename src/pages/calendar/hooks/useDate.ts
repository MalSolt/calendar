import { getDay, getDaysInMonth, getMonth, getYear } from 'date-fns'
import { useMemo, useState } from 'react'
import { DATE } from 'shared/consts'

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

  const monthDays = useMemo(() => {
    const monthDays = new Array(42)
      .fill(null)
      .map((_, index) => index)
      .map((elem) =>
        elem >= date.monthFirstDay && elem < date.monthDaysCount + date.monthFirstDay
          ? elem - date.monthFirstDay + 1
          : null
      )

    return new Array(6)
      .fill([])
      .map((_, arrIndex) =>
        new Array(7)
          .fill(null)
          .map((_, elemIndex) => monthDays[elemIndex + WEEK_DAYS_NUMBER * arrIndex])
      )
  }, [date])

  return {
    month: date.month,
    toPrevMonth,
    toNextMonth,
    monthDays,
  }
}
