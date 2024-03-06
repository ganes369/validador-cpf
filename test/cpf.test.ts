import "jest";

import { validatorCPF } from "../src/index";

describe("new ValidatorCPF", () => {
  test("números de listas negras", () => {
    expect(validatorCPF("00000000000")).toBeFalsy();
    expect(validatorCPF("11111111111")).toBeFalsy();
    expect(validatorCPF("22222222222")).toBeFalsy();
    expect(validatorCPF("33333333333")).toBeFalsy();
    expect(validatorCPF("44444444444")).toBeFalsy();
    expect(validatorCPF("55555555555")).toBeFalsy();
    expect(validatorCPF("66666666666")).toBeFalsy();
    expect(validatorCPF("77777777777")).toBeFalsy();
    expect(validatorCPF("88888888888")).toBeFalsy();
    expect(validatorCPF("99999999999")).toBeFalsy();
    expect(validatorCPF("12345678909")).toBeFalsy();
    expect(validatorCPF("123.456.789-09")).toBeFalsy();
  });

  test("rejeita valores falsos", () => {
    expect(validatorCPF("")).toBeFalsy();
    expect(validatorCPF(null as any)).toBeFalsy();
    expect(validatorCPF(undefined as any)).toBeFalsy();
  });

  test("valida strings formatadas", () => {
    expect(validatorCPF("295.379.955-93")).toBeTruthy();
  });

  test("valida strings não formatadas", () => {
    expect(validatorCPF("29537995593")).toBeTruthy();
  });

  test("não valida strings de caracteres confusas", () => {
    expect(validatorCPF("295$379\n955...93")).toBeFalsy();
  });

  test("valida cadeias de caracteres", () => {
    expect(validatorCPF("295$379\n955...93")).toBeFalsy();
    expect(validatorCPF("295.379.955-93")).toBeTruthy();
    expect(validatorCPF("29537995593")).toBeTruthy();
  });
});
