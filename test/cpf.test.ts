import "jest";

import ValidatorCPF from "../src/index";

describe("new ValidatorCPF", () => {
  test("números de listas negras", () => {
    expect(new ValidatorCPF("00000000000").validateCpf()).toBeFalsy();
    expect(new ValidatorCPF("11111111111").validateCpf()).toBeFalsy();
    expect(new ValidatorCPF("22222222222").validateCpf()).toBeFalsy();
    expect(new ValidatorCPF("33333333333").validateCpf()).toBeFalsy();
    expect(new ValidatorCPF("44444444444").validateCpf()).toBeFalsy();
    expect(new ValidatorCPF("55555555555").validateCpf()).toBeFalsy();
    expect(new ValidatorCPF("66666666666").validateCpf()).toBeFalsy();
    expect(new ValidatorCPF("77777777777").validateCpf()).toBeFalsy();
    expect(new ValidatorCPF("88888888888").validateCpf()).toBeFalsy();
    expect(new ValidatorCPF("99999999999").validateCpf()).toBeFalsy();
    expect(new ValidatorCPF("12345678909").validateCpf()).toBeFalsy();
    expect(new ValidatorCPF("123.456.789-09").validateCpf()).toBeFalsy();
  });

  test("rejeita valores falsos", () => {
    expect(new ValidatorCPF("").validateCpf()).toBeFalsy();
    expect(new ValidatorCPF(null as any).validateCpf()).toBeFalsy();
    expect(new ValidatorCPF(undefined as any).validateCpf()).toBeFalsy();
  });

  test("valida strings formatadas", () => {
    expect(new ValidatorCPF("295.379.955-93")).toBeTruthy();
  });

  test("valida strings não formatadas", () => {
    expect(new ValidatorCPF("29537995593")).toBeTruthy();
  });

  test("não valida strings de caracteres confusas", () => {
    expect(new ValidatorCPF("295$379\n955...93").validateCpf()).toBeFalsy();
  });

  test("valida cadeias de caracteres", () => {
    expect(new ValidatorCPF("295$379\n955...93").validateCpf()).toBeFalsy();
    expect(new ValidatorCPF("295.379.955-93").validateCpf()).toBeTruthy();
    expect(new ValidatorCPF("29537995593").validateCpf()).toBeTruthy();
  });
});
