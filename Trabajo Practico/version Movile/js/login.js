// import saludar from ("./index.js");

const botonLogear = document.getElementById("BotonLogear");
const usuariosLogin = [
    ['30337591','dario83']
];
let elementosAagregar = [
    "<div id='elementoMenu0' class='menu-fondo'>esto es del menu</div>",
    "<div id='elementoMenu1' class='ventanaColoreada'></div>",
    "<div id='elementoMenu2' class='txtIngresar'>INGRESAR</div>",
    "<div id='elementoMenu3' class='USUARIO'>USUARIO:</div>",
    "<div id='elementoMenu4' class='CONTRASEÑA'>CONTRASEÑA:</div>",
    "<input id='elementoMenu5' class='ingresoDeUsuario' type='text' name='usuario' id='usuario'>",
    "<input id='elementoMenu6' class='ingresoDeContraseña' type='password' name='contraseña' id='contraseña'>",
    "<p id='elementoMenu9' class='loginResultado'></p>",
    "<div id='elementoMenu7' class='BotonAceptar'></div>",
    "<div id='elementoMenu8' class='ACEPTAR'>ENTRAR</div>"
];

async function agregarAlFinal(itemAnterior,itemEventoSalir, items){
    items.forEach(await function(item){
        document.body.lastElementChild.insertAdjacentHTML("afterend",item);
    })
    //agregado solo para esta pantalla
    document.getElementById("elementoMenu7").addEventListener("click", function(){
        console.log("se apreto el boton entrar");
        validarUsuarioCont();
    })
    document.getElementById("elementoMenu8").addEventListener("click", function(){
        console.log("se apreto el boton entrar");
        validarUsuarioCont();
    })
}

async function removerAgregados(primero, items){
    for(let i = items.length-1;i>0;i--){
        console.log("eliminando-> "+i)
        await document.getElementById(primero).nextElementSibling.remove();
    }
    await document.getElementById(primero).remove();
}

botonLogear.addEventListener("click",async function(){
    await agregarAlFinal("ultimo","elementoMenu0",elementosAagregar);
    await document.getElementById("elementoMenu0").addEventListener("click",async function(){
        await removerAgregados("elementoMenu0",elementosAagregar);
    })
})
function validarUsuario(usuario){
    console.log("validando usuario:"+usuario.value)
    if((usuario.value.length == 8) && !isNaN(usuario.value)){
        return true;
    }else{
        return false;
    }
}
function validarContraseña(cont){
    console.log("validando contraseña:"+cont.value)
    let numeros = [1,2,3,4,5,6,7,8,9,0];
    let letras = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ñ','z','x','c','v','b','n','m'];
    let tieneUnNumero = false
    let tieneUnaLetra = false
    let palabra = Array.from(cont.value);
    palabra.forEach((caracter)=>{
        letras.forEach((letra)=>{if(caracter == letra){tieneUnaLetra = true}})
        numeros.forEach((numero)=>{if(caracter == numero){tieneUnNumero= true}})
    })
    if(cont.value.length < 6){mostrarResultado("la contraseña debe tener al menos 6 caracteres");};
    if(tieneUnNumero==false){mostrarResultado("la contraseña debe tener al menos un numero");};
    if(tieneUnaLetra==false){mostrarResultado("la contraseña debe tener al menos una letra");};
    return (cont.value.length >= 6) && tieneUnNumero && tieneUnaLetra;
}
function validarUsuarioCont(){
    console.log("validando usuario y contraseña")
    let usuario = document.getElementById("elementoMenu5");
    let cont = document.getElementById("elementoMenu6");
    let usuarioValido = validarUsuario(usuario);
    let contValida = validarContraseña(cont);
    if(usuarioValido && contValida){
        console.log("usuario : ("+usuario.value+")y contraseña : ("+cont.value+") valido")
        //borra los objetos de mas
        removerAgregados("index0",[]);
        removerAgregados("index1",[]);
        removerAgregados("index2",[]);
        removerAgregados("BotonLogear",[]);
        removerAgregados("elementoMenu0",elementosAagregar);
        //llamada a la otra pantalla
        dibujarMenu();
        return true;
    }else{
        console.log("usuario : ("+usuario.value+")y contraseña : ("+cont.value+") no valido")

        return false;
    }
}

function mostrarResultado(txt){
    console.log(txt)
    const resultado = document.getElementById("elementoMenu9");
    resultado.textContent = txt+"";
    setTimeout(function(){
        resultado.textContent = " ";
    },2000)
}

