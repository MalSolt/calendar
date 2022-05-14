import clsx from 'clsx'
import styles from './index.module.scss'

interface Props {
  day: number | null
}

export const Day = ({ day }: Props) => {
  return (
    <td className={clsx(styles.day, { [styles.disabled]: !day })}>
      <span className={styles.dayNumber}>{day}</span>
    </td>
  )
}
