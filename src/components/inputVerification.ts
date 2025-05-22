import {Notification} from "./notifications.js"
export let error = 0

export function verifyInputOnlyLetters (input:HTMLInputElement,minCharacters:number,maxCharacters:number){
    if(input.value.trim().length !== 0){
    if(input.value.length >= minCharacters && input.value.length <= maxCharacters){
        if(!/^[a-zA-Z\s]+$/.test(input.value)) {
        new Notification("Error: No es posible ingresar simbolos o números","error",input)
        return error = 1
        }
    }else{
        new Notification(`Debe introducir entre ${minCharacters} y ${maxCharacters} caracteres`,"error",input)
        return error = 1
    }
    }else{
    new Notification("Este campo de obligatorio","error",input)
    return error = 1
    }
}
      
export function verifyInputOnlyNumbers (input:HTMLInputElement,minCharacters:number,maxCharacters:number){
if(input.value.trim().length !== 0){
    if(input.value.length >= minCharacters && input.value.length <= maxCharacters){
    if(!/^\d+$/.test(input.value)) {
        new Notification("Error: Ingresar solo números","error",input)
        return error = 1
    }
    }else{
    new Notification(`Debe introducir entre ${minCharacters} y ${maxCharacters} caracteres`,"error",input)
    return error = 1
    }
}else{
    new Notification("Este campo de obligatorio","error",input)
    return error = 1
}
}

export function verifyInputWithSimbols (input:HTMLInputElement,minCharacters:number,maxCharacters:number){
if(input.value.trim().length !== 0){
    if(input.value.length >= minCharacters && input.value.length <= maxCharacters){
    if(!/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(input.value)) {
    new Notification("Error: A ingresado un simbolo no permitido","error",input)
    return error = 1
    }
    }
    else{
    new Notification(`Debe introducir entre ${minCharacters} y ${maxCharacters} caracteres`,"error",input)
    return error = 1
    }
}else{
    new Notification("Este campo de obligatorio","error",input)
    return error = 1
}
}

export function verifyInputEmail (input:HTMLInputElement,minCharacters:number,maxCharacters:number){
if(input.value.trim().length !== 0){
    if(input.value.length >= minCharacters && input.value.length <= maxCharacters){
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    new Notification("Ingrese un correo electrónico valido","error",input)
    return error = 1
    }
    }
    else{
    new Notification(`Debe introducir entre ${minCharacters} y ${maxCharacters} caracteres`,"error",input)
    return error = 1
    }
}else{
    new Notification("Este campo de obligatorio","error",input)
    return error = 1
}
}

export function verifyInputDate (input:HTMLInputElement){
if(!input.value){
    new Notification("Este campo es obligatorio","error",input)
    return error = 1
}
}