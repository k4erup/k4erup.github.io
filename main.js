window.addEventListener('DOMContentLoaded', () => {
    const birthDate = new Date('2003-09-11');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const isBeforeBirthday = today.getMonth() < birthDate.getMonth() || 
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());
    if (isBeforeBirthday) age--;
    document.getElementById('age').textContent = `${age}歳`;

    const parser = new budoux.Parser();
    const paragraphs = document.querySelectorAll('p'); // すべての<p>要素に適用

    paragraphs.forEach((paragraph) => {
        const originalText = paragraph.textContent;
        const processedHTML = parser.translateHTMLString(`<span>${originalText}</span>`);
        paragraph.innerHTML = processedHTML;
    });
});
