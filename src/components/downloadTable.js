import {showModal} from "./modal.ts"
export function downloadCsv(data,fileName){
    try {
    if (!Array.isArray(data) || data.length === 0) {
      alert("No hay datos para exportar");
      return;
    }

    // Campos a excluir del CSV
    const camposExcluidos = ["contrasena"];

    //Obtener headers filtrando los excluidos
    const headers = Object.keys(data[0]).filter(h => !camposExcluidos.includes(h));

    //Construir filas CSV sin los campos excluidos
    const filas = data.map(fila =>
      headers.map(h => `"${String(fila[h] ?? "").replace(/"/g, '""')}"`).join(",")

    );

    const contenidoCSV = [headers.join(","), ...filas].join("\n");

    //Crear y descargar archivo CSV
    const blob = new Blob([contenidoCSV], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.setAttribute("href", url);
    link.setAttribute("download", `${fileName}.csv`);
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showModal('Archivo csv descargado con exito','Éxito')
  } catch (err) {
    showModal('Error al descargar CSV','Error')
  }
}