const Examenes= [7.5,5.1,6,5.5,8.3]
let Reprobados = 0
for(let contador = 0; contador < Examenes.length; contador++)
    if(Examenes[contador] < 6){
        Reprobados++
        
    }
    alert("Vas a tener que repetir: "+Reprobados+ " examenes.")