<?php

$promMateFinal = $_REQUEST['promedio_mat'];
$promedio_fis  = $_REQUEST['promedio_fis'];
$promedio_prog = $_REQUEST['promedio_prog'];

$aprobMate   = $_REQUEST['alumnos_aprob_mat'];
$aprobFisica = $_REQUEST['alumnos_aprob_fis'];
$aprobProg   = $_REQUEST['aprobProg'];

$AplazadosMate   = $_REQUEST['alumnos_reprob_mat'];
$AplazadosFisica = $_REQUEST['alumnos_reprob_fis'];
$AplazadosProg   = $_REQUEST['AplazadosProg'];

$AprobTodas = $_REQUEST['AprobTodas'];
$AprobDos   = $_REQUEST['alumno_aprob_dos'];
$AprobUna   = $_REQUEST['alumnos_aprob_una'];

$MaximoMate   = $_REQUEST['MaximoMate'];
$MaximoFisica = $_REQUEST['MaximoFisica'];
$MaximoProg   = $_REQUEST['MaximoProg'];

echo '<h4> RESULTADO</h4>';
echo '<p>Promedio de Matemática:<b>'     .$promMateFinal.'</b> </p>';
echo '<p>Promedio de Fisica: <b>'        .$promedio_fis.'</b> </p>';
echo '<p>Promedio de Programacion: <b>'  .$promedio_prog.'</b> </p>';
echo "<p> Aprobados en Matemáticas: <b>" .$aprobMate."</b> </p>";
echo "<p> Aprobados en Física: <b>"      .$aprobFisica."</b></p>";
echo "<p> Aprobados en Programación: <b>".$aprobProg."</b></p>";
echo "<p> Reprobados en Matemática: <b>" .$AplazadosMate."</b> </p>";
echo "<p> Reprobados en Física: <b>"     .$AplazadosFisica."</b> </p>";
echo "<p> Reprobados en Programación:<b>".$AplazadosProg."</b> </p>";
echo "Aprobaron todas las Materias:<b>"  .$AprobTodas."</b></p>";
echo "Aprobaron dos Materia:<b>"         .$AprobDos."</b> </p>";
echo "Aprobaron  una Materia:<b>"        .$AprobUna."</b></p>";
echo "<p>Nota Maxima en Matematicas:<b>" .$MaximoMate."</b></p>";
echo "<p>Nota Maxima en Fisica:<b>"      .$MaximoFisica."</b> </p>";
echo "<p>Nota Maxima en Programacion:<b>".$MaximoProg."</b></p>";
?>
