function calcularDigitoVerificador(peso: number, cpf: number[]): number {
  const mod =
    cpf.reduce((acc, digit) => {
      acc += digit * peso;
      peso--;
      return acc;
    }, 0) % 11;
  return mod % 11 < 2 ? 0 : 11 - Math.abs(mod);
}
const blackList = (): string[] => {
  const arr = Array.from({ length: 12 }, (_, i) => String(`${i}`).repeat(11));
  arr.push("12345678909");
  return arr;
};
const formattCPF = (formatt: boolean, cpf: string): string => {
  return formatt
    ? cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4")
    : cpf.replace(/[.-]/g, "");
};
const validatorCPF = (
  cpf: string | number,
  formatt?: boolean
): string | boolean => {
  const auxCPF = String(cpf);
  if (
    !/^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(auxCPF) ||
    blackList().includes(auxCPF.replace(/[.-]/g, ""))
  )
    return false;

  const cpfArrayNumbers = auxCPF.match(/\d/g)?.map(Number) ?? [];

  //Verifica os 2 ultimos digitos
  let d1 = calcularDigitoVerificador(10, cpfArrayNumbers.slice(0, -2));
  let d2 = calcularDigitoVerificador(11, cpfArrayNumbers.slice(0, -1));

  if (
    Number(cpfArrayNumbers.slice(-2)[0]) !== d1 ||
    Number(cpfArrayNumbers.slice(-2)[1]) !== d2
  )
    return false;
  if (formatt === undefined) return true;
  return formattCPF(formatt, auxCPF);
};

export { validatorCPF };
