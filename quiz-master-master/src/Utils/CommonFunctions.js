function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function shuffleArray(a, b) {
    return Math.random() - 0.5;
}

export {decodeHtml, shuffleArray};