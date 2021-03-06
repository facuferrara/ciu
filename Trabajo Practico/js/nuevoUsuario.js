let PANTALLA_NUEVO1 = false;
let nuevo_avatar_id = 0;
let imgAvatar="https://gravatar.com/avatar/ab3ef817e400dbddf665041ca1a55051?s=100&d=mp&r=x";
let htmlPantallaNuevo1 = ["<div id='NUEVA-RECTANGULO-FONDO' class='NUEVA-RECTANGULO-FONDO'>"+
"<P id='NUEVA-TXT-TITULO' class='NUEVA-TXT-TITULO'>NUEVO USUARIO</P>"+
"<P  id='NUEVA-TXT-AVATAR' class='NUEVA-TXT-FECHA'><img id='imgAvatar' src='https://gravatar.com/avatar/ab3ef817e400dbddf665041ca1a55051?s=100&d=mp&r=x'>"+
// "<table id='uNtabla' class='uNtabla'>"+
// "<tr>"+
// "<td colspan='2' id='uNavatar' class='uNavatar'><img id='imgAvatar' src='https://gravatar.com/avatar/ab3ef817e400dbddf665041ca1a55051?s=100&d=mp&r=x'>"+
// "</td>"+
// "</tr>"+
// "<tr>"+
// "<td id='uNavatarAnterior' class='uNavatarAnterior'></td>"+
// "<td id='uNavatarSiguiente' class='uNavatarSiguiente'></td>"+
// +
"<P  id='NUEVA-TXT-DESCRIPCION' class='NUEVA-TXT-DESCRIPCION'>NOMBRE:</P>"+
"<textarea  id='NUEVA-TXTTAREA-DESCRIPCION' class='NUEVA-TXTTAREA-DESCRIPCION' cols='30' rows='10' maxlength='100' required></textarea>"+
"<p  id='NUEVA-TXT-ESTADO' class='NUEVA-TXT-ESTADO'>ESTADO:</p>"+
"<select  id='NUEVA-INPUTLIST-ESTADO' class='NUEVA-INPUTLIST-ESTADO' required>"+
"    <option value='Abierta'>ACTIVO</option>"+
// "    <option value='En progreso'>En progreso</option>"+
"    <option value='INACTIVO'>INACTIVO</option>"+
"</select>"+
"<div  id='NUEVA-RECTANGULO-BTN-CANCELAR' class='NUEVA-RECTANGULO-BTN-CANCELAR' >CANCELAR</div>"+
"<div  id='NUEVA-RECTANGULO-BTN-ACEPTAR' class='NUEVA-RECTANGULO-BTN-ACEPTAR' >GUARDAR</div>"+
"</div>"];

async function CARGAR_PANTALLA_NUEVOUSER(){
    //evento del boton "nuevo"
    await dibujarPantallaNuevoU();
    await EVENTOS_PANTALLA_NUEVOU();
}

function dibujarPantallaNuevoU(){
    dibujarMenuMS;
    const inicial = document.getElementById("ultimo").parentNode;

    console.log("dibujando pantalla nuevo");
    htmlPantallaNuevo1.forEach(async function(item){
        console.log("agregando items de pantalla nuevo");
        await inicial.insertAdjacentHTML("beforeEnd",item);
    })
}

async function BORRAR_PANTALLA_NUEVO(){
    try{
        document.getElementById("NUEVA-RECTANGULO-FONDO").remove();
    }catch{
        console.log("no se puedo borrar la pantalla de 'NUEVO'");
    }
}
// function agregarAvatar(){
//     let urlAvatar = DB_urlsAvatar[Unuevo_avatar_id%DB_urlsAvatar.length];
//     document.getElementById("imgAvatar").src = urlAvatar;
// }
function EVENTOS_PANTALLA_NUEVOU(){
    document.getElementById("NUEVA-RECTANGULO-BTN-ACEPTAR").addEventListener("click",async function(){
        let avatar = document.getElementById("NUEVA-TXTTAREA2-DESCRIPCION").value;
        console.log("El avatar es->"+avatar);

        let nombre = document.getElementById("NUEVA-TXTTAREA-DESCRIPCION").value;
        console.log("la descripción es->"+nombre);

        let estadou = document.getElementById("NUEVA-INPUTLIST-ESTADO").value;
        console.log("la estado es->"+estadou);
        if(avatar == "" || nombre=="" || estadou==""){
            console.log("no se cargaron todos los datos");
        }else{
            await DB_agregar_item("nuevo",avatar,nombre,estadou);
            await BORRAR_PANTALLA_NUEVO();
            let ultimoItem = listaDeUsuarios.length;
            agregarAlista(ultimoItem,avatar,nombre,estadou);
            await TABLA_recargar_lista();
        }

    });
    document.getElementById("NUEVA-RECTANGULO-BTN-CANCELAR").addEventListener("click",BORRAR_PANTALLA_NUEVO);
}
