
let itemUIndexu = 0;
let todosUSeleccionados = false;
let itemUSeleccionados = [];
let listaDeUsuarios = [];//listaDeSolicitudes
// let nodosUsuarios = [
//   "<div id='contenedorDeUsuarios' class='contenedorDeUsuarios'>"+

//   "<table id='tablaUsers' class='tablaUsers'>"+
//               "<tr>"+
//                   "<td class='colChecks'>"+
//                       "<input type='checkboxs' id='checkAlls' class='checks'>"+
//                   "</td>"+
//                   "<td class='colAvatar'>"+
//                       "Avatar"+
//                   "</td>"+
//                   "<td class='colNombre'>Nombre</td>"+
//                   "<td class='colEstadoU'>Estado</td>"+
//               "</tr>"+
//           "</table></div>"
// ];
let nodosUsuarios = [
  "<div id='contenedorDeSolicitudes' class='contenedorDeSolicitudes'>"+

  "<table id='tabla' class='tabla'>"+
              "<tr>"+
                  "<td class='colCheck'>"+
                      "<input type='checkbox' id='checkAll' class='check'>"+
                  "</td>"+
                  "<td class='colFecha'>"+
                      "Avatar"+
                  "</td>"+
                  "<td class='colDescripcion'>Nombre</td>"+
                  "<td class='colEstado'>Estado</td>"+
              "</tr>"+
          "</table></div>"
];
 let usuarioInicial = document.getElementById("ultimo");
//  let tablau;
//  let checkAlls ;
//  let checkAllStates = false;

async function cargar_listadoDeUsuarios(){
  

    await dibujarMenu();
    await DB_traer_JSONUser(); // joya hay que cambiar agregar item
    await TABLA_dibujarEstructuraU();
    checkAll = document.getElementById("checkAll");
    tabla = document.getElementById("tabla");
    await TABLA_dibujar_items();
    await MisSolicitudesEventos();
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
          let estadoU = arr[i]['EstadoU'];
          await DB_agregar_item("JSON",avatar,nombre,estadoU);
      }
  })
}

async function TABLA_dibujarEstructuraU(){
  nodosUsuarios.forEach(item =>{
    usuarioInicial.insertAdjacentHTML("AfterEnd",item);
  });
}


// function check_AllU(){
//   if(todosSeleccionados){
//       itemSeleccionados = [];
//       todosSeleccionados = false;
//   }else{
//       itemSeleccionados = listaDeSolicitudes;
//       todosSeleccionados = true;
//   }
//   for(let i = 0;i<listaDeUsuarios.length;i++){
//       document.getElementById("checks"+listaDeUsuarios[i][0]).checked = todosSeleccionados;
//   }
// }
async function TABLA_dibujar_itemsU(){
  for(let i = 0;i<listaDeUsuarios.length;i++){
      let itemID = ""+listaDeUsuarios[i][0]
      let avatar = ""+listaDeUsuarios[i][2];
      let nombre = ""+listaDeUsuarios[i][3];
      let estadoU = ""+listaDeUsuarios[i][4];
      agregarAlistaUser(itemID,avatar,nombre,estadoU);
  }
}


async function DB_agregar_itemU(origenu,avatar,nombre,estadoU){
  listaDeUsuarios.push([itemIndex,origenu,avatar,nombre,estadoU]);
  console.log("se agrego el item->"+itemIndex+"-"+origenu+"-"+avatar+"-"+nombre+"-"+estadoU)
  itemUIndexu++;
  return listaDeUsuarios.length-1;
}

function agregarAlistaUser(id,avatar,nombre,estadoU){
  document.getElementById("tablaUsers").insertAdjacentHTML("beforeEnd","<tr id='item"+id+"'>"+
  "<td class='colChecks'>"+
      "<input type='checkboxs' id='checks"+id+"' class='checks'>"+
  "</td>"+
  "<td id='colAvatar"+id+"' class='colAvatar'>"+avatar+"</td>"+
  "<td id='colNombre"+id+"' class='colNombre'>"+nombre+"</td>"+
  "<td id='colEstadoU"+id+"' class='colEstadoU'>"+estadoU+"</td></tr>");
  document.getElementById("checks"+id).addEventListener("click",function(){
       console.log("item seleccionado y agregado");
      if(document.getElementById("checks"+id).checked){
          itemSeleccionados.push(id);
      }else{
          itemSeleccionados.splice(id,1);
      }
      console.log(itemSeleccionados);
  })

}