### Validador de CPF

Valida strings e números de CPF.

### USE

`const ValideCpf = require('@jssousa/validador-cpf').default;

import ValideCpf from '@jssousa/validador-cpf'`


`
new ValidCpf('00000000000').validateCpf() // false

new ValidCpf('000.000.000-00').validateCpf() // false

new ValidCpf('148.305.720-86').validateCpf() // true

new ValidCpf('14830572086').validateCpf() // true`
