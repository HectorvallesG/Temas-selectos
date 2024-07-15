// produtos para tienda

const productos = [
    {
        id: 1,
        nombre: 'el susurro de las estrellas',
        descripcion: 'Lorem ipsum dolor sit amet consectetur.',
        fotos: {
            principal: `imagenes/libro1.jpg`,
            miniatura: `imagenes/libro1.jpg`
        },
        user: `manolo`,
        detalles: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus obcaecati quae aliquid voluptas fugiat exercitationem reiciendis alias doloremque illum nihil incidunt modi beatae deserunt, soluta perferendis temporibus reprehenderit laudantium!`,
        autor: 'sofia estrada',
        genero: 'Ficción',
        estado:`En discucion`,
        telefono: '34 (408) 102-1436',
        correo:'mauquoummokode-4452@yopmail.com',
    },
    {
        id: 2,
        nombre: 'el laberinto de los sueños',
        descripcion: 'Lorem ipsum dolor sit amet consectetur.',
        fotos: {
            principal: `imagenes/libro1.jpg`,
            miniatura: `imagenes/libro1.jpg`
        },
        user: `pepe`,
        detalles: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus obcaecati quae aliquid voluptas fugiat exercitationem reiciendis alias doloremque illum nihil incidunt modi beatae deserunt, soluta perferendis temporibus reprehenderit laudantium!`,
        autor: 'miguel albornoz',
        genero: 'Ficción',
        estado: `Disponible`,
        telefono: '92 (261) 313-7514',
        correo:'kammoddebruca-4251@yopmail.com',
    },
    {
        id: 3,
        nombre: 'Sombras en el Horizonte',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        fotos: {
            principal: `imagenes/libro1.jpg`,
            miniatura: `imagenes/libro1.jpg`
        },
        user: `juan`,
        detalles: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus obcaecati quae aliquid voluptas fugiat exercitationem reiciendis alias doloremque illum nihil incidunt modi beatae deserunt, soluta perferendis temporibus reprehenderit laudantium!`,
        autor: 'isabel ferrer',
        genero: 'No Ficción',
        estado:`Disponible`,
        telefono: '43 (992) 691-5140',
        correo:'naucoivammutoi-1342@yopmail.com',
    },
    {
        id: 4,
        nombre: 'La Danza de los Espíritus',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        fotos: {
            principal: `imagenes/libro1.jpg`,
            miniatura: `imagenes/libro1.jpg`
        },
        user: `maria`,
        detalles: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus obcaecati quae aliquid voluptas fugiat exercitationem reiciendis alias doloremque illum nihil incidunt modi beatae deserunt, soluta perferendis temporibus reprehenderit laudantium!`,
        autor: 'ricardo valverde',
        genero: 'Ficción',
        estado:`Disponible`,
        telefono: '46 (735) 519-7824',
        correo:'yeibreuquammiwa-9250@yopmail.com',
    },
    {
        id: 5,
        nombre: 'Bajo el Cielo Carmesí',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        fotos: {
            principal: `imagenes/libro1.jpg`,
            miniatura: `imagenes/libro1.jpg`
        },
        user: `manolin`,
        detalles: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus obcaecati quae aliquid voluptas fugiat exercitationem reiciendis alias doloremque illum nihil incidunt modi beatae deserunt, soluta perferendis temporibus reprehenderit laudantium!`,
        autor: 'ana montenegro',
        genero: 'Ficción',
        estado:`Disponible`,
        telefono: '78 (082) 820-2802',
        correo:'kufrettuweja-7314@yopmail.com',
    },
    {
        id: 6,
        nombre: 'El Misterio del Faro Abandonado',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        fotos: {
            principal: `imagenes/libro2.jpg`,
            miniatura: `imagenes/libro2.jpg`
        },
        user: `luisa`,
        detalles: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus obcaecati quae aliquid voluptas fugiat exercitationem reiciendis alias doloremque illum nihil incidunt modi beatae deserunt, soluta perferendis temporibus reprehenderit laudantium!`,
        autor: 'javier santamaria',
        genero: 'No Ficción',
        estado:`Disponible`,
        telefono: '79 (433) 596-5548',
        correo:'mevuvahutre-6236@yopmail.com',
    },
    {
        id: 7,
        nombre: 'El Jardín de las Memorias Olvidadas',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        fotos: {
            principal: `imagenes/libro2.jpg`,
            miniatura: `imagenes/libro2.jpg`
        },
        user: `zapata`,
        detalles: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus obcaecati quae aliquid voluptas fugiat exercitationem reiciendis alias doloremque illum nihil incidunt modi beatae deserunt, soluta perferendis temporibus reprehenderit laudantium!`,
        autor: 'laura gutierrez',
        genero: 'No Ficción',
        estado:`En discucion`,
        telefono: '91 (311) 674-0361',
        correo:'frutribauquenu-6411@yopmail.com',
    },
    {
        id: 8,
        nombre: 'Crónicas de un Mundo Invisible',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        fotos: {
            principal: `imagenes/libro2.jpg`,
            miniatura: `imagenes/libro2.jpg`
        },
        user: `vallez`,
        detalles: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus obcaecati quae aliquid voluptas fugiat exercitationem reiciendis alias doloremque illum nihil incidunt modi beatae deserunt, soluta perferendis temporibus reprehenderit laudantium!`,
        autor: 'federico lozano',
        genero: 'Fantasía',
        estado:`Disponible`,
        telefono: '98 (244) 838-6596',
        correo:'trammihezutru-1702@yopmail.com',
    },
    {
        id: 9,
        nombre: 'La Ciudad de los Espejos Rotos',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        fotos: {
            principal: `imagenes/libro2.jpg`,
            miniatura: `imagenes/libro2.jpg`
        },
        user: `cruz`,
        detalles: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus obcaecati quae aliquid voluptas fugiat exercitationem reiciendis alias doloremque illum nihil incidunt modi beatae deserunt, soluta perferendis temporibus reprehenderit laudantium!`,
        autor: 'marta ruiz',
        genero: 'Fantasía',
        estado:`Disponible`,
        telefono: '50 (318) 179-9075',
        correo:'reuffutrugrata-2748@yopmail.com',
    },
    {
        id: 10,
        nombre: 'La Melodía del Viento Nocturno',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        fotos: {
            principal: `imagenes/libro2.jpg`,
            miniatura: `imagenes/libro2.jpg`
        },
        user: `antonio`,
        detalles: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus obcaecati quae aliquid voluptas fugiat exercitationem reiciendis alias doloremque illum nihil incidunt modi beatae deserunt, soluta perferendis temporibus reprehenderit laudantium!`,
        autor: 'alejandro pineda',
        genero: 'Ficción',
        estado:`En discucion`,
        telefono: '70 (499) 949-7226',
        correo:'vasaprigaudde-6968@yopmail.com',
    },
    {
        id: 11,
        nombre: 'El Secreto del Bosque Encantado',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        fotos: {
            principal: `imagenes/libro3.jfif`,
            miniatura: `imagenes/libro3.jfif`
        },
        user: `jose`,
        detalles: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus obcaecati quae aliquid voluptas fugiat exercitationem reiciendis alias doloremque illum nihil incidunt modi beatae deserunt, soluta perferendis temporibus reprehenderit laudantium!`,
        autor: 'beatriz gomez',
        genero: 'Fantasía',
        estado:`Intercambiado`,
        telefono: '37 (644) 065-6706',
        correo:'gratauhicredau-7743@yopmail.com',
    },
    {
        id: 12,
        nombre: 'El Eco de las Montañas',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        fotos: {
            principal: `imagenes/libro3.jfif`,
            miniatura: `imagenes/libro3.jfif`
        },
        user: `lopez lopez`,
        detalles: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus obcaecati quae aliquid voluptas fugiat exercitationem reiciendis alias doloremque illum nihil incidunt modi beatae deserunt, soluta perferendis temporibus reprehenderit laudantium!`,
        autor: 'santiago gomez',
        genero: 'Fantasía',
        estado:`Intercambiado`,
        telefono: '18 (169) 308-4419',
        correo:'faddeunesoina-5439@yopmail.com',
    },
    {
        id: 13,
        nombre: 'Los Guerreros del Tiempo Perdido',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        fotos: {
            principal: `imagenes/libro3.jfif`,
            miniatura: `imagenes/libro3.jfif`
        },
        user: `don juan`,
        detalles: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus obcaecati quae aliquid voluptas fugiat exercitationem reiciendis alias doloremque illum nihil incidunt modi beatae deserunt, soluta perferendis temporibus reprehenderit laudantium!`,
        autor: 'paula rivas',
        genero: 'Fantasía',
        estado:`Disponible`,
        telefono: '26 (695) 114-2332',
        correo:'wegucreuwaunna-2277@yopmail.com',
    },
    {
        id: 14,
        nombre: 'El Último Guardián del Reino',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        fotos: {
            principal: `imagenes/libro3.jfif`,
            miniatura: `imagenes/libro3.jfif`
        },
        user: `hernesto`,
        detalles: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus obcaecati quae aliquid voluptas fugiat exercitationem reiciendis alias doloremque illum nihil incidunt modi beatae deserunt, soluta perferendis temporibus reprehenderit laudantium!`,
        autor: 'carlos orellana',
        genero: 'No Ficción',
        estado:`Disponible`,
        telefono: '06 (560) 075-9891',
        correo:'freinnaucosedou-8890@yopmail.com',
    },
    {
        id: 15,
        nombre: 'La Voz de los Antiguos',
        descripcion: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
        fotos: {
            principal: `imagenes/libro3.jfif`,
            miniatura: `imagenes/libro3.jfif`
        },
        user: `mario`,
        detalles: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum necessitatibus obcaecati quae aliquid voluptas fugiat exercitationem reiciendis alias doloremque illum nihil incidunt modi beatae deserunt, soluta perferendis temporibus reprehenderit laudantium!`,
        autor: 'veronica duarte',
        genero: 'No Ficción',
        estado:`En discucion`,
        telefono: '49 (359) 400-2398',
        correo:'farepix830@atebin.com',
    },
    
];


