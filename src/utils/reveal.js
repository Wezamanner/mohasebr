export default function reveal() {

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: .2
        }

    );

    elements.forEach(element => observer.observe(element));

}