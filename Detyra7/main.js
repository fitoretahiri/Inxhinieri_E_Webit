/*function kalkulo(x,y){
    return x+y;
}

var vargu =[1,1.11, true, "test"];
//for in, for of
for(let i=0;i<vargu.length;i++){
    console.log(vargu[i]);
}

/*for(let i in vargu){
    console.log(i);
}

for(let i of vargu){
    console.log(i);
}*/


function myFunction(){
    const Personi={
        emri:document.getElementById('emri').value,
        mbeimri:document.getElementById('mbiemri').value,
        email:document.getElementById('emaili').value,
        mosha:document.getElementById('mosha').value,
        qyteti:document.getElementById('qyteti').value
    }

    const Personi2={
        emri:document.getElementById('emri').value,
        mbeimri:document.getElementById('mbiemri').value,
        email:document.getElementById('emaili').value,
        mosha:document.getElementById('mosha').value,
        qyteti:document.getElementById('qyteti').value
    }

    if(Personi.emri==null || Personi.emri=='', Personi.email==null || Personi.email=='', Personi.mbeimri==null || Personi.mbeimri=='',Personi.mosha==null || Personi.mosha=='',Personi.qyteti==null || Personi.qyteti==''){
        alert('Ju lutem mbushni hapsirat e zbrazeta!');
        return false;
    }
   
    var vargu=[Personi.emri,Personi.mbeimri,Personi.email,Personi.mosha,Personi.qyteti];
    for(let i=0;i<vargu.length;i++){
        console.log(vargu[i]);
    }
    var vargu2=[];
    for(let i=0;i<vargu2.length;i++){
        vargu2[i]=Personi.emri;
    }
    for(let i=0;i<vargu2.length;i++){
        document.write(vargu2[i]);
    }
}

