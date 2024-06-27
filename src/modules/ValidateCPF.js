export class ValidateCPF {
  constructor(sendedCpf) {
    this.sendedCpf = sendedCpf;
    this.cleanCpf = sendedCpf.replace(/\D+/g, "");
  }

  validate() {
    if (typeof this.cleanCpf === "undefined") return false;
    if (this.cleanCpf.length !== 11) return false;
    if (this.isSequence()) return false;

    const partialCpf = this.cleanCpf.slice(0, -2);
    const firstDigit = this.createDigit(partialCpf);
    const secondDigit = this.createDigit(partialCpf + firstDigit);
    const newCpf = partialCpf + firstDigit + secondDigit;
    return newCpf === this.cleanCpf;
  }

  isSequence() {
    const sequence = this.cleanCpf[0].repeat(this.cleanCpf.length);
    return sequence === this.cleanCpf;
  }

  static createDigit(partialCpf) {
    const cpfArray = Array.from(partialCpf);
    let regressive = cpfArray.length + 1;
    const total = cpfArray.reduce((acc, curr) => {
      acc += Number(curr) * regressive;
      regressive--;
      return acc;
    }, 0);

    const digit = 11 - (total % 11);
    return digit > 9 ? "0" : String(digit);
  }
}
