const btn_pegar = document.getElementById('btn_pegar');
const bin_0 = document.getElementById('btn_bin_0');
const bin_1 = document.getElementById('btn_bin_1');
const btn_convert = document.getElementById('btn_convertir');
const input_bin = document.getElementById('floatingInputGroup1 bin_xs');
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const btn_borrar = document.getElementById('button-addon2 borrar');
let alerta = 0;
let contador = 0;
let texto_papelera;
let timeoutId;

if(navigator.clipboard){
    console.log('Se puede utilizar pegar desde portapapeles');
    navigator.clipboard.readText()
        .then(texto => {
            texto_papelera = texto;
            //console.log('Texto: ', texto);
        })
        .catch(error => {
            console.log('Error: ', error);
        })
}
else{
    console.log('No se puede usar');
}

btn_pegar.addEventListener('click', (e) => {
    if(input_bin.value.length != 0){
        if(alerta == 0){
            const alert = (message, type) => {
                const wrapper = document.createElement('div');
                wrapper.innerHTML = [
                    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                    `   <div class="fw-bolder"><i class="fa-solid fa-triangle-exclamation"></i> ${message}</div>`,
                    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="reiniciar()"></button>',
                    '</div>'
                ].join('');
                alertPlaceholder.append(wrapper);
                alerta++;
            }
            alert('Debes vaciar el campo para poder pegar texto desde el portapapeles', 'warning');
            bin_0.setAttribute("disabled", "");
            bin_1.setAttribute("disabled", "");
            btn_pegar.setAttribute("disabled", "");
            btn_convert.setAttribute("disabled", "");
        }
    }
    else{
        if(texto_papelera.length < 9){
            input_bin.value = texto_papelera;
            //console.log('Si se puede pegar');
        }
        else{
            if(alerta == 0){
                const alert = (message, type) => {
                    const wrapper = document.createElement('div');
                    wrapper.innerHTML = [
                        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                        `   <div class="fw-bolder"><i class="fa-solid fa-triangle-exclamation"></i> ${message}</div>`,
                        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="reiniciar()"></button>',
                        '</div>'
                    ].join('');
                    alertPlaceholder.append(wrapper);
                    alerta++;
                }
                alert('Solo puedes pegar 8 dígitos binarios', 'warning');
                bin_0.setAttribute("disabled", "");
                bin_1.setAttribute("disabled", "");
                btn_pegar.setAttribute("disabled", "");
                btn_convert.setAttribute("disabled", "");
            }
            //console.log('No se puede pegar');
        }
    }
});

bin_0.addEventListener('click', (e) =>{
    bin_0.value = 0;
    ValidarBinarios(bin_0.value);
    //console.log(bin_0.value);
});

bin_1.addEventListener('click', (e) =>{
    bin_1.value = 1;
    ValidarBinarios(bin_1.value);
    //console.log(bin_1.value);
});

function ValidarBinarios(val){
    if(input_bin.value.length < 8){
        if(contador < 8){
            input_bin.value += val;
            //console.log(val);
            contador++;
        }
        else{
            console.log('Limite alcanzado (8)');
        }
    }
    else{
        if(alerta == 0){
            const alert = (message, type) => {
                const wrapper = document.createElement('div');
                wrapper.innerHTML = [
                    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                    `   <div class="fw-bolder"><i class="fa-solid fa-triangle-exclamation"></i> ${message}</div>`,
                    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="reiniciar()"></button>',
                    '</div>'
                ].join('');
                alertPlaceholder.append(wrapper);
                alerta++;;
            }
            alert('No puede agregar más de 8 dígitos binarios', 'warning');
            bin_0.setAttribute("disabled", "");
            bin_1.setAttribute("disabled", "");
            btn_pegar.setAttribute("disabled", "");
            //btn_convert.setAttribute("disabled", "");
        }
    }
}

btn_borrar.addEventListener('click', (e) =>{
    borrar();
});

btn_borrar.addEventListener('mousedown', (e) => {
    IniciarVaciar();
});

btn_borrar.addEventListener('mouseup', (e) => {
    detenerVaciar();
});

function reiniciar(){
    alerta = 0;
    bin_0.removeAttribute("disabled", "");
    bin_1.removeAttribute("disabled", "");
    btn_pegar.removeAttribute("disabled", "");
    btn_convert.removeAttribute("disabled", "");
}

function borrar(){
    let codigo = input_bin.value;
    let codigo_borrado = codigo.slice(0, -1);
    input_bin.value = codigo_borrado;
}

function IniciarVaciar(){
    timeoutId = setTimeout(vaciarTexto, 2500);
}

function detenerVaciar(){
    clearTimeout(timeoutId);
}

function vaciarTexto(){
    input_bin.value = '';
}