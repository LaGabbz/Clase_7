const calificaciones = [8,9,8.5,10]
let SumaCalificaciones = 0

for (let contador = 0; contador <calificaciones.length;contador++){
    SumaCalificaciones += calificaciones[contador]
}

const PromedioFinal = SumaCalificaciones / calificaciones.length

if(PromedioFinal >= 6){ 
    alert("Aprobaste con: "+PromedioFinal)
}else{
    alert("Reprobaste con: "+PromedioFinal)
}