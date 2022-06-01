import { Calendar} from 'widgets'
import styles from './index.module.scss'

export const App = () => {
  return (
    <div className={styles.app}>
      <Calendar />
    </div>
  )
}
