import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [mensajeExito, setMensajeExito] = useState("");

  // Manejo de cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validación del formulario
  const validate = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no tiene un formato válido.";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es obligatorio.";
    } else if (formData.mensaje.length > 500) {
      newErrors.mensaje = "El mensaje no puede superar los 500 caracteres.";
    }

    if (Object.keys(newErrors).length > 0) {
      // Si hay errores, eliminamos el mensaje de éxito
      setMensajeExito("");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Si no hay errores, retorna true
  };

  // Enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Crear el mailto
      const subject = encodeURIComponent(
        "Consulta desde el formulario de contacto",
      );
      const body = encodeURIComponent(
        `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nMensaje: ${formData.mensaje}`,
      );
      const mailtoLink = `mailto:secretaria@5050gl.com?subject=${subject}&body=${body}`; // Aquí se cambia la dirección de correo.

      // Redirigir el usuario al correo
      window.location.href = mailtoLink;

      // Mostrar mensaje de éxito
      setMensajeExito("Formulario enviado con éxito");

      // Limpiar los campos solo si la validación es exitosa
      setFormData({ nombre: "", email: "", mensaje: "" }); // Limpiar campos
    }
  };

  return (
    <>
      <Navbar bg="bg-black" />
      {/* PROMO */}
      <section className="flex items-center justify-center py-32">
        <div className="flex w-full flex-col gap-16 px-4 xl:flex-row xl:p-32">
          {/* COLUMN 1 */}
          <div className="h-auto w-full">
            <div className="pb-6">
              <h2 className="pb-2 uppercase xs:text-[2rem] md:text-[3.4rem]">
                Contáctanos
              </h2>
              <p className="h-0.5 w-40 bg-black"></p>
            </div>
            <h2 className="pb-2 text-[2rem] xs:text-[1.6rem]">
              ¿En qué podemos ayudarte?
            </h2>
            {/* MENSAJE DE ÉXITO*/}
            {mensajeExito && (
              <p className="mt-4 bg-green-200 p-4 font-bold text-green-600">
                {mensajeExito}
              </p>
            )}
            {/* END MENSAJE DE ÉXITO*/}
            {/* INPUTS */}
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex h-[400px] w-full flex-col gap-4 py-4"
            >
              {/* Nombre */}
              <input
                className={`border-2 px-2 py-4 ${
                  errors.nombre ? "border-red-500" : "border-black"
                }`}
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
              />
              {errors.nombre && (
                <p className="text-sm text-red-500">{errors.nombre}</p>
              )}

              {/* Email */}
              <input
                className={`border-2 px-2 py-4 ${
                  errors.email ? "border-red-500" : "border-black"
                }`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Dirección de correo electrónico"
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}

              <div className="flex w-full flex-col">
                <textarea
                  maxLength="500"
                  className={`h-full] resize-none overflow-auto border-2 px-2 py-4 ${
                    errors.mensaje ? "border-red-500" : "border-black"
                  }`}
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Mensaje"
                ></textarea>
                {errors.mensaje && (
                  <p className="mt-2 text-sm text-red-500">{errors.mensaje}</p>
                )}
              </div>

              {/* SUBMIT */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-[10rem] bg-gl-red py-4 text-center text-[1rem] uppercase text-white"
                >
                  Enviar
                </button>
              </div>
              {/* END SUBMIT */}
            </form>
            {/* END INPUTS */}
          </div>
          {/* END COLUMN 1 */}

          {/* COLUMN 2 */}
          <div className="w-full xs:h-[30rem] md:h-auto">
            <div className="pb-6">
              <h2 className="pb-2 uppercase xs:text-[2rem] md:text-[3.4rem]">
                Ubicación
              </h2>
              <p className="h-0.5 w-40 bg-black"></p>
            </div>
            <div
              className="relative h-full w-full"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.669239909137!2d-3.6825751227284997!3d40.46045715297481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422923cb419903%3A0x4235f93a0f48dfe0!2sAv.%20de%20Alfonso%20XIII%2C%20200%2C%20Chamart%C3%ADn%2C%2028016%20Madrid!5e0!3m2!1ses!2ses!4v1737889713110!5m2!1ses!2ses"
                className="absolute left-0 top-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Av. de Alfonso XIII, Madrid"
              ></iframe>
            </div>
          </div>
          {/* END COLUMN 2 */}
        </div>
      </section>
      {/* END PROMO */}
      <Footer />
    </>
  );
}
