import { useState, useEffect } from 'react'
import { isInteger } from './../../../utils/commonFunc'

export const useSettingsInputValidate = (value: any, validations: any) => {
  const [isInt, setIsInt] = useState(false)
  const [errors, setErrors] = useState('')

  useEffect(() => {
    setErrors('')
    for (const validation in validations) {
      switch (validation) {
        case 'isInt':
          isInteger(+value) && +value > 0 && +value < 16
            ? setIsInt(false)
            : setIsInt(true)
          isInt && setErrors('Значение должно быть целым числом от 1 до 15')
          break

        default:
          break
      }
    }
  }, [value, validations, isInt])

  return { errors, setErrors, isInt }
}
