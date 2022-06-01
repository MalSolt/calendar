import clsx from 'clsx'
import styles from './index.module.scss'

interface Props {
  isOpen: boolean
  children: React.ReactNode
  onClose: () => void
}

export const Sidepanel = ({ isOpen, children, onClose }: Props) => {
  return (
    <div className={clsx(styles.sidepanel, { [styles.open]: isOpen })}>
      <div className={styles.cross} onClick={onClose}>
        &times;
      </div>
      {children}
    </div>
  )
}
