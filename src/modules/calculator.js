import {validate} from "./helpers.js";

const calculator = () => {
  const calculator = document.getElementById('calc');
  const calcType = calculator.querySelector('#calc-type');
  const calcTypeMaterial = calculator.querySelector('#calc-type-material');
  const calcArea = calculator.querySelector('#calc-area');
  const total = calculator.querySelector('#calc-total');

  let totalSum = 0;

  validate([calcArea]);

  const calculateTotal = (area, type, materialType) => {
    if (!materialType) materialType = 1;
    if (area && type) {
      totalSum = (area * type * materialType).toFixed(2);
      total.value = totalSum;
    }
  }

  calculator.addEventListener('input', (e) => {
    if (e.target === calcType || e.target === calcTypeMaterial || e.target === calcArea) {
      calculateTotal(+calcArea.value, +calcType.value, +calcTypeMaterial.value)
    }
  })
}

export default calculator;