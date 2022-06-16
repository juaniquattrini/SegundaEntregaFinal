document.addEventListener(`DOMContentLoaded`,function(){

class Estudiante{
    constructor(nombre, edad, curso , materia , previas, presencial, resultado) {
        this.nombre = nombre; //STRING
        this.edad   = edad; //ENT
        this.curso  = curso;// STRING
        this.materia  = materia;// STRING
        this.previas  = previas;// BOOL
        this.presencial  = presencial;// BOOL
        this.resultado = resultado ;
    }
    crearResultado(){
        return this.resultado = 
        `Confirmar resultado
                    Nombre: ${this.nombre} 
                    Edad: ${this.edad} 
                    curso: ${this.curso}
                    materia: ${this.materia}
                    presencial: ${this.presencial}
                    previas: ${this.previas};
                `   
    }
}
//Funciones
function generaEstudianteDom(){
    let resultadoe = new Estudiante();
    resultadoe.nombre = document.getElementById( `nombre` ).value;
    resultadoe.edad = document.getElementById( `edad` ).value;
    resultadoe.curso = document.getElementById(`curso`).value;
    resultadoe.materia = document.getElementById(`materia`).value;
    // resultadoe.previas = document.QuerySelector()(`previas`).value;
    // resultadoe.preseencial = document.QuerySelector()(`presencial`).value;

    return resultadoe;
}

function functSubmit(){
    let estudiante = new Estudiante(); 
    estudiante = generaEstudianteDom();//Genera Estudiante 
    console.log(estudiante.crearResultado());//Carga por consola
    alert(estudiante.resultado);
    let respuestaDom = document.getElementById(`textoResultado`);
    respuestaDom.innerText = estudiante.resultado;
    console.log(respuestaDom);
}

//Main

let botonResultado = document.getElementById("formulario");
botonResultado.addEventListener('submit', (evento)=>{
    evento.preventDefault();
    console.log(document.getElementById("formulario")[0].value)//Log el form con los valores agregados
    functSubmit(); 
})

//Fin
},false);

