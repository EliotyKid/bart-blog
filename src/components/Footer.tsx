import { Instagram, Twitter } from 'lucide-react'
import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";



export default function Footer(){
  return(
    <div className="w-full flex flex-col justify-center items-center  bg-white gap-4 py-10">
      <div className='flex gap-4'>
        <a href="https://www.instagram.com/patrickrodrigues6/" target="_blank" rel="noopener noreferrer">
          <IoLogoInstagram className="text-[#4e7397] cursor-pointer size-7" />
        </a>
        {/* <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="text-[#4e7397] cursor-pointer size-7" />
        </a> */}
        <a href="https://wa.me/5537998591997?text=Gostaria%20de%20entender%20mais%20sobre%20cons%C3%B3rcios%20e%20suas%20estrat%C3%A9gias." target="_blank" rel="noopener noreferrer">
          <IoLogoWhatsapp className="text-[#4e7397] cursor-pointer size-7" />
        </a>
      </div>
      <p className="text-[#4e7397] text-base font-normal leading-normal">© 2022 The Consortium</p>
    </div>
  )
}