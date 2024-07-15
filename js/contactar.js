// creacion y insercion de informacion de contacto
document.addEventListener('DOMContentLoaded', function() {
    const tiendaContainer = document.getElementById('tienda-container');
    
    productos.forEach(producto => {
        const productElement = document.createElement('div');
        productElement.classList.add('producto');
        
        productElement.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Autor: ${producto.autor}</p>
            <p>Usuario: ${producto.user}</p>
            <button class="contact-button" data-producto="${producto.nombre}" data-autor="${producto.autor}" data-user="${producto.user}" data-correo="${producto.correo}">Contactar</button>
        `;
        
        tiendaContainer.appendChild(productElement);
    });
});

// llenado de mensaje de contacto 
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('nombre').value = urlParams.get('nombre');
    document.getElementById('autor').value = urlParams.get('autor');
    document.getElementById('user').value = urlParams.get('user');
    document.getElementById('correo').value = urlParams.get('correo');
    
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;
        window.location.href = `mailto:${correo}?subject=Interés en ${urlParams.get('nombre')}&body=${mensaje}`;
    });
});