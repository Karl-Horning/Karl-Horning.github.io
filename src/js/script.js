/**
 * Updates the copyright information in the specified HTML element with the current year.
 * The copyright format is "&copy; 2024-currentYear Karl Horning".
 */
(() => {
    /**
     * @function updateCopyrightInfo
     * @description Updates the copyright information dynamically based on the current year.
     */
    const updateCopyrightInfo = () => {
        // Create a new Date object
        const currentDate = new Date();

        // Get the current year
        const currentYear = currentDate.getFullYear();

        // Copyright text
        let copyrightText = `&copy; 2024-${currentYear} Karl Horning`;

        if (currentYear === 2024) {
            copyrightText = `&copy; ${currentYear} Karl Horning`;
        }

        // Update copyright info only if the element is found
        const copyrightElement = document.getElementById("copyright-info");

        if (copyrightElement) {
            copyrightElement.innerHTML = copyrightText;
        } else {
            console.error("Element with ID 'copyright-info' not found.");
        }
    };

    /**
     * Debounce function to limit the rate at which a function is called.
     *
     * @param {Function} func - The function to be debounced.
     * @param {number} delay - The delay in milliseconds.
     * @returns {Function} - The debounced function.
     */
    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    /**
     * Check if an element is in the viewport.
     *
     * @param {HTMLElement} element - The HTML element to check.
     * @returns {boolean} - True if the element is in the viewport, false otherwise.
     */
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    /**
     * Handle the scroll event and update styles for elements with the "progress" class to increase the progress bar width.
     */
    const handleScroll = () => {
        document.querySelectorAll(".show-on-scroll").forEach((element) => {
            if (isElementInViewport(element)) {
                element.classList.add("is-visible");
            } else {
                element.classList.remove("is-visible");
            }
        });

        document.querySelectorAll(".progress").forEach((element) => {
            const progressBar = element.lastElementChild;

            if (isInViewport(element)) {
                // Update width and add "in-viewport" class if in the viewport
                progressBar.style.width = `${element.ariaValueNow}%`;
                element.classList.add("in-viewport");
            } else {
                // Set width to 0 and remove "in-viewport" class if not in the viewport
                progressBar.style.width = 0;
                element.classList.remove("in-viewport");
            }
        });
    };

    // Debounced scroll event listener with a 10ms delay
    document.addEventListener("scroll", debounce(handleScroll, 10));

    // Call the function to update copyright info
    updateCopyrightInfo();

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            (rect.top <= 0 && rect.bottom >= 0) ||
            (rect.bottom >=
                (window.innerHeight || document.documentElement.clientHeight) &&
                rect.top <=
                    (window.innerHeight ||
                        document.documentElement.clientHeight)) ||
            (rect.top >= 0 &&
                rect.bottom <=
                    (window.innerHeight ||
                        document.documentElement.clientHeight))
        );
    };

    // Smooth scroll function
    const headerBtn = document.getElementById("header-btn");
    const contactForm = document.getElementById("contact");

    const scrollToForm = () => {
        contactForm.scrollIntoView({ behavior: "smooth" }); // Top
    };

    headerBtn.addEventListener("click", scrollToForm);

    handleScroll();
})();
