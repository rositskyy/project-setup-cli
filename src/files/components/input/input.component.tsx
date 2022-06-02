import { Label } from '@components/label'
import { forwardRef } from 'react'
import { InputProps } from './input.types'

const Input = forwardRef(
  (
    {
      autoComplete,
      className,
      disabled,
      displayErrorMessage = true,
      error,
      label,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required,
      type = 'text',
      value,
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={`relative flex w-full flex-col ${className}`}>
        <Label label={label} required={required} name={name} className='pl-1' />
        <input
          ref={ref}
          onFocus={onFocus}
          onBlur={onBlur}
          autoComplete={autoComplete}
          className='text-md rounded-md border-[1px] border-gray-700 p-1 disabled:cursor-not-allowed disabled:opacity-50'
          disabled={disabled}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          value={value}
        />
        {displayErrorMessage && <span className='pl-1 text-sm text-red-600'>{error}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
