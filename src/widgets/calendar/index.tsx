import { DATE } from 'shared/consts'
import { isToday } from 'shared/helpers'
import { Controllers } from './components/controllers'
import { Day } from './components/day'
import { Sidepanel } from './components/sidepanel'
import { useDate } from './hooks/useDate'
import { useSidepanel } from './hooks/useSidepanel'
import { useTasks } from './hooks/useTasks'
import styles from './index.module.scss'

export const Calendar = () => {
  const sidepanel = useSidepanel()
  const { month, toPrevMonth, toNextMonth, monthDays } = useDate()
  const { addTask, getDayTasks } = useTasks()

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
              day={day}
              isToday={isToday(day, month)}
              onClick={day ? () => sidepanel.open({ day, month }) : undefined}
              tasks={day ? getDayTasks({ day, month }) : []}
            />
          ))}
        </tr>
      ))}
    </tbody>
  )

  return (
    <div className={styles.wrapper}>
      <Sidepanel
        date={sidepanel.date}
        tasks={getDayTasks(sidepanel.date)}
        addTask={addTask}
        isOpen={sidepanel.isOpen}
        onClose={sidepanel.close}
      />
      <Controllers month={month} toPrevMonth={toPrevMonth} toNextMonth={toNextMonth} />
      <table className={styles.table}>
        {thead}
        {tbody}
      </table>
    </div>
  )
}
