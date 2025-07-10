document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.querySelector('#scrollToTopBtn');

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 400) {
            scrollToTopBtn.classList.add('active');
        } else {
            scrollToTopBtn.classList.remove('active');
        }
    });
})