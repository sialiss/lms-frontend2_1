import { makeElement } from "../library/makeElement.js"

// Для этого создайте 2 массива.
// В каждом должно быть по 10 объектов, содержащих фамилии студентов группы,
// прошедших тестирование по какой - то дисциплине(например, «Основы Frontend - разработки»),
// а также результат тестирования в баллах(от 0 до 100).

function print_group(container, group) {
    const group_container = makeElement("div", { "class": "group_container" })
    container.append(group_container)

    group.forEach(student => {
        const student_container = makeElement("p", student[0], " ", student[1])
        group_container.append(student_container)
    });
}

const people_container = document.getElementById("people_container")

const first_group = [["Иванов", 85], ["Петров", 72], ["Смирнова", 90], ["Козлов", 68], ["Федорова", 78], ["Морозов", 95],
    ["Кузнецов", 60], ["Васильева", 58], ["Соколов", 75], ["Новиков", 82]]

const second_group = [["Макарова", 61], ["Зайцев", 70], ["Павлов", 79], ["Семенова", 83], ["Григорьев", 65], ["Богданова", 49],
    ["Алексеев", 77], ["Куликова", 93], ["Тимофеев", 73], ["Орлова", 87]]

print_group(people_container, first_group)
print_group(people_container, second_group)

// Требуется в каждом из массивов выбрать тех, кто получил не менее 80 баллов и вывести сообщение о том,
// сколько в каждой группе отобрано студентов.
// Из двух полученных в результате фильтрации массивов необходимо сформировать один массив
// и вывести сообщение о том, сколько всего студентов набрали от 80 до 100 баллов.

// Затем вывести, например, в модальных окнах фамилии отобранных студентов и рядом
// указать количество набранных этим студентом баллов.В завершение вывести сообщение
// «Средний балл отобранных на работу студентов: (указать результат)».

const btn_check = document.getElementById("btn_check")
btn_check.addEventListener("click", show_results)

function check_success(group) {
    const successed = group.filter((student) => student[1] >= 80)
    return successed
}

function show_results() {
    const first_group_successed = check_success(first_group)
    const second_group_successed = check_success(second_group)
    alert("Отобрано студентов в первой группе: " + first_group_successed.length +
        "\nОтобрано студентов во второй группе: " + second_group_successed.length)
    const all_successed = first_group_successed.concat(second_group_successed)
    alert("Прошедшие студенты:\n" + all_successed.join("\n"))
    const initialValue = 0;
    alert("Средний балл отобранных на работу студентов: " + Math.round(all_successed.reduce(
        (accumulator, currentValue) => accumulator + currentValue[1], initialValue)/all_successed.length))
}