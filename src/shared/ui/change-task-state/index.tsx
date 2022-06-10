import { useState } from 'react'
import Select from 'react-select'
import { TaskStateType } from 'shared/types'

type OptionType<T extends TaskStateType = TaskStateType> = {
  value: T
  label: string
}

const options: { [key in TaskStateType]: OptionType<key> } = {
  progress: { value: 'progress', label: 'progress' },
  done: { value: 'done', label: 'done' },
  notDone: { value: 'notDone', label: 'not done' },
}

interface Props {
  state: TaskStateType
  onChange: (value: TaskStateType) => void
}

export const ChangeTaskState = ({ state, onChange }: Props) => {
  const [selectedOption, setSelectedOption] = useState<OptionType>(options[state])

  return (
    <Select
      value={selectedOption}
      options={Object.values(options)}
      onChange={(option) => {
        if (!option) return
        setSelectedOption(option)
        onChange(option.value)
      }}
    />
  ) 
}
