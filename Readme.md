# Formulario de Solicitud de Servicio Técnico

## 📋 Descripción
Formulario web accesible y responsivo para solicitar servicio técnico de dispositivos.  
Valida los datos en cliente y genera un resumen previo al envío en un modal interactivo.

## 🧠 Funcionalidad
- Validaciones de campos (nombre, correo, teléfono, fecha, descripción, términos).
- Contador de caracteres en tiempo real.
- Campo dinámico para tipo “Otro”.
- Aviso automático al seleccionar urgencia “Alta”.
- Modal con resumen previo antes del envío.

## 🧩 Instrucciones de uso
1. Completa todos los campos obligatorios.
2. Haz clic en **“Revisar solicitud”** para ver el resumen.
3. Si todo es correcto, presiona **“Confirmar envío”**.
4. Puedes usar **“Limpiar”** para reiniciar el formulario.

## 🧪 Pruebas recomendadas
- Envío vacío → muestra errores bajo cada campo.
- Correo incorrecto → mensaje de formato inválido.
- Teléfono con menos de 10 dígitos → error.
- Fecha anterior a hoy → rechazada.
- Descripción con <50 caracteres → error.
- “Otro” en tipo → activa campo adicional.
- Urgencia “Alta” → muestra aviso.
- Restaurar datos desde localStorage (opcional).

## 🎨 Decisiones de diseño
- Diseño **mobile first**, responsive a partir de 768 px.
- Paleta azul + gris + blanco, con contraste AA.
- Tipografía del sistema.
- Sin frameworks ni librerías externas.
