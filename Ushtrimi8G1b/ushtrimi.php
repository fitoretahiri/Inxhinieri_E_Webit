<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Form Validation</h1>
     Sheno emrin <input type="text" name="" id="name">
    <br>
    Sheno mbiemrin <input type="text" name="" id="surname">
    <br>
    Sheno username <input type="text" name="" id="username">
    <br>
    Sheno email <input type="email" name="" id="email">
    <br>
    Sheno password <input type="password" name="" id="password">
    <br>
    <button onclick="regex()">Submit</button>
    <br>
    <h1>Detyrat ne PHP</h1>
    <?php
    //Detyra e dyte
        function userData($emri, $mbiemri, $mosha, $qyteti){
            $data = array($emri, $mbiemri, $mosha,$qyteti);

            foreach($data as $item){
                echo $item . "\n";
            }
        }    
         userData("Fitore","Tahiri",20,"Mitrovice");

    //Detyra e trete
        function variablat(){
            global $x;
            $x='Fitore';
            global $y;
            $y="Tahiri";
        }
        variablat();
        echo "<br>Variablat jane: 1.".$x." dhe 2.".$y;     
    
    //Detyra e katert
        function det4(){
            $dataLindjes=2001;
            static $mosha=20;

            echo '<br>'.$dataLindjes.' dhe mosha: '.$mosha++;
        }
        det4();
        det4();
    ?>
    <script src='main.js'></script>
</body>
</html>