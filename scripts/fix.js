// fix.js - полная блокировка перезагрузки
(function() {
    // Перехватываем все клики на странице
    document.addEventListener('click', function(event) {
        const target = event.target.closest('button');
        
        if (target) {
            // Проверяем, не наша ли это кнопка модального окна
            if (target.classList.contains('button__save')) {
                event.preventDefault();
                event.stopPropagation();
                const modal = document.getElementById('save__modal');
                if (modal) modal.showModal();
                return false;
            }
            
            if (target.classList.contains('button__OK')) {
                event.preventDefault();
                event.stopPropagation();
                const modal = document.getElementById('save__modal');
                if (modal) modal.close();
                return false;
            }
        }
    }, true); // true - перехватываем на фазе захвата
    
    // Удаляем все onclick атрибуты у кнопок
    const buttonsWithOnclick = document.querySelectorAll('[onclick]');
    buttonsWithOnclick.forEach(btn => {
        btn.removeAttribute('onclick');
    });
})();
