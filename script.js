function toggleJourneyBoard() {
    const journeyBoard = document.querySelector('.journey-board');
    const openButton = document.querySelector('.open-btn');
    const toggleButton = document.querySelector('.toggle-btn');

    journeyBoard.classList.toggle('collapsed');
    toggleButton.classList.toggle('collapsed');

    if (journeyBoard.classList.contains('collapsed')) {
        openButton.style.display = 'block'; // Show the open button when collapsed
    } else {
        openButton.style.display = 'none'; // Hide the open button when expanded
    }
}