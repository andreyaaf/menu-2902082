const {menu, pausa,leerInput} =require ('./helpers/menu');
const Tareas = require ('./models/tareas');




const principal =async()=> {
  let opt ='';
  const tareas = new Tareas();
  
  do {
    opt = await menu()
    
    switch (opt) {
      case '1':
 //crea la opcion 1 
 //la cual permite añadir la descripcio

      const desc =await leerInput ('Descripcion:');
      tareas.crearTarea(desc);

        break;
      
      case '2':
//muestra la lista de tareas
      console.log(tareas.listadoArr);
        
        break;
      default:
        break;
    }
    await pausa();
  }while(opt !=='0');
  
}

principal();