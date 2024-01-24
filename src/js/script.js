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
        const copyrightText = `&copy; 2024-${currentYear} Karl Horning`;

        // Update copyright info only if the element is found
        const copyrightElement = document.getElementById("copyright-info");

        if (copyrightElement) {
            copyrightElement.innerHTML = copyrightText;
        } else {
            console.error("Element with ID 'copyright-info' not found.");
        }
    };

    // Call the function to update copyright info
    updateCopyrightInfo();
})();
