import { ChangeMonth, ChangeYear, Today } from 'shared/ui'
import styles from './index.module.scss'

export const Controllers = () => {
  return (
    <div className={styles.wrapper}>
      <Today withHeader />
      <div className={styles.controllers}>
        <ChangeMonth />
        <ChangeYear />
      </div>
    </div>
  )
}
