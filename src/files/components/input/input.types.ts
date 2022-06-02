import { HTMLAttributes } from 'react'

export type InputProps = Pick<
  HTMLAttributes<HTMLInputElement>,
  'onBlur' | 'onFocus' | 'onChange' | 'placeholder' | 'className'
> & {
  readonly autoComplete?: string
  readonly disabled?: boolean
  readonly displayErrorMessage?: boolean
  readonly error?: string
  readonly label?: string
  readonly name: string
  readonly required?: boolean
  readonly type?: 'email' | 'password' | 'text' | 'number' | 'phone'
  readonly value?: string
}
