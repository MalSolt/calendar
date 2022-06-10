import clsx from 'clsx'
import styles from './index.module.scss'

interface Props extends React.HTMLProps<HTMLInputElement> {
  className?: string
  onEnter: () => void
}

export const Input = ({ className, onEnter, ...props }: Props) => {
  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return
    onEnter()
  }

  return (
    <input className={clsx(styles.input, className)} onKeyDown={handleInputKeyDown} {...props} />
  )
}
