import { ValidateCPF } from "./ValidateCPF";
export class GenerateCPF {
  rand(min = 1 ** 9, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  maskCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }

  generate() {
    const nonDigitsCPF = this.rand();
    const firstDigit = ValidateCPF.createDigit(nonDigitsCPF);
    const secondDigit = ValidateCPF.createDigit(nonDigitsCPF + firstDigit);
    const newCPF = nonDigitsCPF + firstDigit + secondDigit;
    return this.maskCPF(newCPF);
  }
}
