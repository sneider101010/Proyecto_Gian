// ================= VALIDACIONES =================
const form = document.getElementById("formServicio");
const modal = document.getElementById("modalResumen");
const cerrar = document.querySelector(".cerrar");
const resumen = document.getElementById("resumenDatos");

const hoy = new Date().toISOString().split("T")[0];
document.getElementById("fecha").min = hoy;

// contador descripción
const descripcion = document.getElementById("descripcion");
const contador = document.getElementById("contador");
descripcion.addEventListener("input", () => {
  contador.textContent = descripcion.value.length;
});

// mostrar campo "otro"
document.getElementById("tipo").addEventListener("change", e => {
  document.getElementById("campo-otro").classList.toggle("oculto", e.target.value !== "Otro");
});

// aviso de urgencia
document.querySelectorAll("input[name='urgencia']").forEach(radio => {
  radio.addEventListener("change", e => {
    document.getElementById("aviso-urgencia").classList.toggle("oculto", e.target.value !== "Alta");
  });
});

// limpiar errores
function limpiarErrores() {
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
}

// mostrar error
function mostrarError(id, mensaje) {
  document.getElementById(`error-${id}`).textContent = mensaje;
}

// validaciones específicas
function validarFormulario() {
  limpiarErrores();
  let valido = true;

  const nombre = form.nombre.value.trim();
  if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]{5,}$/.test(nombre) || nombre.split(" ").length < 3) {
    mostrarError("nombre", "Ingrese su nombre completo (mínimo 3 palabras).");
    valido = false;
  }

  const correo = form.correo.value.trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    mostrarError("correo", "Correo electrónico inválido.");
    valido = false;
  }

  const telefono = form.telefono.value.trim();
  if (!/^\d{10}$/.test(telefono)) {
    mostrarError("telefono", "Debe tener 10 dígitos numéricos.");
    valido = false;
  }

  const tipo = form.tipo.value;
  if (!tipo) {
    mostrarError("tipo", "Seleccione un tipo de dispositivo.");
    valido = false;
  }

  const fecha = form.fecha.value;
  if (!fecha || fecha < hoy) {
    mostrarError("fecha", "Seleccione una fecha válida (no anterior a hoy).");
    valido = false;
  }

  const desc = descripcion.value.trim();
  if (desc.length < 50 || desc.length > 300) {
    mostrarError("descripcion", "Debe tener entre 50 y 300 caracteres.");
    valido = false;
  }

  if (!form.urgencia.value) {
    mostrarError("urgencia", "Seleccione un nivel de urgencia.");
    valido = false;
  }

  if (!form.terminos.checked) {
    mostrarError("terminos", "Debe aceptar los términos.");
    valido = false;
  }

  return valido;
}

// generar resumen
function generarResumen() {
  const datos = {
    nombre: form.nombre.value,
    correo: form.correo.value,
    telefono: form.telefono.value,
    tipo: form.tipo.value === "Otro" ? form.otroTipo.value : form.tipo.value,
    marca: form.marca.value,
    fecha: form.fecha.value,
    descripcion: form.descripcion.value,
    urgencia: form.urgencia.value
  };

  resumen.innerHTML = `
    <p><strong>Nombre:</strong> ${datos.nombre}</p>
    <p><strong>Correo:</strong> ${datos.correo}</p>
    <p><strong>Teléfono:</strong> ${datos.telefono}</p>
    <p><strong>Dispositivo:</strong> ${datos.tipo}</p>
    <p><strong>Marca / Modelo:</strong> ${datos.marca}</p>
    <p><strong>Fecha preferida:</strong> ${datos.fecha}</p>
    <p><strong>Urgencia:</strong> ${datos.urgencia}</p>
    <p><strong>Descripción:</strong><br>${datos.descripcion}</p>
  `;
}

// abrir modal
document.getElementById("revisar").addEventListener("click", () => {
  if (validarFormulario()) {
    generarResumen();
    modal.style.display = "block";
  }
});

// cerrar modal
cerrar.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// confirmar envío simulado
document.getElementById("confirmar").addEventListener("click", () => {
  modal.style.display = "none";
  alert("✅ Solicitud enviada correctamente (simulada).");
  form.reset();
  contador.textContent = "0";
});
