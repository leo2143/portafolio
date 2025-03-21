function descargarPDF() {
    var enlace = document.createElement('a');
    enlace.href = 'Orellana-leonardo-cv.pdf';
    enlace.download = 'Orellana-leonardo-cv.pdf';
    enlace.click();
}