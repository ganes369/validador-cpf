### Validador de CPF

Valida strings e números de CPF.

### USE

`const { validatorCPF } = require("validador-formatt-cpf");

console.log(validatorCPF("06068102343", true));
`

ou

`
import { validatorCPF } from "validador-formatt-cpf";

console.log(validatorCPF("06068102343", true));
`

`
validCpf('00000000000') // false

validCpf('000.000.000-00') // false

validCpf('148.305.720-86', false) // 14830572086

validCpf('14830572086', true) // 148.305.720-86

validCpf('14830572086') // true`
