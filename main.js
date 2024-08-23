function descargarPDF() {
    var enlace = document.createElement('a');
    enlace.href = 'curriculum-orellana_leonardo.pdf';
    enlace.download = 'curriculum-orellana_leonardo.pdf';
    enlace.click();
}