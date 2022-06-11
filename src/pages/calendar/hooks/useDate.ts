import { getDay, getDaysInMonth, getMonth, getYear } from 'date-fns'
import { useEffect, useMemo, useState } from 'react'
import { DATE } from 'shared/consts'

const { FIRST_MONTH, LAST_MONTH, WEEK_DAYS_NUMBER } = DATE

export const useDate = () => {
  const [month, setMonth] = useState(getMonth(new Date()))
  const [monthDaysCount, setMonthDaysCount] = useState(getDaysInMonth(new Date()))
  const [monthFirstDay, setMonthFirstDay] = useState(getDay(new Date()))
  const [year] = useState(getYear(new Date()))

  const toPrevMonth = () => {
    if (month !== FIRST_MONTH) {
      setMonth(month - 1)
    }
  }

  const toNextMonth = () => {
    if (month !== LAST_MONTH) {
      setMonth(month + 1)
    }
  }

  const monthDays = useMemo(() => {
    const monthDays = new Array(42)
      .fill(null)
      .map((_, index) => index)
      .map((elem) =>
        elem >= monthFirstDay && elem < monthDaysCount + monthFirstDay
          ? elem - monthFirstDay + 1
          : null
      )

    return new Array(6)
      .fill([])
      .map((_, arrIndex) =>
        new Array(7)
          .fill(null)
          .map((_, elemIndex) => monthDays[elemIndex + WEEK_DAYS_NUMBER * arrIndex])
      )
  }, [monthDaysCount, monthFirstDay])

  useEffect(() => {
    setMonthFirstDay(getDay(new Date(year, month)))
    setMonthDaysCount(getDaysInMonth(new Date(year, month)))
  }, [month, year])

  return {
    month,
    toPrevMonth,
    toNextMonth,
    monthDays,
  }
}
