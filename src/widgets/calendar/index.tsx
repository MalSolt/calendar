import { DATE } from 'shared/consts'
import { isToday } from 'shared/helpers'
import { AddTask, ChangeTaskState, Sidepanel, Task } from 'shared/ui'
import { useTasks } from 'stores'
import { Controllers } from './controllers'
import { Day } from './day'
import { useDate } from './hooks/useDate'
import { useSidepanel } from './hooks/useSidepanel'
import styles from './index.module.scss'

export const Calendar = () => {
  const sidepanel = useSidepanel()
  const { month, toPrevMonth, toNextMonth, monthDays } = useDate()
  const { addTask, getDayTasks, changeTaskState } = useTasks()

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
      <Sidepanel isOpen={sidepanel.isOpen} onClose={sidepanel.close}>
        <AddTask addTask={(text) => addTask(text, sidepanel.date)} />
        {getDayTasks(sidepanel.date).map((task) => (
          <Task
            {...task}
            key={task.id}
            className={styles.task}
            toolbar={
              <ChangeTaskState
                state={task.state}
                onChange={(state) => changeTaskState(task.id, state, sidepanel.date)}
              />
            }
          />
        ))}
      </Sidepanel>
      <Controllers month={month} toPrevMonth={toPrevMonth} toNextMonth={toNextMonth} />
      <table className={styles.table}>
        {thead}
        {tbody}
      </table>
    </div>
  )
}
