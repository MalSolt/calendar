import styles from './index.module.scss'

interface Props {
  onClick: () => void
}

export const Cross = ({ onClick }: Props) => (
  <div className={styles.cross} onClick={onClick}>
    &times;
  </div>
)
