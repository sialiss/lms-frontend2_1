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

// Проверяем, есть ли сохраненное имя при загрузке страницы
window.onload = function() {
    const savedUsername = getCookie("username");
    if (savedUsername) {
        document.getElementById("savedUsername").innerText = "Привет, " + savedUsername + "!";
    }
};


