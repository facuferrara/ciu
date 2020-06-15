// let itemIndex = 0; 
// let todosSeleccionados = false;
// let itemSeleccionados = [];
// let listaDeUsuarios = []; //listaDeSolicitudes
// let nodosUsuarios = [  //nodosMisSolicitudes
//     "<div id='contenedorDeUsuarios' class='contenedorDeUsuarios'>"+

//     "<table id='tablaUsers' class='tablaUsers'>"+
//                 "<tr>"+
//                     "<td class='colChecks'>"+
//                         "<input type='checkbox' id='checkAll' class='checks'>"+
//                     "</td>"+
//                     "<td class='colAvatar'>"+
//                         "Avatar"+
//                     "</td>"+
//                     "<td class='colNombre'>Nombre</td>"+
//                     "<td class='colEstado'>Estado</td>"+
//                 "</tr>"+
//             "</table></div>"
// ];
// let misUsuariosInicial = document.getElementById("ultimo"); //misSolicitudesInicial
// let tabla; //tabla
// let checkAll ;
// let checkAllState = false;


async function cargar_listadoDeUsuarios(){
  await dibujarMenu();
  await DB_traer_JSONUsuarios();//DB_traer_JSON
  await TABLA_dibujarEstructura();
  checkAll = document.getElementById("checkAll");
  tabla = document.getElementById("tablaUsers");
  await TABLA_dibujar_items();
  await MisSolicitudesEventos();
}




// async function MisSolicitudesEventos(){
//   UTIL_quitarEvento_pID([["checkAll","click"]],"MisSolicitudesEventos");
//   UTIL_agregarEvento_pID(["checkAll","click",check_All]);
//   let checks = [];
//   // for(let i = 0;i<listaDeSolicitudes.length;i++){
//   //     let id = listaDeSolicitudes[i][0];
//   //         let checkStr ="check"+id;
//   //         document.getElementById(checkStr).addEventListener("click",function(){
//   //             console.log("item seleccionado y agregado");
//   //             if(document.getElementById(checkStr).checked){
//   //                 itemSeleccionados.push(i);
//   //             }else{
//   //                 itemSeleccionados.splice(id,1);
//   //             }
//   //             console.log(itemSeleccionados);
//   //         })
//   // }
//   console.log(checks);
//   // UTIL_agregarEvento_pID(checks,"MisSolicitudesEventos");
// }


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


// async function TABLA_dibujarEstructura(){
//   nodosUsuarios.forEach(item =>{
//     misUsuariosInicial.insertAdjacentHTML("AfterEnd",item);
//   });
// }

// function TABLA_borrar(){
//   UTIL_BORRAR_HTML_pID(["tabla"]);
// }

// async function TABLA_dibujar_items(){
//   for(let i = 0;i<listaDeSolicitudes.length;i++){
//       let itemID = ""+listaDeUsuarios[i][0]
//       let avatar = ""+listaDeUsuarios[i][2];
//       let nombre = ""+listaDeUsuarios[i][3];
//       let estado = ""+listaDeUsuarios[i][4];
//       agregarAlista(itemID,fecha,desc,estado);
//   }
// }


// async function TABLA_agregar_desde_DB(){
//   if(listaDeUsuarios.length>0){
//       for(let i = 0;i<listaDeUsuarios.length;i++){
//           agregarAlista(listaDeUsuarios[i][0],listaDeUsuarios[i][2],listaDeUsuarios[i][3],listaDeUsuarios[i][4]);
//       }
//   }else{
//       console.log("nada que agregar")
//   }
// }


// async function DB_agregar_item(origen,fecha,descripcion,estado){
//   listaDeUsuarios.push([itemIndex,origen,fecha,descripcion,estado]);
//   console.log("se agrego el item->"+itemIndex+"-"+origen+"-"+fecha+"-"+descripcion+"-"+estado)
//   itemIndex++;
//   return listaDeUsuarios.length-1;
// }


// function agregarAlista(id,fecha,descripcion,estado){
//   document.getElementById("tabla").insertAdjacentHTML("beforeEnd","<tr id='item"+id+"'>"+
//   "<td class='colCheck'>"+
//       "<input type='checkbox' id='check"+id+"' class='check'>"+
//   "</td>"+
//   "<td id='colFecha"+id+"' class='colFecha'>"+fecha+"</td>"+
//   "<td id='colDescripcion"+id+"' class='colDescripcion'>"+descripcion+"</td>"+
//   "<td id='colEstado"+id+"' class='colEstado'>"+estado+"</td></tr>");
//   document.getElementById("check"+id).addEventListener("click",function(){
//        console.log("item seleccionado y agregado");
//       if(document.getElementById("check"+id).checked){
//           itemSeleccionados.push(id);
//       }else{
//           itemSeleccionados.splice(id,1);
//       }
//       console.log(itemSeleccionados);
//   })

// }


// function TABLA_recargar_lista(){
//   // UTIL_BORRAR_HTML_pID(["contenedorDeSolicitudes"],"TABLA_borrarTodosLosItems");
//   // TABLA_dibujarEstructura();
//   // TABLA_dibujar_items();
//   MisSolicitudesEventos();
// }



// async function DB_borrar_seleccionados(){
//   borrarBotones();
//   if(todosSeleccionados){
//       document.getElementById("checkAll").checked = false;
//   }
//   for(let i = 0;i<itemSeleccionados.length;i++){
//       let id = itemSeleccionados[i];
//       listaDeUsuarios.splice(listaDeUsuarios.indexOf(id),1);
//       // document.getElementById("check"+id).removeEventListener("click",function(){});
//       UTIL_BORRAR_HTML_pID(["colFecha"+id,"colDescripcion"+id,"colEstado"+id,"check"+id,"colCheck"+id,"item"+id],"DB_borrar_seleccionados")
//   }
//   itemSeleccionados = []
//   TABLA_recargar_lista();
// }

async function DB_traer_JSON(){
  return fetch('./json/tabla.json')
  .then(result=> result.json())
  .then(async (ar)=>{
      let arr = Array.from(ar['Solicitudes']);
      arr.reverse;
      for(let i = 0;i<arr.length;i++){  
          let fecha = arr[i]['Fecha Solicitud'];
          let desc = arr[i]['Descripción'];
          let estado = arr[i]['Estado'];
          await DB_agregar_item("JSON",fecha,desc,estado);
      }
  })
}
// async function DB_traer_JSONUsuarios(){
//   return fetch('./json/usuario.json')
//   .then(result=> result.json())
//   .then(async (ar)=>{
//       let arr = Array.from(ar['Usuarios']);
//       arr.reverse;
//       for(let i = 0;i<arr.length;i++){  
//           let avatar = arr[i]['Avatar'];//fecha
//           let nombre = arr[i]['Nombre'];//descripcion
//           let estado = arr[i]['Estado'];
//           await DB_agregar_item("JSON",avatar,nombre,estado);
//       }
//   })
// }


// async function DB_borrar_JSON(){
//   //borra todos los items del array listaSOlicitudes con el origen JSON , item[x][1]
//   let listaNormal =[];
//   for(let i = 0;i<listaDeSolicitudes.length;i++){
//       if(listaDeSolicitudes[i][1]!="JSON"){
//           listaNormal.push(listaDeUsuarios[i]);
//       }
//   }
//   listaDeUsuarios = listaNormal;
// }
