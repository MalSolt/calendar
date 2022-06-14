import { DateType } from 'shared/types'

export const formatDate = ({ day, month, year }: DateType) => `${day}.${month}.${year}`
