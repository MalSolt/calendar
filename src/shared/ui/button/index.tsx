import styles from './index.module.scss'

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children?: string
}

export const Button = ({ children, disabled, onClick }: Props) => {
  return (
    <button className={disabled ? styles.disabled : styles.active} onClick={onClick}>
      {children}
    </button>
  )
}
