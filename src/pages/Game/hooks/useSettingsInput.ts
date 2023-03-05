import { useState } from 'react'
import { useSettingsInputValidate } from './useSettingsInputValidate'

export default function useSettingsInput(
  initialValue: any,
  validations: Object
) {
  const [value, setValue] = useState(initialValue)
  const [isTouched, setIsTouched] = useState(false)
  const validation = useSettingsInputValidate(value, validations)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validation.setErrors('')
    setValue(e.target.value)
  }

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTouched(true)
  }

  return { value, setValue, onChange, onBlur, isTouched, ...validation }
}
