// Создайте веб - страницу, на которой пользователь может ввести свое имя.
// При нажатии кнопки "Сохранить" сохраните имя пользователя в cookies
// и отобразите его на странице при следующем посещении.

const btn_save = document.getElementById("save_username")
btn_save.addEventListener("click", saveUsername)

// Функция для сохранения имени в cookies
function saveUsername() {
    const username = document.getElementById("usernameInput").value;
    document.cookie = "username=" + username + "; expires=Fri, 31 Dec 9999 23:59:59 GMT"; // Устанавливаем куки на очень долгий срок
    document.getElementById("savedUsername").innerText = "Привет, " + username + "!";
}

// Функция для получения значения куки по имени
function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (const i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Напишите скрипт, который будет отслеживать,
// сколько раз пользователь посетил Вашу веб - страницу.
// Используйте localStorage для хранения этой информации и отображайте количество посещений на странице.

// Функция для увеличения счетчика посещений и обновления на странице
function updateVisitCount() {
    if (localStorage.visitCount) {
        localStorage.visitCount = Number(localStorage.visitCount) + 1;
    } else {
        localStorage.visitCount = 1;
    }
    document.getElementById("visitCount").textContent = localStorage.visitCount;
}

// Проверка была ли установлена запись о посещении при загрузке страницы и есть ли сохраненное имя
window.onload = function () {
    const savedUsername = getCookie("username");
    if (savedUsername) {
        document.getElementById("savedUsername").innerText = "Привет, " + savedUsername + "!";
    }

    if (!localStorage.visitCount) {
        localStorage.visitCount = 0;
    }
    updateVisitCount();
};
