export default function Quote({ name, bg }) {
  return (
    <section className="bg-gray-200">
      <div
        className={`${bg} relative w-full bg-cover bg-no-repeat py-20 text-center md:py-40 lg:py-60`}
        style={{
          backgroundAttachment: "fixed",
          clipPath: "polygon(50% 100%, 100% 90%, 100% 0, 0 0, 0 90%)",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gl-pink opacity-80"></div>
        {/* END OVERLAY */}
        <div className="relative z-40 px-4">
          <h2 className="mx-auto w-full uppercase text-white text-shadow-sm xs:text-2xl md:text-4xl lg:w-[60%] lg:text-6xl">
            {name}
          </h2>
        </div>
      </div>
    </section>
  );
}
