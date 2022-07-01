import { getMonth } from 'date-fns'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { DATE } from 'shared/consts'
import { newArr } from 'shared/helpers'
import { changeMonth } from 'store/date'

const { MONTHS } = DATE

type OptionType = {
  value: number
  label: string
}

const createOption = (value: number) => ({ value, label: `${MONTHS[value]}` })
const currentMonth = getMonth(new Date())
const options = newArr(12).map((_, index) => createOption(index))

export const ChangeMonth = () => {
  const dispatch = useDispatch()
  const [selectedOption, setSelectedOption] = useState<OptionType>(createOption(currentMonth))

  return (
    <Select
      value={selectedOption}
      options={options}
      onChange={(option) => {
        if (!option) return
        setSelectedOption(option)
        dispatch(changeMonth({ month: option.value }))
      }}
    />
  )
}
