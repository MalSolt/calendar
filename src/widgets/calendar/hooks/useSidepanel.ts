import { useEffect, useState } from 'react'
import { DateType } from 'shared/types'

export const useSidepanel = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [date, setDate] = useState<DateType>({ day: 1, month: 1 })

  const open = (date: DateType) => {
    setIsOpen(true)
    setDate(date)
  }

  const close = () => setIsOpen(false)

  useEffect(() => {
    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close()
      }
    }

    document.addEventListener('keydown', onKeydown)

    return () => {
      document.removeEventListener('keydown', onKeydown)
    }
  }, [])

  return { date, isOpen, open, close }
}
