function descargarPDF() {
    var enlace = document.createElement('a');
    enlace.href = 'Orellana-leonardo-CV.pdf';
    enlace.download = 'Orellana-leonardo-CV.pdf';
    enlace.click();
}