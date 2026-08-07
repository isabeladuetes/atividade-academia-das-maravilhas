import {
  FiArrowRight,
  FiCheck,
} from 'react-icons/fi'

const plans = [
  {
    image:
      'https://raw.githubusercontent.com/cleitonSam/image-cia/refs/heads/main/WhatsApp%20Image%202025-08-28%20at%2012.49.43.jpeg',
    name: 'Plano Start',
    description:
      'Ideal para quem está começando sua jornada fitness.',
    price: 'R$ 79,90',
    features: [
      'Acesso à academia',
      'Área de musculação',
    ],
  },

  {
    image:
      'https://static.wixstatic.com/media/8e274e_c01cce238a1c4c7dae6228be2271af44~mv2.jpg/v1/fill/w_2500,h_1748,al_c/8e274e_c01cce238a1c4c7dae6228be2271af44~mv2.jpg',
    name: 'Plano Performance',
    description:
      'Para quem busca treinos mais completos e acompanhamento.',
    price: 'R$ 119,90',
    features: [
      'Acesso ilimitado',
      'Avaliação física',
    ],
  },

  {
    image:
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80',
    name: 'Plano Premium',
    description:
      'Uma experiência completa para acelerar sua evolução.',
    price: 'R$ 159,90',
    features: [
      'Personal trainer',
      'Plano personalizado',
    ],
  },

  {
    image:
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80',
    name: 'Personal Trainer',
    description:
      'Acompanhamento individual focado nas suas metas.',
    price: 'A partir de R$ 199',
    features: [
      'Treino individual',
      'Acompanhamento exclusivo',
    ],
  },
]

function Products() {
  return (
    <section
      id="servicos"
      className="bg-zinc-950 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* TÍTULO */}
        <div className="max-w-2xl">
          <p className="font-semibold uppercase tracking-widest text-lime-400">
            Nossos serviços
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Escolha como você quer evoluir
          </h2>

          <p className="mt-4 text-zinc-400">
            Encontre o plano que combina com seus objetivos
            e comece sua transformação.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-lime-400/40"
            >

              {/* IMAGEM */}
              <div className="h-52 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* CONTEÚDO */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-white">
                  {plan.name}
                </h3>

                <p className="mt-3 min-h-[72px] text-sm leading-6 text-zinc-400">
                  {plan.description}
                </p>

                <p className="mt-5 text-2xl font-black text-lime-400">
                  {plan.price}
                </p>

                {/* BENEFÍCIOS */}
                <div className="mt-5 space-y-2">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-zinc-300"
                    >
                      <FiCheck className="text-lime-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* BOTÃO */}
                <button
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-bold text-white transition duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
                >
                  Quero esse plano
                  <FiArrowRight />
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Products