type ActionModalProps = {
  readonly className?: string
  readonly children?: string
  readonly handleConfirm: () => void
  readonly handleDisable: () => void
  readonly isLoading?: boolean
  readonly action: string
}

export type { ActionModalProps }
