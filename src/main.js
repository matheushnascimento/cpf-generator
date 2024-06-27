import { GenerateCPF } from "./modules/GenerateCPF";
import "./assets/css/styles.css";

(function () {
  const generateCPF = new GenerateCPF();
  const p = document.querySelector("p");
  const icon = document.querySelector("i");
  p.innerHTML = generateCPF.generate();

  icon.onclick = () => {
    copyOnClick(p.textContent);
  };
})();

function copyOnClick(p) {
  navigator.clipboard.writeText(p);
  alert("CPF Copiado para a área de transferência");
}
