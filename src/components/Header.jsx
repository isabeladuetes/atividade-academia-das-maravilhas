import { useState } from 'react'
import {
  FiMenu,
  FiX,
  FiArrowRight,
} from 'react-icons/fi'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Início', href: '#inicio' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ]

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <a
          href="#inicio"
          className="flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-xl font-black text-black">
            F
          </div>

          <span className="text-xl font-black tracking-tight">
            FORGE<span className="text-lime-400">FIT</span>
          </span>
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-lime-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* BOTÃO */}
        <a
          href="#servicos"
          className="hidden items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-lime-300 md:flex"
        >
          Começar agora
          <FiArrowRight />
        </a>

        {/* MENU MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 transition hover:bg-white/10 md:hidden"
          aria-label="Abrir menu"
        >
          {menuOpen ? (
            <FiX size={26} />
          ) : (
            <FiMenu size={26} />
          )}
        </button>
      </div>

      {/* MENU MOBILE ABERTO */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#09090b] px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-lime-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#servicos"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-lg bg-lime-400 px-4 py-3 text-center font-bold text-black transition hover:bg-lime-300"
            >
              Começar agora
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header