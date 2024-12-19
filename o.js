function createWindow(containerId, iframeId, buttonText, filePath) {
    const container = document.getElementById(containerId);

    // Вікно
    const windowDiv = document.createElement('div');
    windowDiv.className = 'window';

    const iframe = document.createElement('iframe');
    iframe.id = iframeId;
    windowDiv.appendChild(iframe);

    // Кнопка
    const button = document.createElement('button');
    button.className = 'button';
    button.innerText = buttonText;
    button.onclick = () => loadContent(iframeId, filePath);

    container.appendChild(windowDiv);
    container.appendChild(button);
}

function loadContent(iframeId, url) {
    const iframe = document.getElementById(iframeId);
    if (iframe) {
        iframe.src = url;
    } else {
        console.error("Не знайдено iframe з ID " + iframeId);
    }
}

// Кнопка підйому
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
    const section1 = document.getElementById('section1');
    const upButton = document.querySelector('.up-button');

    const section1Bottom = section1.offsetTop + section1.offsetHeight;
    if (window.scrollY > section1Bottom) {
        upButton.style.display = 'block';
    } else {
        upButton.style.display = 'none';
    }
});

