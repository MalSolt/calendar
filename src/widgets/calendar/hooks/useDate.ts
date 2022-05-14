import { getDay, getDaysInMonth, getMonth, getYear } from 'date-fns'
import { useEffect, useMemo, useState } from 'react'

export const useDate = () => {
  const [month, setMonth] = useState(getMonth(new Date()))
  const [monthDaysCount, setMonthDaysCount] = useState(getDaysInMonth(new Date()))
  const [monthFirstDay, setMonthFirstDay] = useState(getDay(new Date()))
  const [year] = useState(getYear(new Date()))

  const toPrevMonth = () => {
    if (month !== 0) {
      setMonth(month - 1)
    }
  }

  const toNextMonth = () => {
    if (month !== 11) {
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
        new Array(7).fill(null).map((_, elemIndex) => monthDays[elemIndex + 7 * arrIndex])
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
