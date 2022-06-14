import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { TaskStateType } from 'shared/types'
import { changeTaskState } from 'store/tasks'

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
  id: string
}

export const ChangeTaskState = ({ state, id }: Props) => {
  const dispatch = useDispatch()
  const [selectedOption, setSelectedOption] = useState<OptionType>(options[state])

  return (
    <Select
      value={selectedOption}
      options={Object.values(options)}
      onChange={(option) => {
        if (!option) return
        setSelectedOption(option)
        dispatch(changeTaskState({ id, newState: option.value }))
      }}
    />
  )
}
