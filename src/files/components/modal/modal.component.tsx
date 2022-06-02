import React, { FC } from 'react'
import { ModalProps } from './modal.types'

const Modal: FC<ModalProps> = ({ className = '', children }) => {
  return (
    <div className={`fixed inset-0 z-10 flex h-full w-full items-center justify-center ${className}`}>{children}</div>
  )
}

export { Modal }
