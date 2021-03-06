import { Calendar, Task } from 'pages'
import { Route, Routes } from 'react-router-dom'
import styles from './index.module.scss'

export const App = () => (
  <div className={styles.app}>
    <Routes>
      <Route path='/' element={<Calendar />} />
      <Route path='task/:id' element={<Task />} />
    </Routes>
  </div>
)
