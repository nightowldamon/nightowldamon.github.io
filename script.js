document.getElementById('theme-button').addEventListener('click', function() {
    const isCurrentlyDark = document.body.dataset.theme === 'dark';
    document.body.dataset.theme = isCurrentlyDark ? '' : 'dark';
}); 