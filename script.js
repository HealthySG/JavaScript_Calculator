document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const buttonText = button.textContent;

            if (buttonText === "C") {
                display.value = "";
            } else if (buttonText === "=") {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = "Error";
                }
            } else {
                display.value += buttonText;
            }
        });
    });
});
