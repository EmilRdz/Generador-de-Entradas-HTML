/*Código para crear plantilla HTML y enviar 
resultado a caja de texto*/

//Definir variables
let Capitulo = document.getElementById("cap");

let Especial = document.getElementById("esp");

let OVA = document.getElementById("ova");

let Extra = document.getElementById("ext");

let Promo = document.getElementById("etc");

let nombre = document.getElementById("name1");
let nombre2 = document.getElementById("name2");

const resultado = document.getElementById("res");

let arrayList = [...document.getElementsByClassName("vinculo")];
const btn_submit = document.getElementById("submit");

//Definir estilos
const style = `
<style>

p{
    display: flex;
    font-size: 20px;
    color: white;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
}

.contenedor{
width: 25%;
margin: auto;
display: flex;
height: 50px;
border-radius: 5px;



justify-content: center;
align-items: center;
}

.item{
text-decoration: none;
font-size: 20px;
color: white;
}

.item:hover{
color: blue;
}

img{
    max-width: 30px;
}

</style>
`;
// se usa aqui
function returnArray(textArea){
    if(textArea.value != undefined && textArea.value != ""){
        // verifica si hay algo escrito y si si tiene lo retorna en forma de array
        return textArea.value.split("\n");
    }else{
        // si no, retorna null
        return null
    }
} 
let globalArray = []
function insertArrayinArray(array){
    globalArray.push(array)
}


let htmlouput = ``;
let links = ``
let contador = 1
function setHtml(){
    for(let i in globalArray){
        for(let j in globalArray[i]){
            if (globalArray[i][j] != null){
            
                for(let k in globalArray[i][j]){
                    htmlouput+=`
                    <div class="contenedor">
                        <p>
                            <a class="item" href="${globalArray[i][j][k]}">${nombre.value} ${j} ${contador}</a> 
                            <a class="item" href="${globalArray[i][j][k]}">
                                <img src="assets/images/descarga-directa.svg" alt="">
                            </a>
                        </p>    
                    </div>`
                    links += globalArray[i][j][k]
                    contador ++
               }
               contador =1
            }
        }
    }
}



btn_submit.addEventListener("click", (e) => {
  e.preventDefault();

  Capitulo = {"Capitulo" : returnArray(Capitulo)}
  Especial = {"Especial": returnArray(Especial)}
  OVA = {"OVA" : returnArray(OVA)}
  Extra ={"Extra" :  returnArray(Extra)}
  Promo = {"Promo":  returnArray(Promo)}

  // ahora esstoy probando eso
    insertArrayinArray(Capitulo)
    insertArrayinArray(Especial)
    insertArrayinArray(OVA)
    insertArrayinArray(Extra)
    insertArrayinArray(Promo)

    setHtml()


  let HTMLcode = `<!DOCTYPE html>
    <html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <title>General Discord GX</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel="stylesheet" href="assets/css/styles.css">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.3.0/font-awesome-animation.min.css">
    </head>
    
    <body style="background-color: #3d4149;">
    ${style}
    <div style="text-align: center;">
    
    <h1 style="color: #a7a7a7; font-family: arial;">${nombre2.value}</h1>
    
        ${htmlouput}
    
    <textarea id="res" style="color: transparent; background-color: transparent; border-color: transparent;"></textare>
    
    <script>
    </script>
    
    </div>
    
    </body>
    </html>`;

resultado.value = HTMLcode;

document.getElementById('copy').addEventListener('click', (e)=>{
      /* Select the text field */
    resultado.select();
    resultado.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
    document.execCommand("copy");
})



});
