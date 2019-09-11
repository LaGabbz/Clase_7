const Asistencias = [0,0,1,1,1,1,1,0,1,1,1,1]
let PromedioAsistencias = 0

for (let contador = 0; contador < Asistencias.length; contador++){
   if( Asistencias[contador]){
       PromedioAsistencias++
   }
}

promedio = (PromedioAsistencias*100) / Asistencias.length

alert("Tu promedio de asistencias fue: " +promedio+" % " +" Solo fuiste: " +PromedioAsistencias+ " clases")