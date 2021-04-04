const order = () => {
    const btn = document.getElementById('btn-check-order')
    const url = 'http://remont-tv-ufa.ru/result/order'
    const form = $("#check-order-form");
    const result_container = $("#check-order-result")

    form.keydown(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    })

    btn.addEventListener('click', () => {
        $.post({
            url: url,
            data: form.serialize(),
            success: (message) => { success(message) },
            error: () => { error() }
        })
    })

    const success = (message) => {
        result_container.find('span').html(message);
        result_container.removeClass('d-none')
    }

    const error = () => {
        result_container.find('span').html('ошибка отправки запроса');
        result_container.removeClass('d-none')
    }
}

order();