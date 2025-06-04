export function showModal(valor:string, type:string) {
  // Crear fondo de overlay
  const overlay = document.createElement('div')
  overlay.className = 'fixed inset-0 flex items-center justify-center z-[1000] bg-black bg-opacity-50' // <-- AGREGADO: fondo oscuro + z-index

  // Crear contenedor del modal
  const modal = document.createElement('div')
  modal.className = 'bg-white p-6 rounded-2xl shadow-xl max-w-md text-center animate-fadeIn'

  // Contenido del mensaje
  let textColor = ''
  let ButtonColor = ''
  let ButtonHoverColor = ''

  if(type === 'Error'){
    textColor = 'text-red-600'
    ButtonColor = 'bg-red-600'
    ButtonHoverColor = 'hover:bg-red-700'
  }
  else{
    textColor = 'text-green-600'
    ButtonColor = 'bg-blue-500'
    ButtonHoverColor = 'hover:bg-blue-700'
  }

  modal.innerHTML = `
    <h2 class="${textColor} text-xl font-bold mb-4">${type}</h2>
    <p class="text-gray-700 mb-4">${valor}</p>
    <button class="mt-2 ${ButtonColor} text-white px-4 py-2 rounded-xl ${ButtonHoverColor} transition">Cerrar</button>
  `

  // Botón de cerrar
  modal.querySelector('button')?.addEventListener('click', () => {
    document.body.removeChild(overlay)
  })

  overlay.appendChild(modal)
  document.body.appendChild(overlay)
}
