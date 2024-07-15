// verificacion que este correcto usuario y contraseña
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = usuarios.find(user => user.usuario === username && user.contraseña === password);

    if (user) {
        
        window.location.href = 'tienda.html';
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});
