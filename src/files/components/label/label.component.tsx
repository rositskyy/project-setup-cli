import { FC } from 'react'
import { LabelProps } from './label.types'

const Label: FC<LabelProps> = ({ label, required, name, className }) => {
  return (
    <label htmlFor={name} className={`text-sm ${className}`}>
      {label} {required && '*'}
    </label>
  )
}

export { Label }
