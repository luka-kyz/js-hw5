// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch
// Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.
// Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.
// Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".
// Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.


const drink = prompt("Введите какой напиток вы хотите"); 

switch (drink) {
    case "кофе":
        alert("вы выбрали Каву")
    console.log("кофе");
    break;
  case "Чай":
        console.log("чай");
        alert("вы выбрали Чай")
    break;
  case "Сік":
        console.log("сок");
        alert("вы выбрали сок")
    break;
  default:
        console.log("вы выбрали не тот напиток");
        alert("вы не правильно ввел название напитка")
}



const day = prompt("введите какой сейчас день недели"); 

if (day === "суббота" || day === "воскресенье") {
    console.log("выходной");
    alert("это выходной день")
} else if (
  day === "понедельник" ||
  day === "вторник" ||
  day === "среда" ||
  day === "четверг" ||
  day === "пятница"
) {
    console.log("рабрчий день");
    alert("Это рабочий день")
} else {
    console.log("Не правильный день");
    alert("Вы выбрали не правильный день")
    
}



const month = Number(prompt("введите номер месяца")); 

switch (month) {
  case 12:
  case 1:
  case 2:
        console.log("зима");
        alert("это месяц зимы")
    break;
  case 3:
  case 4:
  case 5:
        console.log("весна");
        alert("это месяц весны")
    break;
  case 6:
  case 7:
  case 8:
        console.log("лето");
        alert("это месяц лета")
    break;
  case 9:
  case 10:
  case 11:
        console.log("осень");
        alert("это месяц осени")
    break;
  default:
        console.log("не правильно");
        alert("не правильный номер")
}



const color = prompt("введите какой цвет светофора"); 

switch (color) {
  case "красный":
        console.log("Стоп");
        alert("СТОП!!!!")
    break;
  case "зеленый":
        console.log("Идти");
        alert("ИДИТЕ!!!!")
    break;
  case "желтый":
        console.log("ждаь");
        alert("ЖДИТЕ!!!!")
    break;
  default:
        console.log("не правильный");
        alert("не правильно")
}


let num1 = 10;
let num2 = 5;
let operator = "/"; 

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
        console.log("Результат:", result);
        alert(`Результат: ${result}`)
    break;
  case "-":
    result = num1 - num2;
        console.log("Результат:", result);
                alert(`Результат: ${result}`)
    break;
  case "*":
    result = num1 * num2;
        console.log("Результат:", result);
                alert(`Результат: ${result}`)
    break;
  case "/":
    if (num2 === 0) {
        console.log("Ошибка: нельзя делить на 0");
                alert(`Нельзя делить на 0`)
    } else {
      result = num1 / num2;
        console.log("Результат:", result);
                alert(`Результат: ${result}`)
    }
    break;
  default:
        console.log("Не правильно");
                alert(`Не правильно`)
}
