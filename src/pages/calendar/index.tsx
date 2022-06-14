import { useSelector } from 'react-redux'
import { DATE } from 'shared/consts'
import { getDate, getMonthDays } from 'store/date'
import { Controllers } from './controllers'
import { Day } from './day'
import { useSidepanel } from './hooks/useSidepanel'
import styles from './index.module.scss'
import { Sidepanel } from './sidepanel'

export const Calendar = () => {
  const sidepanel = useSidepanel()
  const { month, year } = useSelector(getDate)
  const monthDays = useSelector(getMonthDays)

  const thead = (
    <thead>
      <tr>
        {DATE.WEEK_DAYS.map((elem, index) => (
          <th key={index}>{elem}</th>
        ))}
      </tr>
    </thead>
  )

  const tbody = (
    <tbody>
      {monthDays.map((week, weekIndex) => (
        <tr key={weekIndex}>
          {week.map((day, dayIndex) => (
            <Day
              key={dayIndex}
              date={{ day, month, year }}
              onClick={day ? () => sidepanel.open({ day, month, year }) : undefined}
            />
          ))}
        </tr>
      ))}
    </tbody>
  )

  return (
    <div className={styles.wrapper}>
      <Sidepanel isOpen={sidepanel.isOpen} onClose={sidepanel.close} date={sidepanel.date} />
      <Controllers />
      <table className={styles.table}>
        {thead}
        {tbody}
      </table>
    </div>
  )
}
