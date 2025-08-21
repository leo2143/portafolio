function descargarPDF() {
    var enlace = document.createElement('a');
    enlace.href = 'Orellana-leonardo-cv.pdf';
    enlace.download = 'Orellana-leonardo-cv.pdf';
    enlace.click();
}

// Array de objetos con la información de los proyectos
const proyectos = [
    {
        id: 1,
        titulo: "Elden Ring",
        descripcion: "Landing page sobre el videojuego EldenRing",
        imagen: "imgs/elden2.png",
        imagenAlt: "imagen de la pagina de elden ring",
        enlaceVivo: "https://elden-ring-fan-web.vercel.app/index.html",
        enlaceRepo: "https://github.com/leo2143/Elden-Ring-Fan-web",
        tecnologias: [
            { src: "logos/bxl-html5.svg", alt: "html logo" },
            { src: "logos/bxl-css3.svg", alt: "css logo" }
        ]
    },
    {
        id: 2,
        titulo: "Batatabit",
        descripcion: "Landing page sobre una empresa ficticia",
        imagen: "imgs/batatabit.png",
        imagenAlt: "imagen de la pagina de batatabit",
        enlaceVivo: "https://65e902ad76bd4a76448c0e35--batatabit-v1.netlify.app/",
        enlaceRepo: "https://github.com/leo2143/batatabit",
        tecnologias: [
            { src: "logos/bxl-html5.svg", alt: "html logo" },
            { src: "logos/bxl-css3.svg", alt: "css logo" },
            { src: "logos/bxl-javascript.svg", alt: "javascript logo" }
        ]
    },
    {
        id: 3,
        titulo: "PokeNfts",
        descripcion: "One page de una tienda ficticia",
        imagen: "imgs/pokenfts.png",
        imagenAlt: "imagen de pokenfts",
        enlaceVivo: "https://poke-nfts-seven.vercel.app/",
        enlaceRepo: "https://github.com/leo2143/pokeNfts",
        tecnologias: [
            { src: "logos/bxl-html5.svg", alt: "html logo" },
            { src: "logos/bxl-css3.svg", alt: "css logo" },
            { src: "logos/bxl-javascript.svg", alt: "javascript logo" },
            { src: "logos/icons8-bootstrap-logo.svg", alt: "bootstrap logo" }
        ]
    },
    {
        id: 4,
        titulo: "Nintendo Switch",
        descripcion: "One page sobre la consola nintendo switch",
        imagen: "imgs/switch-page.png",
        imagenAlt: "imagen de la pagina nintendo switch",
        enlaceVivo: "https://nintendo-switch-landing-page-leonardo-s-projects-7266c83f.vercel.app/",
        enlaceRepo: "https://github.com/leo2143/Nintendo-Switch-one-page",
        tecnologias: [
            { src: "logos/bxl-html5.svg", alt: "html logo" },
            { src: "logos/bxl-css3.svg", alt: "css logo" },
            { src: "logos/bxl-javascript.svg", alt: "javascript logo" },
            { src: "logos/icons8-bootstrap-logo.svg", alt: "bootstrap logo" }
        ]
    },
    {
        id: 5,
        titulo: "Terry Store",
        descripcion: "Ecommerce de una tienda de equipamientos ficticia",
        imagen: "imgs/terry-store.jpg",
        imagenAlt: "imagen de la pagina de terry store",
        enlaceVivo: "http://3.143.3.110/terry-store/",
        enlaceRepo: "https://github.com/leo2143/terry-store",
        tecnologias: [
            { src: "logos/bxl-html5.svg", alt: "html logo" },
            { src: "logos/bxl-css3.svg", alt: "css logo" },
            { src: "logos/bxl-css3.svg", alt: "php logo" },
            { src: "logos/icons8-bootstrap-logo.svg", alt: "bootstrap logo" }
        ]
    },
    {
        id: 6,
        titulo: "Pokemon Tcg creator",
        descripcion: "App para generar cartas de pokemon personalizadas",
        imagen: "imgs/terry-store.jpg",
        imagenAlt: "imagen de la pagina de terry store",
        enlaceVivo: "http://3.143.3.110/pokemontTcgCreator/",
        enlaceRepo: "https://github.com/leo2143/poke-tcg-creator",
        tecnologias: [
            { src: "logos/bxl-html5.svg", alt: "html logo" },
            { src: "logos/bxl-css3.svg", alt: "css logo" },
            { src: "logos/bxl-css3.svg", alt: "vue logo" },
            { src: "logos/icons8-bootstrap-logo.svg", alt: "bootstrap logo" }
        ]
    },
    {
        id: 7,
        titulo: "Cinesfera",
        descripcion: "App de compra y alquiler de peliculas",
        imagen: "imgs/cinesfera.png",
        imagenAlt: "imagen de cinesfera",
        enlaceVivo: "https://www.figma.com/proto/Vhv3to94uwiVxq6yXIZ9R3/Cinesfera?node-id=1-11109&t=edtZMkTs3LZHtxkX-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A12923&show-proto-sidebar=1",
        enlaceRepo: "https://www.figma.com/design/Vhv3to94uwiVxq6yXIZ9R3/Cinesfera?node-id=0-1&p=f&t=edtZMkTs3LZHtxkX-0",
        tecnologias: [
            { src: "logos/icons8-adobe-photoshop.svg", alt: "photoshop logo" },
            { src: "logos/icons8-illustrator.svg", alt: "illustrator logo" },
            { src: "logos/bxl-figma.svg", alt: "figma logo" }
        ],
        textoEnlace: "Ver figma design sheet"
    }
];

