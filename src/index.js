module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let stack = [];

  // проходит по каждому символу
  for (let i = 0; i < arr.length; i++) {
    let currentSymbol = arr[i];

    let topElement = stack[stack.length - 1];
    // Проходит по каждому массиву конфигурации
    for (let j = 0; j < bracketsConfig.length; j++) {
      // Поиск нужной конфигурации скобок
      if (bracketsConfig[j].includes(currentSymbol)) {
        // Если 0 и 1 элемент массива не одинаковый
        if (bracketsConfig[j][0] !== bracketsConfig[j][1]) {
          if (currentSymbol === bracketsConfig[j][0]) {
            stack.push(currentSymbol);
            // break;
          } else if (currentSymbol === bracketsConfig[j][1]) {
            if (topElement === bracketsConfig[j][0]) {
              stack.pop();
            } else if (stack.length === 0) {
              return false;
            } else {
              return false;
            }
          }
        } else {
          // Если символы в паре одинаковые, то действует эта связка
          if (!stack.includes(bracketsConfig[j][0])) {
            stack.push(currentSymbol);
          } else if (topElement == bracketsConfig[j][0]) {
            stack.pop();
          } else {
            return false;
          }
        }
      }
    }
  }
  return stack.length === 0;
};
