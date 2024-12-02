// Настройка стиля страницы
document.body.style.cssText = `
    background-color: black;
    color: white;
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
`;

// Функция для запроса данных у пользователя
function getUserData() {
    let surname = prompt("Введите вашу фамилию:");
    let name = prompt("Введите ваше имя:");
    let age = prompt("Введите ваш возраст:");

    // Если пользователь не ввёл данные, запрашиваем повторно
    if (!surname || !name || !age) {
        alert("Все поля должны быть заполнены!");
        return getUserData();
    }

    return { surname, name, age };
}

// Функция для выбора регистра
function getCaseChoice() {
    let choice = prompt(
        "Вы хотите сделать текст большими или маленькими буквами?\n1. Большими\n2. Маленькими"
    );

    // Если выбор неверный, запрашиваем снова
    while (choice !== "1" && choice !== "2") {
        alert("Нужно выбрать 1 или 2!");
        choice = prompt("Выберите снова:\n1. Большими\n2. Маленькими");
    }

    return choice;
}

// Функция для отображения результата
function displayResult(data, choice) {
    const { surname, name, age } = data;

    // Изменяем регистр в зависимости от выбора
    const formattedSurname = choice === "1" ? surname.toUpperCase() : surname.toLowerCase();
    const formattedName = choice === "1" ? name.toUpperCase() : name.toLowerCase();

    // Создаём контейнер для вывода результата
    const resultDiv = document.createElement("div");
    resultDiv.style.cssText = `
        font-size: 18px;
        font-weight: bold;
        border: 2px solid white;
        padding: 15px;
        margin: 20px auto;
        width: fit-content;
    `;

    // Вставляем текст в контейнер
    resultDiv.innerHTML = `
        1. Имя: ${formattedName}<br>
        2. Фамилия: ${formattedSurname}<br>
        3. Возраст: ${age}
    `;

    // Добавляем контейнер на страницу
    document.body.appendChild(resultDiv);
}

// Основная функция
function main() {
    const userData = getUserData(); // Сбор данных
    const caseChoice = getCaseChoice(); // Выбор регистра
    displayResult(userData, caseChoice); // Отображение результата
}

// Запуск программы
main();





