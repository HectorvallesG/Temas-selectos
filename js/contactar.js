const searchParams = new URLSearchParams(window.location.search);

for (const param of searchParams) {
    console.log(param);
  }

  let div= document.createElement("div");
        div.className="Contacto";
        let template=`
        <div class="detalle-imagen">
            <img src='${searchParams.get('img')}'/>
        </div>
        <div class="detalle-info">
             <p> <b> nombre del libro: </b> ${searchParams.get('nombre')}</p>
             <p> <b>nombre del autor:  </b> ${searchParams.get('autor')} </p>
              <p> <b> detalles del  libro: </b> ${searchParams.get('detalles')}</p>
        </div>

        <div class="contactar-usuario">
            <p> <b> subido por el usuario: </b> ${searchParams.get('user')}</p>
            <p> <b>telefono: </b> ${searchParams.get('telefono')}</p>
            <p> <b>correo electronico: </b> ${searchParams.get('correo')} </p>
        </div>
        
        `;

        const contactar= document.getElementById("contactar");
        div.innerHTML=template;
        contactar.appendChild(div);

   

