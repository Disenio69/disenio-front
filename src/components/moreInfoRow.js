export function moreInfoRow(title,value){
  return `<p class="flex items-center gap-2 text-sm text-gray-700">
          <i fas fa-id-card text-blue-500></i>
          <span class="font-semibold uppercase">${title}:</span> ${value}
          </p>
  `
}

