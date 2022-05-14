import { Button, Today } from 'shared/ui'
import { MONTHS } from 'shared/consts/consts'
import styles from './index.module.scss'

interface Props {
  month: number
  toPrevMonth: () => void
  toNextMonth: () => void
}

export const Controllers = ({ month, toPrevMonth, toNextMonth }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Today withHeader/>
      <div className={styles.controllers}>
        <Button disabled={month === 0} onClick={toPrevMonth}>
          prev
        </Button>
        <span className={styles.month}>{MONTHS[month]}</span>
        <Button disabled={month === 11} onClick={toNextMonth}>
          next
        </Button>
      </div>
    </div>
  )
}
