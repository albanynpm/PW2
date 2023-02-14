const $respuestaMatematica = document.getElementById('respuestaMate')
const $respuestaFisica = document.getElementById('respuestaFis')
const $respuestaProg = document.getElementById('respuestaProg')
const $respuestaMat = document.getElementById('matematicasRes')
const $respuestaFis = document.getElementById('fisicaRes')
const $respuestaPro = document.getElementById('programacionRes')
const $alumnosAproboTodas = document.getElementById('aproboTodas')
const $alumnosAproboDos = document.getElementById('aproboDos')
const $alumnosAproboUna = document.getElementById('aproboUna')
const $notaMaxMat = document.getElementById('maxMat')
const $notaMaxFis = document.getElementById('maxFis')
const $notaMaxProg = document.getElementById('maxProg')

const $form = document.getElementById('form')
const arrayDatos    = []
let promMateFinal   = ''
let promFisicaFinal = ''
let promProgFinal   = ''
let aprobMate       = 0;
let aprobFisica     = 0;
let aprobProg       = 0;
let AplazadosMate   = 0;
let AplazadosFisica = 0;
let AplazadosProg   = 0;
let AprobTodas      = 0;
let AprobDos        = 0;
let AprobUna        = 0;
let MaximoMate      = 0;
let MaximoFisica    = 0;
let MaximoProg      = 0;

//Btn Del Servidor
$form.onsubmit = function(e){
    const btn = document.querySelector('#servidor')
     btn.addEventListener('click',e=>{
        window.location = `proceso.php?alumnos_aprob_mat=${aprobMate}&alumnos_aprob_fis=${aprobFisica}&aprobProg=${aprobProg}
        &alumnos_reprob_mat=${AplazadosMate}&alumnos_reprob_fis=${AplazadosFisica}&AplazadosProg=${AplazadosProg}&AprobTodas=${AprobTodas}&alumno_aprob_dos=${AprobDos}&alumnos_aprob_una=${AprobUna}
        &MaximoMate=${MaximoMate}&MaximoFisica=${MaximoFisica}&MaximoProg=${MaximoProg}&promedio_mat=${promMateFinal}&promedio_fis=${promFisicaFinal}&promedio_prog=${promProgFinal}`
    })
        e.preventDefault()
            let cedula = document.getElementById('cedula').value
            let nombre = document.getElementById('nombre').value
            let n_mate = document.getElementById('matematica').value
            let n_fis = document.getElementById('fisica').value
            let n_prog = document.getElementById('programacion').value
        const newData = {
            cedula,
            nombre,
            n_mate,
            n_fis,
            n_prog
        }
arrayDatos.unshift(newData)
e.target.reset()
calculaDatos()
} 

//Promedio de las notas
const calculaDatos = () =>{
       
    //Promedio de matematica
        const notas_matematicas = arrayDatos.map(el=>parseInt(el.n_mate))
        const suma = notas_matematicas.reduce((anterior, actual) => anterior + actual, 0);
        promMateFinal = suma/notas_matematicas.length
        //Promedio de fisica
        const notas_fisica = arrayDatos.map(el=>parseInt(el.n_fis))
        const sumaFis = notas_fisica.reduce((anterior, actual) => anterior + actual, 0);
        promFisicaFinal = sumaFis/notas_fisica.length
        //Promedio de programacion
        const notas_prog = arrayDatos.map(el=>parseInt(el.n_prog))
        const sumaProg = notas_prog.reduce((anterior, actual) => anterior + actual, 0);
        promProgFinal = sumaProg/notas_prog.length
    
        $respuestaMatematica.innerHTML = `Promedio de Matemática:   ${promMateFinal}`
        $respuestaFisica.innerHTML     = `Promedio de Física:       ${promFisicaFinal}`
        $respuestaProg.innerHTML       = `Promedio de Programación: ${promProgFinal}`
  
        //Aprobados y reprobados
            if(arrayDatos[0].n_mate>9.5) { 
                aprobMate++;
            } else { 
                AplazadosMate++;}
            if(arrayDatos[0].n_fis>9.5) { 
                aprobFisica++;
            } else { 
                AplazadosFisica++;}
            if(arrayDatos[0].n_prog>9.5) { 
                aprobProg++;
            } else { 
                AplazadosProg++;
            }

    //Aprobados   
        $respuestaMat.innerHTML = 'Aprobados matemática: '+aprobMate+''
        $respuestaMat.innerHTML = 'Aprobados Física: '+aprobFisica+''
        $respuestaMat.innerHTML = 'Aprobados Programación: '+aprobProg+''

        //Aplazadps
        $respuestaMat.innerHTML = 'Aplazados Matemática: '+AplazadosMate+''
        $respuestaMat.innerHTML = 'Aplazados Física: '+AplazadosFisica+''
        $respuestaMat.innerHTML = 'Aplazados Programación: '+AplazadosProg+''


   //Alumnos que aprobaron las materias
        if(arrayDatos[0].n_mate>9.5 || arrayDatos[0].n_fis>9.5 || arrayDatos[0].n_prog>9.5) { 
            AprobUna++;
            if(arrayDatos[0].n_mate>9.5 && arrayDatos[0].n_fis>9.5 
                || arrayDatos[0].n_mate>9.5 && arrayDatos[0].n_prog>9.5 
                || arrayDatos[0].n_fis>9.5 && arrayDatos[0].n_prog>9.5 ){
                AprobDos++;
            if(arrayDatos[0].n_mate>9.5 && arrayDatos[0].n_fis>9.5 && arrayDatos[0].n_prog>9.5) {
                    AprobTodas++;
                } 
            } 
        }
        $alumnosAproboTodas.innerHTML = `Alumnos que aprobaron todas las materias: ${AprobTodas}`
        $alumnosAproboDos.innerHTML =   `Alumnos que aprobaron Dos materias:       ${AprobDos}`
        $alumnosAproboUna.innerHTML =   `Alumnos que aprobaron Una materia:        ${AprobUna}`

        //Nota Maxima 
        MaximoMate = Math.max(...notas_matematicas); 
        MaximoFisica = Math.max(...notas_fisica); 
        MaximoProg= Math.max(...notas_prog); 
        
        $notaMaxMat.innerHTML = 'Nota máxima de Matemática:    '+MaximoMate
        $notaMaxFis.innerHTML = 'Nota máxima de Física:        '+MaximoFisica
        $notaMaxProg.innerHTML ='Nota máxima de Programación:  '+MaximoProg
    }