<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <?php 
        //String, integer, Float, boolean, null
        $emri="Filan";
        $mosha=40;
        $iPunesuar=true;
        echo 'Te dhenat e user-it jane: '.$emri." - ".$mosha;
        function variablat(){
            global $universiteti;
            $universiteti='UBT';

        }
        variablat();
        echo 'Universitet jone eshte: '.$universiteti; 

        function variablaStatike(){
            $firstNumber=1;
            static $secondNumber=100;

            echo '<br>'.$firstNumber++.'-'.$secondNumber++;
        }
        variablaStatike();
        variablaStatike();
    ?>
</body>
</html>