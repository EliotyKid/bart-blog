import { Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'


export default function Footer(){
  return(
    <div className="w-full flex flex-col justify-center items-center  bg-white gap-4 py-10">
      <div className='flex gap-4'>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="text-[#4e7397] cursor-pointer" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="text-[#4e7397] cursor-pointer" />
        </a>
      </div>
      <p className="text-[#4e7397] text-base font-normal leading-normal">© 2022 The Consortium</p>
    </div>
  )
}