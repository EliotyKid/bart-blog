"use client";
import { MenuItens } from "@/mockData/HeaderMenuItens";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-[1120px] mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-black font-bold text-lg">LOGO</h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6">
          {MenuItens.map((item, index) => (
            <li key={index}>
              <Link className="hover:text-gray-300 text-black" href={item.route}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão do menu (mobile) */}
        <button className="md:hidden text-black" onClick={onToggleMenu} aria-label="Abrir menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Menu Mobile - Aparece abaixo da navbar */}
      <div
        className={`md:hidden fixed  left-0 w-full bg-white shadow-md transition-all duration-300 
          ${isOpen ? "max-h-96 opacity-100 py-2 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <ul className="flex flex-col items-center space-y-3">
          {MenuItens.map((item, index) => (
            <li key={index}>
              <Link className="text-black hover:text-gray-300" href={item.route} onClick={closeMenu}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
