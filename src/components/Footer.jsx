import {
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiArrowUp,
} from 'react-icons/fi'

function Footer() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="bg-[#09090b]">

      {/* CTA FINAL */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-16 text-center md:flex-row md:text-left">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
              Pronto para começar?
            </p>

            <h2 className="mt-2 text-3xl font-black">
              Sua melhor versão começa hoje.
            </h2>
          </div>

          <a
            href="#servicos"
            className="rounded-full bg-lime-400 px-7 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-lime-300"
          >
            Começar minha jornada
          </a>

        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col justify-between gap-10 md:flex-row">

          {/* EMPRESA */}
          <div className="max-w-sm">
            <a
              href="#inicio"
              className="flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-xl font-black text-black">
                F
              </div>

              <span className="text-xl font-black">
                FORGE<span className="text-lime-400">FIT</span>
              </span>
            </a>

            <p className="mt-4 leading-7 text-zinc-500">
              Uma academia criada para pessoas que querem
              superar seus limites e construir uma rotina
              mais saudável.
            </p>
          </div>

          {/* REDES SOCIAIS */}
          <div>
            <h3 className="font-bold">
              Siga a ForgeFit
            </h3>

            <div className="mt-4 flex gap-3">

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <FiInstagram size={20} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <FiFacebook size={20} />
              </a>

              <a
                href="#"
                aria-label="Youtube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <FiYoutube size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-zinc-500 sm:flex-row">

          <p>
            © 2026 ForgeFit. Todos os direitos reservados.
          </p>

          <button
            onClick={goToTop}
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-lime-400 hover:text-lime-400"
          >
            Voltar ao topo
            <FiArrowUp />
          </button>

        </div>

      </div>
    </footer>
  )
}

export default Footer