// Método para generar dinámicamente la estructura de proyectos
function generarProyectos() {
    const contenedorProyectos = document.querySelector('.proyect-container');
    
    if (!contenedorProyectos) {
        console.error('No se encontró el contenedor de proyectos');
        return;
    }
    
    // Limpiar el contenedor
    contenedorProyectos.innerHTML = '';
    
    // Generar cada proyecto
    proyectos.forEach((proyecto, index) => {
        const esPar = index % 2 === 0;
        const claseProyecto = esPar ? 'proyect-Left' : 'proyect-right';
        
        const proyectoHTML = `
            <div class="${claseProyecto}">
                <div class="proyect-image-container">
                    <a href="${proyecto.enlaceVivo}" target="_blank">
                        <img src="${proyecto.imagen}" alt="${proyecto.imagenAlt}" />
                    </a>
                </div>
                <div class="proyect-text-container">
                    <h3>${proyecto.titulo}</h3>
                    <p>${proyecto.descripcion}</p>
                    <div class="tecnologies-used">
                        ${proyecto.tecnologias.map(tech => 
                            `<img src="${tech.src}" alt="${tech.alt}">`
                        ).join('')}
                    </div>
                    <a href="${proyecto.enlaceRepo}" target="_blank">${proyecto.textoEnlace || 'Ver repotisorio Git'}</a>
                </div>
            </div>
        `;
        
        contenedorProyectos.innerHTML += proyectoHTML;
    });
}

// Método para agregar un nuevo proyecto
function agregarProyecto(nuevoProyecto) {
    proyectos.push(nuevoProyecto);
    generarProyectos(); // Regenerar la estructura
}

// Método para eliminar un proyecto por ID
function eliminarProyecto(id) {
    const index = proyectos.findIndex(proyecto => proyecto.id === id);
    if (index !== -1) {
        proyectos.splice(index, 1);
        generarProyectos(); // Regenerar la estructura
    }
}

// Método para actualizar un proyecto existente
function actualizarProyecto(id, datosActualizados) {
    const index = proyectos.findIndex(proyecto => proyecto.id === id);
    if (index !== -1) {
        proyectos[index] = { ...proyectos[index], ...datosActualizados };
        generarProyectos(); // Regenerar la estructura
    }
}

// Ejecutar la generación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    generarProyectos();
});