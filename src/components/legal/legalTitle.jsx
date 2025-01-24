export default function LegalTitle({ name }) {
  return (
    <div className="flex h-96 items-center justify-center bg-gradient-to-r from-[#773bd4] via-[#a61682] to-[#c636a2] p-6 text-center font-bold uppercase text-white xs:text-4xl md:text-5xl lg:text-7xl">
      <h3>{name}</h3>
    </div>
  );
}
