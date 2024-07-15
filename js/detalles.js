const searchParams = new URLSearchParams(window.location.search);

for (const param of searchParams) {
    console.log(param);
  }

  let div= document.createElement("div");
        div.className="perfil";
        let template=`
        <div class="detalle-imagen">
            <img src='${searchParams.get('img')}'/>
        </div>
        <div class="detalle-info">
            <p> <b> nombre del libro: </b> ${searchParams.get('nombre')}</p>
            <p> <b>nombre del autor:  </b> ${searchParams.get('autor')} </p>
            <p> <b> descripcion del  libro: </b> ${searchParams.get('descripcion')}</p>
            <p> <b> detalles que tiene el libro: </b> ${searchParams.get('detalles')}</p>
            <p> <b> subido por el usuario: </b> ${searchParams.get('user')}</p>
            <p> <b>correo electronico: </b> ${searchParams.get('correo')} </p>
            <p> <b>telefono: </b> ${searchParams.get('telefono')} </p>
            <p> <b> Estado: </b> ${searchParams.get('estado')}</p>
        </div>
        
        `;

        const detalle= document.getElementById("detalle");
        div.innerHTML=template;
        detalle.appendChild(div);

