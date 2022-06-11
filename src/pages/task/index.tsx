import { useParams } from 'react-router-dom'
import styles from './index.module.scss'

export const Task = () => {
  const params = useParams()

  return <div className={styles.wrapper}>{params.id}</div>
}
