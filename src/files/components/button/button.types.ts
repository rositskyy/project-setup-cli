export type ButtonProps = {
  readonly className?: string
  readonly disabled?: boolean
  readonly onClick: () => void
  readonly text: string
  readonly type?: 'submit' | 'button'
  readonly isLoading?: boolean
  readonly theme?: 'primary' | 'secondary' | 'danger' | 'default'
}
