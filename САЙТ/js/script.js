document.addEventListener("DOMContentLoaded", function () {
    // Переход на страницу входа
    document.getElementById("login-btn").addEventListener("click", function() {
        window.location.href = "/section/login.html";
    });

    // Переход на страницу регистрации
    document.getElementById("register-btn").addEventListener("click", function() {
        window.location.href = "/section/register.html";
    });

    // Подключение секций (header, footer)
    const sections = ["header", "footer"];
    sections.forEach(section => {
        fetch(`/section/${section}.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById(section).innerHTML = data;
            })
            .catch(error => console.error(`Ошибка загрузки ${section}:`, error));
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = ["header", "footer" ];

    sections.forEach(section => {
        fetch(`section/${section}.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById(section).innerHTML = data;
            });
    });
});
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public")); // Делаем папку "public" доступной

app.get("/section/:page", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "section", req.params.page));
});

app.listen(5500, () => {
    console.log("Сервер работает на http://127.0.0.1:5500");
});