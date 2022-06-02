import { Button } from '@components/button'
import { Modal } from '@components/modal'
import { WarningCircle, X } from 'phosphor-react'
import React, { FC } from 'react'
import { ActionModalProps } from './action-modal.types'

const ActionModal: FC<ActionModalProps> = ({ className = '', handleConfirm, handleDisable, action = '' }) => {
  return (
    <Modal className={`bg-white/50 ${className}`}>
      <div className='flex w-full flex-col rounded-lg bg-white p-5 shadow-md sm:w-fit sm:min-w-[500px]'>
        <X className='cursor-pointer self-end' onClick={handleDisable} />
        <WarningCircle size={52} color='coral' className='self-center' />
        <div className='mt-5 text-center text-xl'>
          <div>Are you sure you want to</div>
          <div>{action}?</div>
        </div>
        <div className='mt-10 flex items-center justify-center gap-10'>
          <Button text='Yes' onClick={handleConfirm} />
          <Button text='No' onClick={handleDisable} theme='secondary' />
        </div>
      </div>
    </Modal>
  )
}

export { ActionModal }
