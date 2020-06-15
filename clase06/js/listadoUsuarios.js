
let itemUIndex = 0;
let todosUSeleccionados = false;
let itemUSeleccionados = [];
let listaDeUsuarios = [];//listaDeSolicitudes
let nodosUsuarios = [
  "<div id='contenedorDeUsuarios' class='contenedorDeUsuarios'>"+

  "<table id='tablaUsers' class='tablaUsers'>"+
              "<tr>"+
                  "<td class='colChecks'>"+
                      "<input type='checkboxs' id='checkAlls' class='checks'>"+
                  "</td>"+
                  "<td class='colAvatar'>"+
                      "Avatar"+
                  "</td>"+
                  "<td class='colNombre'>Usuario</td>"+
                  "<td class='colEstadoU'>Estado</td>"+
              "</tr>"+
          "</table></div>"
];
let usuarioInicial = document.getElementById("ultimo");
// let tabla;
// let checkAll ;
// let checkAllState = false;

async function cargar_listadoDeUsuarios(){
  await dibujarMenu();
  await DB_traer_JSONUser();//DB_traer_JSON
  await TABLA_dibujarEstructuraU();
  checkAll = document.getElementById("checkAlls");
  tabla = document.getElementById("tablaUsers");
  await TABLA_dibujar_items();    //no es necesario cambiar esto
  // await MisSolicitudesEventos();
}


async function DB_traer_JSONUser(){
  return fetch('./json/usuario.json')
  .then(result=> result.json())
  .then(async (ar)=>{
      let arr = Array.from(ar['Usuarios']);
      arr.reverse;
      for(let i = 0;i<arr.length;i++){  
          let avatar = arr[i]['Avatar'];
          let nombre = arr[i]['Nombre'];
          let estadoU = arr[i]['Estado'];
          await DB_agregar_item("JSON",avatar,nombre,estadoU);
      }
  })
}
async function TABLA_dibujarEstructuraU(){
  nodosMisSolicitudes.forEach(item =>{
    misSolicitudesInicial.insertAdjacentHTML("AfterEnd",item);
  });
}


function check_All(){
  if(todosSeleccionados){
      itemSeleccionados = [];
      todosSeleccionados = false;
  }else{
      itemSeleccionados = listaDeSolicitudes;
      todosSeleccionados = true;
  }
  for(let i = 0;i<listaDeUsuarios.length;i++){
      document.getElementById("check"+listaDeUsuarios[i][0]).checked = todosSeleccionados;
  }
}


