import {
  FiActivity,
  FiAward,
  FiHeart,
  FiZap,
} from 'react-icons/fi'

const benefits = [
  {
    icon: FiActivity,
    title: 'Treinos personalizados',
    description:
      'Programas adaptados aos seus objetivos, nível de experiência e rotina.',
  },
  {
    icon: FiAward,
    title: 'Profissionais qualificados',
    description:
      'Conte com uma equipe preparada para acompanhar sua evolução.',
  },
  {
    icon: FiHeart,
    title: 'Ambiente completo',
    description:
      'Um espaço moderno, confortável e equipado para você treinar melhor.',
  },
]

function Benefits() {
  return (
    <section
      id="beneficios"
      className="border-y border-white/5 bg-zinc-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* TÍTULO */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-lime-400/10 p-3 text-lime-400">
              <FiZap size={22} />
            </div>
          </div>

          <p className="font-semibold uppercase tracking-widest text-lime-400">
            Por que a ForgeFit?
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Tudo para você evoluir
          </h2>

          <p className="mt-4 text-zinc-400">
            Mais do que uma academia, somos parceiros
            na sua jornada.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon

            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-white/10 bg-zinc-900 p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-lime-400/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-lime-400/10 text-lime-400 transition duration-300 group-hover:bg-lime-400 group-hover:text-black">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Benefits