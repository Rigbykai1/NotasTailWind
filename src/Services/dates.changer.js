export const dateConverter = (dateToConvert) => {
  const opciones = { year: "numeric", month: "numeric", day: "numeric" };
  const fecha = new Date(dateToConvert);
  const fechaCorta = fecha.toLocaleDateString("es-ES", opciones);

  return fechaCorta;
};
