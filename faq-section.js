document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.faq-accordion__item');

    items.forEach((item) => {
        const button = item.querySelector('.faq-accordion__question');
        button.addEventListener('click', function () {
            const isActive = item.classList.contains('faq-accordion__item--active');
            const answer = item.querySelector('.faq-accordion__answer');
            const icon = item.querySelector('.faq-accordion__icon');

            if (isActive) {
                item.classList.remove('faq-accordion__item--active');
                button.setAttribute('aria-expanded', 'false');
                if (answer) answer.style.display = 'none';
                if (icon) {
                    icon.textContent = '+';
                    icon.classList.remove('faq-accordion__icon--active');
                }
            } else {
                items.forEach((el) => {
                    el.classList.remove('faq-accordion__item--active');
                    el.querySelector('.faq-accordion__question').setAttribute('aria-expanded', 'false');
                    const ans = el.querySelector('.faq-accordion__answer');
                    if (ans) ans.style.display = 'none';
                    const ic = el.querySelector('.faq-accordion__icon');
                    if (ic) {
                        ic.textContent = '+';
                        ic.classList.remove('faq-accordion__icon--active');
                    }
                });
                item.classList.add('faq-accordion__item--active');
                button.setAttribute('aria-expanded', 'true');
                if (answer) answer.style.display = 'block';
                if (icon) {
                    icon.textContent = '−';
                    icon.classList.add('faq-accordion__icon--active');
                }
            }
        });
    });
});