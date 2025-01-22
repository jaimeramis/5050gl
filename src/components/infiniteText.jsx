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
      <div className="md:animate-scroll xs:animate-scrollMobile whitespace-nowrap">
        {Array.from({ length: count }).map((index) => (
          // Mapear cada frase dentro del count de repeticiones:
          <div key={index} className="inline-block">
            {phrases.map((phrase) => (
              <h2
                key={`${index}`}
                className="mx-6 inline-block uppercase xs:text-2xl md:text-4xl"
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
