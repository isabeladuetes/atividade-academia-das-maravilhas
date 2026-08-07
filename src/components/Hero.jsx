import { FiArrowUpRight, FiCheckCircle, FiUsers } from "react-icons/fi";

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden pt-24"
    >
      {/* Efeitos de fundo */}
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-lime-500/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        {/* TEXTO */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-400">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            Transforme seu potencial
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Seu limite é
            <span className="block text-lime-400">apenas o começo.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Na ForgeFit você encontra estrutura, acompanhamento profissional e
            motivação para transformar seus objetivos em resultados.
          </p>

          {/* BOTÕES */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2 rounded-full bg-lime-400 px-7 py-4 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-lime-300"
            >
              Conheça nossos planos
              <FiArrowUpRight size={20} />
            </a>

            <a
              href="#beneficios"
              className="flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-semibold transition duration-300 hover:border-lime-400 hover:text-lime-400"
            >
              Saiba mais
            </a>
          </div>

          {/* INFORMAÇÕES */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-lime-400" />
              Profissionais qualificados
            </div>

            <div className="flex items-center gap-2">
              <FiUsers className="text-lime-400" />
              +2.000 alunos
            </div>
          </div>
        </div>

        {/* IMAGEM */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-lime-400/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHGi3s4vdADzkBdb81Zdibx2EizMWrOqU-IWSPBC7JDztBoMW4efVHBlI&s=10"
              alt="Pessoa treinando em uma academia"
              className="h-[450px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">
              <p className="text-sm text-zinc-300">Treine com propósito.</p>

              <p className="mt-1 text-2xl font-bold">Evolua todos os dias.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
