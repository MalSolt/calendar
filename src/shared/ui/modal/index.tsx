import styles from './index.module.scss'

interface Props {
  isOpen: boolean
  children: React.ReactNode
  onClose: () => void
}

export const Modal = ({ isOpen, children, onClose }: Props) => {
  if (!isOpen) return null
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.cross} onClick={onClose}>
          &times;
        </div>
        {children}
      </div>
    </div>
  )
}
