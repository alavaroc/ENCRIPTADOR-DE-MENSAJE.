const d = document;
const textArea = d.querySelector(".form__input");
const imagenMuneco = d.querySelector(".Resultado__img"); 
const loader = d.querySelector(".loader");
const ResulTitle = d.querySelector(".Resultado__Title");
const ResulText = d.querySelector(".Resultado__Text");
const botonEncriptar = d.querySelector(".form__btn");
const botonDesencriptar = d.querySelectorAll(".form__btn");
const botoncopiar = d.querySelector(".result__btn");


const  llaves = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];

// para encriptar

function EncriptarMensaje(mensaje){
    let mensajeEncriptado ="";
    for(let i =0; i < mensaje.length; i++){
        let letra = mensaje [i];
        let encriptada = letra;
        for(let j = 0; j < llaves.length; j++){
            if (letra === llaves [j][0]){
                encriptada = llaves [j][1]; 
            break; 
            }
        }
        mensajeEncriptado += encriptada;
    }

    return mensajeEncriptado;
}

// para desencriptar

function DesencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves [i][1], "g");
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves [i][0]);
    }
    return mensajeDesencriptado;
}

// ocultar elementos dinamicamente

 textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none";
    loader.style.display = "grid";
    ResulTitle.textContent = "Obteniendo el mensaje";
    ResulText.textContent = "";
 });

//funcion boton encriptar

botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje =  textArea.value.toLowerCase();
    if(mensaje){
        let mensajeEncriptado = EncriptarMensaje(mensaje);
    ResulText.textContent = mensajeEncriptado;
    botoncopiar.classList.remove("hidden");
    ResulTitle.textContent =  "El mensaje es: ";
    loader.style.display = "none";
    }
    else{
        alert("Digita texto")
    }

 });
 botonDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje =textArea.value.toLowerCase();
    if(mensaje){
        let mensajeDesencriptado = DesencriptarMensaje(mensaje);
        ResulText.textContent = mensajeDesencriptado;
        botoncopiar.classList.remove("hidden");
        loader.style.display = "none";
    }
    else{
        alert("Digita texto")
    }
  

 });

 botoncopiar.addEventListener("click",()=>{
    let textoCopiado = ResulText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        imagenMuneco.style.display = "block";
        loadercargando.classList.add ("hidden");
        ResulTitle.textContent = "Texto copiado";
        botoncopiar.classList.add("hidden");
        ResulText.textContent ="";
        

    })
 });









