import { Spinner } from 'phosphor-react'
import { FC } from 'react'
import { ButtonProps } from './button.types'

const Button: FC<ButtonProps> = ({
  className,
  text,
  onClick,
  type = 'button',
  disabled = false,
  isLoading,
  theme = 'primary',
}) => {
  const themeStyles = {
    primary: 'hover:bg-slate-700 hover:text-white',
    secondary: 'bg-slate-700 text-white hover:bg-white hover:text-slate-700',
    danger: 'text-white bg-red-500 hover:bg-white hover:text-red-500 border-red-500',
    default: '',
  }[theme]

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`flex items-center rounded-md border-[1px] px-2 py-1 transition-all disabled:cursor-not-allowed disabled:opacity-75 ${themeStyles} ${className}`}
    >
      {isLoading && <Spinner className='mr-1 animate-spin' color='gray' />}
      {text}
    </button>
  )
}

export { Button }
