const Alumnos = [
    {nombre: 'Pepe', 
    Matematicas: 8, 
    Historia: 5,
    Geografia: 7
},
    {nombre: 'Lupita',
    Matematicas: 7,
    Historia: 9,
    Geografia: 8
},
    {nombre: 'Miguel',
    Matematicas: 5.6,
    Historia: 5,
    Geografia: 5
}]


for (let cont = 0; cont < Alumnos.length; cont++){
    promedio = (Alumnos[cont].Matematicas + Alumnos[cont].Historia + Alumnos[cont].Geografia) / 3
        
    if(promedio < 6){
       console.log("Reprobado: " +Alumnos[cont].nombre)
    }

} 

