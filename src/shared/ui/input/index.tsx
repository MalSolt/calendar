import styles from './index.module.scss'

interface Props extends React.HTMLProps<HTMLInputElement> {}

export const Input = (props: Props) => {
  return <input className={styles.input} {...props} />
}
