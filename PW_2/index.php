<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alumnos</title>
</head>
<body>

<form class="form" id='form'>
        Cédula:              <input type="text" name="" id="cedula"><br><br>
        Nombre:              <input type="text" name="" id="nombre"><br><br>
        Nota de matemática:  <input type="number" name="" id="matematica" required><br><br>
        Nota de Física:      <input type="number" name="" id="fisica" required><br><br>
        Nota de Programación:<input type="number" name="" id="programacion" required><br><br>
        <button class="btn">Enviar Datos</button><br><br>
        </form>
        <button id='servidor'>Ver datos en el servidor</button>
   
   
        <div class="respuesta">
          <h3>RESULTADO:</h3>
            <p id="respuestaMate"></p>
            <p id="respuestaFis"></p>
            <p id="respuestaProg"></p>

            <p id="matematicasRes"></p>
            <p id="fisicaRes"></p>
            <p id="programacionRes"></p>

            <p id="aproboTodas"></p>
            <p id="aproboDos"></p>
            <p id="aproboUna"></p>

            <p id="maxMat"></p>
            <p id="maxFis"></p>
            <p id="maxProg"></p>
   </div>     


<script src="index.js"></script>


</body>
</html>