document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const el = entry.target;

            if (entry.isIntersecting) {
                // Aparece subiendo
                el.classList.add("visible");
                el.classList.remove("hidden-up", "hidden-down");
            } else {
                const bounding = entry.boundingClientRect;

                if (bounding.top < 0) {
                    // Se ha ido por arriba → desaparece subiendo
                    el.classList.remove("visible");
                    el.classList.add("hidden-down");
                } else {
                    // Se ha ido por abajo → desaparece bajando
                    el.classList.remove("visible");
                    el.classList.add("hidden-up");
                }
            }
        });
    }, {
        threshold: 0.2
    });

    reveals.forEach(el => observer.observe(el));
});
