type CheckboxProps = {
  readonly className?: string
  readonly disabled?: boolean
  readonly error?: string
  readonly onChange: (val: boolean) => void
  readonly label?: string
  readonly type?: 'checkbox' | 'radio'
  readonly value: boolean
}

export type { CheckboxProps }
