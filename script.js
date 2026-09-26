// Находим на странице нужные элементы по их id
const code = document.getElementById("crosshair-code");
const button = document.getElementById("copy-button");

// Что делать, когда на кнопку нажали
button.addEventListener("click", async () => {
    try {
        // Кладём текст кода в буфер обмена (как Ctrl+C)
        await navigator.clipboard.writeText(code.textContent);

        // Показываем, что всё получилось
        button.textContent = "✓ Скопировано!";
        button.classList.add("copied");
    } catch (error) {
        // Если браузер не дал скопировать, говорим об этом честно
        button.textContent = "Не удалось, скопируй вручную";
    }

    // Через 2 секунды возвращаем кнопку в обычный вид
    setTimeout(() => {
        button.textContent = "Скопировать прицел";
        button.classList.remove("copied");
    }, 2000);
});
