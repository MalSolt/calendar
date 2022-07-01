import { getYear } from 'date-fns'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { newArr } from 'shared/helpers'
import { changeYear } from 'store/date'

type OptionType = {
  value: number
  label: string
}

const createOption = (value: number) => ({ value, label: `${value}` })
const currentYear = getYear(new Date())
const options = newArr(11).map((_, index) => createOption(currentYear - 5 + index))

export const ChangeYear = () => {
  const dispatch = useDispatch()
  const [selectedOption, setSelectedOption] = useState<OptionType>(createOption(currentYear))

  return (
    <Select
      value={selectedOption}
      options={options}
      onChange={(option) => {
        if (!option) return
        setSelectedOption(option)
        dispatch(changeYear({ year: option.value }))
      }}
    />
  )
}
