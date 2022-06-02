import { Spinner } from 'phosphor-react'
import React, { FC } from 'react'
import { PreLoaderProps } from './pre-loader.types'

const PreLoader: FC<PreLoaderProps> = ({ className = '', children, isLoading = false }) => {
  return isLoading ? (
    <div className={`flex h-full w-full items-center justify-center ${className}`}>
      <Spinner className='animate-spin' size={36} />
    </div>
  ) : (
    <>{children}</>
  )
}

export { PreLoader }
