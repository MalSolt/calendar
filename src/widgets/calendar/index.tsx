import { WEEK_DAYS } from 'shared/consts/consts'
import { Controllers } from './components/controllers'
import { Day } from './components/day'
import { useDate } from './hooks/useDate'
import styles from './index.module.scss'

export const Calendar = () => {
  const { month, toPrevMonth, toNextMonth, monthDays } = useDate()

  return (
    <div className={styles.wrapper}>
      <Controllers month={month} toPrevMonth={toPrevMonth} toNextMonth={toNextMonth} />
      <table className={styles.table}>
        <thead>
          <tr>
            {WEEK_DAYS.map((elem, index) => (
              <th key={index}>{elem}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {monthDays.map((arr, arrIndex) => (
            <tr key={arrIndex}>
              {arr.map((day, dayIndex) => (
                <Day key={dayIndex} day={day} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
