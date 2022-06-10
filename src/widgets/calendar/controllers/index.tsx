import { Button, Today } from 'shared/ui'
import { DATE } from 'shared/consts'
import styles from './index.module.scss'

const { FIRST_MONTH, LAST_MONTH, MONTHS } = DATE

interface Props {
  month: number
  toPrevMonth: () => void
  toNextMonth: () => void
}

export const Controllers = ({ month, toPrevMonth, toNextMonth }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Today withHeader />
      <div className={styles.controllers}>
        <Button disabled={month === FIRST_MONTH} onClick={toPrevMonth}>
          prev
        </Button>
        <span className={styles.month}>{MONTHS[month]}</span>
        <Button disabled={month === LAST_MONTH} onClick={toNextMonth}>
          next
        </Button>
      </div>
    </div>
  )
}
