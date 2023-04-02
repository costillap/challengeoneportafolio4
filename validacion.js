//Haz tú validación en javascript acá
const inputs = document.querySelectorAll("input, textarea");



inputs.forEach((input) =>{
    input.addEventListener("blur", (input) =>{
        valida(input.target);
    });
 });

 function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }
 };

 const validadores = {
    nombre: (input) => validarNonbre(input),
    email: (input) => validarEmail(input),
    asunto: (input) => validarAsunto(input),
    textarea: (input) => validarTextArea(input)
 }

 function validarNonbre(input){
    if (input.value.length < 5){
        document.getElementById("span__Name").classList.remove("span--disable");
        
    }else{
        document.getElementById("span__Name").classList.add("span--disable");
    }
}
 function validarEmail(input){
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(input.value)){
        document.getElementById("span__Email").classList.remove("span--disable");
    }else{
        document.getElementById("span__Email").classList.add("span--disable");
    }
 }
 function validarAsunto(input){
    if (input.value.length < 5){
        document.getElementById("span__Asunto").classList.remove("span--disable");
        
    }else{
        document.getElementById("span__Asunto").classList.add("span--disable");
    }
 }
 function validarTextArea(input){
    if (input.value.length<25){
        document.getElementById("span__TextArea").classList.remove("span--disable");
    }else{
        document.getElementById("span__TextArea").classList.add("span--disable");
    }
 }

 fc.addEventListener("submit", (e) =>{
    e.preventDefault()
    Swal.fire({
        
        icon: 'success',
        title: 'Perfecto, tu formulario fue enviado',
        showConfirmButton: true,
    });
    //solo borro los inputs, no los guardo en ningun lado por que por ahora solo vi hasta aqui que hacer con los datos
    inputs.forEach((input)=>{
        input.value = "";
    })
 })