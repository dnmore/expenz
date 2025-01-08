import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className='flex flex-row gap-2 items-center leading-none drop-shadow-xl '>
      <Image src="./logo.svg" alt="Logo" width="40" height="40" priority={true} />
      <p className="text-2xl font-extrabold tracking-tighter text-primary">Expenz</p>
    </div>
  )
}
