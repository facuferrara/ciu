let SELECCION_A_MODIFICARU;

function htmlPantallaModificarUser(avatar,nombre,estadoU){ 
    return ["<div id='NUEVA-RECTANGULO-FONDO' class='NUEVA-RECTANGULO-FONDO'>"+
"<P id='NUEVA-TXT-TITULO' class='NUEVA-TXT-TITULO'>MODIFICAR USUARIO</P>"+
"<P  id='NUEVA-TXT-AVATAR' class='NUEVA-TXT-FECHA'>AVATAR:</P>"+"<textarea  id='NUEVA-TXTTAREA2-DESCRIPCION' class='NUEVA-TXTTAREA2-DESCRIPCION' cols='30' rows='9' maxlength='100'  required></textarea>"+
"<P  id='NUEVA-TXT-DESCRIPCION' class='NUEVA-TXT-DESCRIPCION'>NOMBRE:</P>"+
"<textarea  id='NUEVA-TXTTAREA-DESCRIPCION' class='NUEVA-TXTTAREA-DESCRIPCION'" +
"cols='30' rows='10' maxlength='100' required>"+nombre+"</textarea>"+
"<p  id='NUEVA-TXT-ESTADO' class='NUEVA-TXT-ESTADO'>ESTADO:</p>"+
"<select  id='NUEVA-INPUTLIST-ESTADO' class='NUEVA-INPUTLIST-ESTADO' required >"+
"    <option value='Abierta'>ACTIVO</option>"+
"    <option value='Cerrada'>INACTIVO</option>"+
"</select>"+
"<div  id='NUEVA-RECTANGULO-BTN-CANCELAR' class='NUEVA-RECTANGULO-BTN-CANCELAR' >CANCELAR</div>"+
"<div  id='NUEVA-RECTANGULO-BTN-ACEPTAR' class='NUEVA-RECTANGULO-BTN-ACEPTAR' >GUARDAR</div>"+
"</div>"];
};


async function CARGAR_PANTALLA_MODIFICARUSER(){
    await dibujarPantallaModificaru();
}

async function dibujarPantallaModificaru(){
    const inicial = document.getElementById("ultimo").parentNode;
    console.log("dibujando pantalla nuevo");
    await SELECCCION_MODIFICARUser();
    let avatar = SELECCION_A_MODIFICARU[2];
    let nombre = SELECCION_A_MODIFICARU[3];
    let estadou = SELECCION_A_MODIFICARU[4];
    let item1 = htmlPantallaModificarUser(avatar,nombre,estadou);
    inicial.insertAdjacentHTML("beforeEnd",item1);
    // document.getElementById("NUEVA-INPUT-FECHA").defaultValue = avatar;
    document.getElementById("NUEVA-INPUT-FECHA").value = avatar;
    document.getElementById("NUEVA-TXTTAREA-DESCRIPCION").value = nombre;
    document.getElementById("NUEVA-INPUTLIST-ESTADO").value = estadou;

    document.getElementById("NUEVA-RECTANGULO-BTN-CANCELAR").addEventListener("click",BORRAR_PANTALLA_MODIFICAR);
    document.getElementById("NUEVA-TXT-FECHA").addEventListener("click",function(){
        console.log("se cambio EL AVATAR A -> "+document.getElementById("NUEVA-INPUT-FECHA").value);
    });
    document.getElementById("NUEVA-RECTANGULO-BTN-ACEPTAR").addEventListener("click",async function(){

        let val1 = document.getElementById("NUEVA-INPUT-FECHA").value;
        let mavatar = ""+val1;

        console.log("el avatar del documento es->"+mavatar+"-seleccion: "+SELECCION_A_MODIFICARU[2]);
        console.log("datos del input->"+val1);
 
        let mnombre = await document.getElementById("NUEVA-TXTTAREA-DESCRIPCION").value;
        let mestadou = await document.getElementById("NUEVA-INPUTLIST-ESTADO").value;
        if( mavatar!="" && mnombre !="" && mestadou !=""){
            SELECCION_A_MODIFICARU[2] = mavatar;
            SELECCION_A_MODIFICARU[3] = mnombre;
            SELECCION_A_MODIFICARU[4] = mestadou;
            BORRAR_PANTALLA_MODIFICARU();
            TABLA_recargar_lista();
        }else{
            console.log("algun dato esta mal->"+mavatar+"-"+mnombre+"-"+mestadou);
        }
    });

}

function SELECCCION_MODIFICARUser(){
    if(itemSeleccionados.length>0){
        SELECCION_A_MODIFICARU = itemSeleccionados[0];
    }else{
        return false;
    }
}

function MODIFICAR_SELECCIONU(){
        for(let e = 0;e<listaDeUsuarios.length;e++){
            if(listaDeUsuarios[e][0]==SELECCCION_MODIFICARUser[0]){
                console.log("borrando item-> "+"item"+SELECCCION_MODIFICARUser[0])
                // document.getElementById("item"+listaDeSolicitudes[e][0]).remove();
                listaDeUsuarios[e][2] = ""
                listaDeUsuarios[e][2] = ""
                listaDeUsuarios[e][2] = ""
            }
        }
}

function BORRAR_PANTALLA_MODIFICARU(){
    try {
        document.getElementById("NUEVA-RECTANGULO-FONDO").remove();
    } catch (error) {
        console.log("no se puede borrar la pantalla modificar->"+error);
    }

}