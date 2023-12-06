import LoaderWindows10 from '@/components/navigation-bar/windows-components/utils/loader-windows10'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex min-h-screen min-w-full items-center justify-center bg-[#044a92]'>
        <LoaderWindows10/>
    </div>
  )
}

export default Loading