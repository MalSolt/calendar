import clsx from 'clsx'
import { Cross } from '..'
import styles from './index.module.scss'

interface Props {
  isOpen: boolean
  children: React.ReactNode
  onClose: () => void
}

export const Sidepanel = ({ isOpen, children, onClose }: Props) => (
  <div className={clsx(styles.sidepanel, { [styles.open]: isOpen })}>
    <Cross onClick={onClose} />
    {children}
  </div>
)
