const script = () => {
    const textField = document.querySelector(".text");
    const textInput = document.querySelector("#input");
    const btn = document.querySelector(".btn");

    const sendMessage = () => {
        const inputValue = textInput.value;
        const mins = getTwoMinElbyStr(inputValue);
        if (mins === false) {
            textField.innerHTML = `Ошибка! Недостаточное количество символов в строке. (Минимальное количество: 2)`
        } else {
            textField.innerHTML = `Сумма минимумов: ${Number(mins[0]) + Number(mins[1])}`
        }
    }

    textInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage()
        }
    });

    btn.addEventListener("click", sendMessage)

    function getTwoMinElbyStr(str) {
        str = str.split(",");
        str = str.filter(elem => {
            if ((elem !== "") && (elem !== "-") && ((Number(elem)) || (elem == 0))) {
                return true
            }
        })
        console.log(str)
        if (str.length === 0) {
            return false
        }
        if (str.length === 1) {
            return false
        }
        let min = Infinity;
        let min2 = Infinity;
        for (let i = 0; i < str.length; i++) {
            if (str[i] < min) {
                if (min <= min2) {
                    min2 = min;
                }
                min = str[i];
            } else if (str[i] < min2) {
                min2 = str[i]
            }
        }
        return [min, min2]
    }
}

script();


