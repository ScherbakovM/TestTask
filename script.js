document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hideme');

    function handleScroll() {
        const windowBottom = window.scrollY + window.innerHeight;

        hiddenElements.forEach(el => {
            const elementBottom = el.offsetTop + el.offsetHeight;

            if (windowBottom > elementBottom) {
                el.classList.add('showme');
            } else {
                el.classList.remove('showme');
            }
        });
    }

    // Debounce для оптимизации
    let timeout;
    function debouncedHandleScroll() {
        clearTimeout(timeout);
        timeout = setTimeout(handleScroll, 10);
    }

    // Инициализация
    handleScroll();

    window.addEventListener('scroll', debouncedHandleScroll);
    window.addEventListener('resize', debouncedHandleScroll);
});


