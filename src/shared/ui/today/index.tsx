import { format } from 'date-fns'
import styles from './index.module.scss'

interface Props {
  withHeader: boolean
}

export const Today = ({ withHeader }: Props) => (
  <div className={styles.wrapper}>
    {withHeader && <span className={styles.header}>Today</span>}
    <div className={styles.today}>{format(new Date(), 'PP')}</div>
  </div>
)
