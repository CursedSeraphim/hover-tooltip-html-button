function toggleTextbox(event, element) {
    // Prevent the event from bubbling up to the parent
    event.stopPropagation();

    // Get the parent hover-element and toggle 'active' class
    const hoverElement = element.parentNode;
    if (hoverElement.classList.contains('active')) {
        hoverElement.classList.remove('active');
    } else {
    hoverElement.classList.toggle('active');
    }
}
