function toggleTextbox(event, element) {
    // Prevent the event from bubbling up to the parent
    event.stopPropagation();

    // Get the parent hover-element and toggle 'active' class
    const hoverElement = element.parentNode;
    hoverElement.classList.toggle('active');
}

// Add an event listener to the document to close the textbox when clicked outside
document.addEventListener('click', function(event) {
    const activeElements = document.querySelectorAll('.hover-element.active');
    activeElements.forEach(function(activeElement) {
        if (!activeElement.contains(event.target)) {
            activeElement.classList.remove('active');
        }
    });
});
