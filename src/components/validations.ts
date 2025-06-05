import {Notification} from "../components/notifications.js"

export function checkInputLetters(target:HTMLInputElement,min:number,max:number){
    const value = target.value.trim()
    
    if (value.length < min || value.length > max) {
        new Notification(`Debe tener entre ${min} y ${max} caracteres`, 'error', target)
        return 1
    }
    else{
        if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(value)) {
            new Notification("Solo se pueden introducir letras",'error',target)
            return 1
        }
        else{
            return 0
        }
    }
    
}

export function checkInputNumbers(target:HTMLInputElement,min:number,max:number){
    const value = target.value.trim()
    
    if (value.length < min || value.length > max) {
        new Notification(`Debe tener entre ${min} y ${max} caracteres`, 'error', target)
        return 1
    }
    else{
        if (!/^\d+$/.test(value)) {
            new Notification("El DNI debe contener solo números", 'error', target)
            return 1
        }
        else{
            return 0
        }
    }
}

export function checkInputPassword(target:HTMLInputElement,min:number,max:number){
    const value = target.value.trim()
    
    if (value.length < min || value.length > max) {
        new Notification(`Debe tener entre ${min} y ${max} caracteres`, 'error', target)
        return 1
    }
    else{
        if (!/^[A-Za-z\d\W_]+$/.test(value)) {
            new Notification("La contraseña solo puede contener letras, números y símbolos", 'error', target)
            return 1
        }
        else{
            return 0
        }
    }
}

export function checkInputEmail(target:HTMLInputElement,min:number,max:number){
    const value = target.value.trim()
    
    if (value.length < min || value.length > max) {
        new Notification(`Debe tener entre ${min} y ${max} caracteres`, 'error', target)
        return 1
    }
    else{
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            new Notification("Debe ingresar un email válido", 'error', target)
            return 1
        }
        else{
            return 0
        }
    }
}

export function checkInputDate(target:HTMLInputElement){
    const value = target.value.trim()
    if (!value) {
        new Notification("Debe seleccionar una fecha", 'error', target)
        return 1
    }
    else{
        return 0
    }
}

export function checkInputSelect(target:HTMLSelectElement){
    if (!target.value) {
    new Notification("Debe seleccionar un curso", 'error', target)
    return 1
    }
    else{
        return 0
    }
}
