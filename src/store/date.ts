import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getDay, getDaysInMonth, getMonth, getYear } from 'date-fns'
import { createSelector } from 'reselect'
import { DATE } from 'shared/consts'
import { newArr } from 'shared/helpers'
import { RootState } from 'store'

const { WEEK_DAYS_NUMBER } = DATE

const getInitialDate = () => {
  const month = getMonth(new Date())
  const year = getYear(new Date())
  const monthDaysCount = getDaysInMonth(new Date(year, month))
  const monthFirstDay = getDay(new Date(year, month))
  return { month, year, monthDaysCount, monthFirstDay }
}

type InitialDate = ReturnType<typeof getInitialDate>

const getNewDate = (state: InitialDate, year: number, month: number) => ({
  ...state,
  year,
  month,
  monthDaysCount: getDaysInMonth(new Date(year, month)),
  monthFirstDay: getDay(new Date(year, month)),
})

export const dateSlice = createSlice({
  name: 'date',
  initialState: getInitialDate(),
  reducers: {
    changeYear: (state, action: PayloadAction<{ year: number }>) => {
      return getNewDate(state, action.payload.year, state.month)
    },
    changeMonth: (state, action: PayloadAction<{ month: number }>) => {
      return getNewDate(state, state.year, action.payload.month)
    },
  },
})

export const getDate = ({ date }: RootState) => date
export const getMonthDays = createSelector(getDate, (date) =>
  newArr(6).map((_, weekIndex) =>
    newArr(7).map((_, dayIndex) => {
      const day = dayIndex + weekIndex * WEEK_DAYS_NUMBER
      const monthLastDay = date.monthDaysCount + date.monthFirstDay
      return day >= date.monthFirstDay && day < monthLastDay ? day - date.monthFirstDay + 1 : 0
    })
  )
)

export const { changeYear, changeMonth } = dateSlice.actions

export default dateSlice.reducer
