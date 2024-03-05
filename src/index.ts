class ValidatorCPF {
  cpf: string;

  constructor(cpf: string | number) {
    this.cpf = String(cpf).trim();
  }

  #calcularDigitoVerificador(peso: number, cpf: number[]): number {
    const mod =
      cpf.reduce((acc, digit) => {
        acc += digit * peso;
        peso--;
        return acc;
      }, 0) % 11;
    return mod % 11 < 2 ? 0 : 11 - Math.abs(mod);
  }

  validateCpf(): boolean {
    if (
      !/^\d{11}$|^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(this.cpf) ||
      !/^(?!(\d)\1{10}$)\d{11}$/.test(this.cpf.replace(/[.-]/g, "")) ||
      /^12345678909$/.test(this.cpf.replace(/[.-]/g, ""))
    )
      return false;

    const cpfArrayNumbers = this.cpf.match(/\d/g)?.map(Number);

    if (!cpfArrayNumbers) return false; // Added null check here

    //Verifica os 2 ultimos digitos
    let d1 = this.#calcularDigitoVerificador(10, cpfArrayNumbers.slice(0, -2));
    let d2 = this.#calcularDigitoVerificador(11, cpfArrayNumbers.slice(0, -1));

    if (
      Number(cpfArrayNumbers.slice(-2)[0]) !== d1 ||
      Number(cpfArrayNumbers.slice(-2)[1]) !== d2
    )
      return false;

    return true;
  }
}

export default ValidatorCPF;
