// cuenta y libros intercambiados

document.addEventListener('DOMContentLoaded', function() {
    const usuario = {
        nombre: "Hector",
        correo: "hdvg_11100@hotmail.com",
        telefono: "123-456-7890"
    };

    const librosIntercambiados = [
        {
            nombre: 'El Secreto del Bosque Encantado',
            autor: 'Beatriz Gomez',
            estado: 'Intercambiado',
            foto: '/imagenes/libro3.jfif'
        },
        {
            nombre: 'El Eco de las Montañas',
            autor: 'Santiago Gomez',
            estado: 'Intercambiado',
            foto: '/imagenes/libro3.jfif'
        }
    ];

    // funcion verificar datos cuenta
    function actualizarInformacionUsuario() {
        document.getElementById('nombre-usuario').innerText = usuario.nombre;
        document.getElementById('correo-usuario').innerText = usuario.correo;
        document.getElementById('telefono-usuario').innerText = usuario.telefono;
    }

    actualizarInformacionUsuario();

    // creacion clase libros interambiados e insercion 
    const listaLibros = document.getElementById('lista-libros');
    librosIntercambiados.forEach(libro => {
        const libroDiv = document.createElement('div');
        libroDiv.classList.add('libro');

        libroDiv.innerHTML = `
            <img src="${libro.foto}" alt="${libro.nombre}">
            <h3>${libro.nombre}</h3>
            <p><b>Autor:</b> ${libro.autor}</p>
            <p><b>Estado:</b> ${libro.estado}</p>
        `;

        listaLibros.appendChild(libroDiv);
    });

    // estructura de editar y verificacion
    document.getElementById('editar-btn').addEventListener('click', () => {
        document.getElementById('info-usuario').style.display = 'none';
        document.getElementById('editar-info-usuario').style.display = 'block';

        document.getElementById('editar-nombre').value = usuario.nombre;
        document.getElementById('editar-correo').value = usuario.correo;
        document.getElementById('editar-telefono').value = usuario.telefono;
    });

    document.getElementById('cancelar-btn').addEventListener('click', () => {
        document.getElementById('info-usuario').style.display = 'block';
        document.getElementById('editar-info-usuario').style.display = 'none';
    });

    document.getElementById('editar-form').addEventListener('submit', (event) => {
        event.preventDefault();

        usuario.nombre = document.getElementById('editar-nombre').value;
        usuario.correo = document.getElementById('editar-correo').value;
        usuario.telefono = document.getElementById('editar-telefono').value;

        actualizarInformacionUsuario();

        document.getElementById('info-usuario').style.display = 'block';
        document.getElementById('editar-info-usuario').style.display = 'none';
    });
});


// PUBLICACIONES

document.addEventListener('DOMContentLoaded', function() {
    const publicacionesKey = 'publicaciones';
    
    // Recuperar publicaciones del almacenamiento local o establecer publicaciones predeterminadas
    const publicaciones = JSON.parse(localStorage.getItem(publicacionesKey)) || [
        {
            titulo: 'Viaje al Centro de la Tierra',
            autor: 'Julio Verne',
            descripcion: 'Un viaje épico al interior del planeta.',
            foto: '/imagenes/libro1.jpg',
            estado: 'Disponible'
        },
        {
            titulo: 'Cien Años de Soledad',
            autor: 'Gabriel García Márquez',
            descripcion: 'La historia de la familia Buendía en el pueblo de Macondo.',
            foto: '/imagenes/libro2.jpg',
            estado: 'Disponible'
        }
    ];

                // PANTALLA MIS PUBLICACIONES
    // insercion y actualizacion de los libros publicados
    function actualizarListaPublicaciones() {
        const listaPublicaciones = document.getElementById('lista-publicaciones');
        listaPublicaciones.innerHTML = '';

        publicaciones.forEach((publicacion, index) => {
            const publicacionDiv = document.createElement('div');
            publicacionDiv.classList.add('publicacion');

            publicacionDiv.innerHTML = `
                <img src="${publicacion.foto}" alt="${publicacion.titulo}">
                <h3>${publicacion.titulo}</h3>
                <p><b>Autor:</b> ${publicacion.autor}</p>
                <p><b>Descripción:</b> ${publicacion.descripcion}</p>
                <p><b>Estado:</b> ${publicacion.estado}</p>
                <div class="btn-publicacion">
                <button class="editar-btn" data-index="${index}">Editar</button>
                <button class="eliminar-btn" data-index="${index}">Eliminar</button>
                </div>
                
            `;

            listaPublicaciones.appendChild(publicacionDiv);
        });
    }

    // guardar publicacion de nuevo libro
    function guardarPublicaciones() {
        localStorage.setItem(publicacionesKey, JSON.stringify(publicaciones));
    }

    actualizarListaPublicaciones();
    // verificacion informacion agregada
    document.getElementById('agregar-btn').addEventListener('click', () => {
        document.getElementById('publicaciones-usuario').style.display = 'none';
        document.getElementById('editar-publicacion').style.display = 'block';
        document.getElementById('editar-titulo').innerText = 'Agregar Publicación';

        document.getElementById('publicacion-form').reset();
        document.getElementById('publicacion-form').dataset.index = -1;
    });

    document.getElementById('cancelar-btn').addEventListener('click', () => {
        document.getElementById('publicaciones-usuario').style.display = 'block';
        document.getElementById('editar-publicacion').style.display = 'none';
    });

    document.getElementById('publicacion-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const index = document.getElementById('publicacion-form').dataset.index;
        const publicacion = {
            titulo: document.getElementById('titulo').value,
            autor: document.getElementById('autor').value,
            descripcion: document.getElementById('descripcion').value,
            foto: document.getElementById('foto').value,
            estado: document.getElementById('estado').value
        };

        if (index == -1) {
            publicaciones.push(publicacion);
        } else {
            publicaciones[index] = publicacion;
        }

        guardarPublicaciones();
        actualizarListaPublicaciones();

        document.getElementById('publicaciones-usuario').style.display = 'block';
        document.getElementById('editar-publicacion').style.display = 'none';
    });

    document.getElementById('lista-publicaciones').addEventListener('click', (event) => {
        if (event.target.classList.contains('editar-btn')) {
            const index = event.target.dataset.index;
            const publicacion = publicaciones[index];

            document.getElementById('publicaciones-usuario').style.display = 'none';
            document.getElementById('editar-publicacion').style.display = 'block';
            document.getElementById('editar-titulo').innerText = 'Editar Publicación';

            document.getElementById('titulo').value = publicacion.titulo;
            document.getElementById('autor').value = publicacion.autor;
            document.getElementById('descripcion').value = publicacion.descripcion;
            document.getElementById('foto').value = publicacion.foto;
            document.getElementById('estado').value = publicacion.estado;

            document.getElementById('publicacion-form').dataset.index = index;
        } else if (event.target.classList.contains('eliminar-btn')) {
            const index = event.target.dataset.index;
            publicaciones.splice(index, 1);
            guardarPublicaciones();
            actualizarListaPublicaciones();
        }
    });
});