const shortcutBtn = document.getElementById('shortcut-btn');
const shortcutText = document.getElementById('shortcut-text');

const shortcuts = [
    'Ctrl + P: Quick open files',
    'Ctrl + Shift + E: Open Explorer panel',
    'Ctrl + : : Open terminal',
    'Ctrl + S: Save file',
    'Ctrl + Shift + ? : Toggle sidebar'
];

shortcutBtn.addEventListener('click', function() {
    const randomShortcut = shortcuts[Math.floor(Math.random() * shortcuts.length)];
    shortcutText.textContent = randomShortcut;
});