import { Check } from 'phosphor-react'
import React, { FC } from 'react'
import { CheckboxProps } from './checkbox.types'

const Checkbox: FC<CheckboxProps> = ({
  className = '',
  disabled = false,
  error,
  label,
  value = false,
  onChange = () => {
    //
  },
  type = 'checkbox',
}) => {
  const handleCheckbox = () => {
    !disabled && onChange(!value)
  }

  const isRadio = type === 'radio'
  const isRadioStyles = isRadio && 'checkbox-radio'
  const checkboxBorderActiveStyles = value && 'checkbox-border-active'
  const checkboxErrorStyles = Boolean(error) && 'checkbox-border-error'

  return (
    <div className={`cursor-pointer ${className}`}>
      <div className='flex items-center'>
        <div
          role='checkbox'
          aria-checked='mixed'
          tabIndex={0}
          onKeyPress={() => handleCheckbox()}
          className={`checkbox ${isRadioStyles} ${checkboxBorderActiveStyles} ${checkboxErrorStyles}`}
          onClick={() => handleCheckbox()}
        >
          {value &&
            (isRadio ? (
              <div className={`checkbox-radio-active ${checkboxBorderActiveStyles}`} />
            ) : (
              <Check color='#40A9FF' />
            ))}
        </div>
        {Boolean(label) && <span className='checkbox-label'>{label}</span>}
      </div>
      <span className='pl-1 text-sm text-red-600'>{error}</span>
    </div>
  )
}

export { Checkbox }
