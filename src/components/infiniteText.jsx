export default function InfiniteText() {
  // Número de repeticiones
  const count = 50; // Ajusta este valor según cuántas repeticiones necesites

  // Frases a mostrar
  const phrases = [
    "Sueña en grande",
    "Los límites solo están en tu mente",
    "Aseguramos liderazgos femeninos de futuro",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gl-purple py-10 text-white md:py-16">
      <div className="whitespace-nowrap xs:animate-scrollMobile md:animate-scroll">
        {Array.from({ length: count }).map((_, repeatIndex) => (
          <div key={`${repeatIndex}`} className="inline-block">
            {phrases.map((phrase, phraseIndex) => (
              <h2
                key={`phrase-${repeatIndex}-${phraseIndex}-${phrase}`}
                className="mx-6 inline-block uppercase xs:text-2xl md:text-3xl"
              >
                {phrase}
              </h2>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
