import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Marina Oliveira',
    role: 'Aluna há 2 anos',
    image: 'https://i.pravatar.cc/150?img=47',
    comment:
      'A ForgeFit mudou completamente minha relação com os treinos. A equipe é muito atenciosa e o ambiente é incrível!',
  },
  {
    name: 'Lucas Martins',
    role: 'Aluno há 1 ano',
    image: 'https://i.pravatar.cc/150?img=12',
    comment:
      'Os profissionais realmente acompanham nossa evolução. Hoje tenho muito mais disposição para minha rotina.',
  },
  {
    name: 'Ana Beatriz',
    role: 'Aluna há 8 meses',
    image: 'https://i.pravatar.cc/150?img=44',
    comment:
      'O que mais gosto é que nunca me sinto sozinha durante o treino. Sempre tem alguém para ajudar e orientar.',
  },
]

function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="border-y border-white/5 bg-zinc-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* TÍTULO */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-widest text-lime-400">
            Depoimentos
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Quem treina, recomenda
          </h2>

          <p className="mt-4 text-zinc-400">
            Veja o que nossos alunos têm a dizer sobre
            a experiência ForgeFit.
          </p>
        </div>

        {/* DEPOIMENTOS */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-white/10 bg-zinc-900 p-7 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-lime-400/30"
            >
              {/* ESTRELAS */}
              <div className="flex gap-1 text-lime-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    size={18}
                    className="fill-current"
                  />
                ))}
              </div>

              {/* COMENTÁRIO */}
              <p className="mt-5 leading-7 text-zinc-300">
                "{testimonial.comment}"
              </p>

              {/* PERFIL */}
              <div className="mt-7 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-zinc-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials