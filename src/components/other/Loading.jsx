'use client'

export default function Loading() {
  return (
    <div className='flex size-full flex-col items-center justify-center bg-background'>
      <h1 className='text-white'>Generating stars...</h1>
      <svg className='-ml-1 mr-3 size-20 animate-spin' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='white' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='white'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  )
}
