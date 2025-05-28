import { Notification } from "./notifications.js"

let internalError = 0

export function resetError() {
  internalError = 0
}

export function hasError() {
  return internalError !== 0
}

function setError(flag: boolean) {
  if (flag) internalError = 1
}

export function verifyInputOnlyLetters(input: HTMLInputElement, minCharacters: number, maxCharacters: number) {
  const trimmed = input.value.trim()
  let localError = false

  if (trimmed.length === 0) {
    new Notification("Este campo es obligatorio", "error", input)
    localError = true
  } else if (trimmed.length < minCharacters || trimmed.length > maxCharacters) {
    new Notification(`Debe introducir entre ${minCharacters} y ${maxCharacters} caracteres`, "error", input)
    localError = true
  } else if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
    new Notification("Error: No es posible ingresar símbolos o números", "error", input)
    localError = true
  }

  setError(localError)
  return !localError
}

export function verifyInputOnlyNumbers(input: HTMLInputElement, minCharacters: number, maxCharacters: number) {
  const trimmed = input.value.trim()
  let localError = false

  if (trimmed.length === 0) {
    new Notification("Este campo es obligatorio", "error", input)
    localError = true
  } else if (trimmed.length < minCharacters || trimmed.length > maxCharacters) {
    new Notification(`Debe introducir entre ${minCharacters} y ${maxCharacters} caracteres`, "error", input)
    localError = true
  } else if (!/^\d+$/.test(trimmed)) {
    new Notification("Error: Ingresar solo números", "error", input)
    localError = true
  }

  setError(localError)
  return !localError
}

export function verifyInputWithSimbols(input: HTMLInputElement, minCharacters: number, maxCharacters: number) {
  const trimmed = input.value.trim()
  let localError = false

  if (trimmed.length === 0) {
    new Notification("Este campo es obligatorio", "error", input)
    localError = true
  } else if (trimmed.length < minCharacters || trimmed.length > maxCharacters) {
    new Notification(`Debe introducir entre ${minCharacters} y ${maxCharacters} caracteres`, "error", input)
    localError = true
  } else if (!/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(trimmed)) {
    new Notification("Error: Ha ingresado un símbolo no permitido", "error", input)
    localError = true
  }

  setError(localError)
  return !localError
}

export function verifyInputEmail(input: HTMLInputElement, minCharacters: number, maxCharacters: number) {
  const trimmed = input.value.trim()
  let localError = false

  if (trimmed.length === 0) {
    new Notification("Este campo es obligatorio", "error", input)
    localError = true
  } else if (trimmed.length < minCharacters || trimmed.length > maxCharacters) {
    new Notification(`Debe introducir entre ${minCharacters} y ${maxCharacters} caracteres`, "error", input)
    localError = true
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    new Notification("Ingrese un correo electrónico válido", "error", input)
    localError = true
  }

  setError(localError)
  return !localError
}

export function verifyInputDate(input: HTMLInputElement) {
  let localError = false
  if (!input.value) {
    new Notification("Este campo es obligatorio", "error", input)
    localError = true
  }

  setError(localError)
  return !localError
}
