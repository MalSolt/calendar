import { DATE } from 'shared/consts'
import { Controllers } from './controllers'
import { Day } from './day'
import { useDate } from './hooks/useDate'
import { useSidepanel } from './hooks/useSidepanel'
import styles from './index.module.scss'
import { Sidepanel } from './sidepanel'

export const Calendar = () => {
  const sidepanel = useSidepanel()
  const { month, toPrevMonth, toNextMonth, monthDays } = useDate()

  const thead = (
    <thead>
      <tr>
        {DATE.WEEK_DAYS.map((elem, index) => (
          <th key={index}>{elem}</th>
        ))}
      </tr>
    </thead>
  )
console.log(monthDays, month)

  const tbody = (
    <tbody>
      {monthDays.map((week, weekIndex) => (
        <tr key={weekIndex}>
          {week.map((day, dayIndex) => (
            <Day
              key={dayIndex}
              date={{ day: day || 0, month }}
              onClick={day ? () => sidepanel.open({ day, month }) : undefined}
            />
          ))}
        </tr>
      ))}
    </tbody>
  )

  return (
    <div className={styles.wrapper}>
      <Sidepanel isOpen={sidepanel.isOpen} onClose={sidepanel.close} date={sidepanel.date} />
      <Controllers month={month} toPrevMonth={toPrevMonth} toNextMonth={toNextMonth} />
      <table className={styles.table}>
        {thead}
        {tbody}
      </table>
    </div>
  )
}
