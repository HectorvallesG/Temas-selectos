
function renderizarProductos(productosARenderizar = productos) {
    const contenedorProductos = document.getElementById('productos');
    contenedorProductos.innerHTML = '';
    productosARenderizar.forEach(producto => {
        
        let site = `
            detalles.html?nombre=${producto.nombre}
            &img=${producto.fotos.principal}
            &user=${producto.user}
            &descripcion=${producto.descripcion}
            &detalles=${producto.detalles}
            &estado=${producto.estado}
            &telefono=${producto.telefono}
            &correo=${producto.correo}
            &autor=${producto.autor}
        
        `;

        let usuario = `contactar.html?nombre=${producto.nombre}
        &autor=${producto.autor}
        &img=${producto.fotos.miniatura}
        &detalles=${producto.detalles}
        &user=${producto.user}
        &telefono=${producto.telefono}
        &correo=${producto.correo}`;

        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `
            <img src="${producto.fotos.principal}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p> <b>autor:</b> ${producto.autor}</p>
            <p><b> subido por:</b> ${producto.user}</p>
            <div class="botones">            
                <a href='${site}'>Ver detalles</a>
                <a href='${usuario}'>Contactar</a>       
            </div>
        `;
        contenedorProductos.appendChild(productoDiv);
    });
}

function filtrarProductos() {
    const terminoBusqueda = document.getElementById('buscador').value.toLowerCase();
    const generoSeleccionado = document.getElementById('genero').value.toLowerCase();
    
    const productosFiltrados = productos.filter(producto => {
        const coincideNombre = producto.nombre.toLowerCase().includes(terminoBusqueda);
        const coincideGenero = generoSeleccionado === 'todos' || producto.genero.toLowerCase() === generoSeleccionado;
        return coincideNombre && coincideGenero;
    });
    renderizarProductos(productosFiltrados);
}

document.getElementById('buscador').addEventListener('input', filtrarProductos);
document.getElementById('genero').addEventListener('change', filtrarProductos);

renderizarProductos();


