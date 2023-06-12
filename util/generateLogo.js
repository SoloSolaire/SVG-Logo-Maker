function renderSvgShape(shape, colorShape) {
    if (shape === 'circle') {
        return `<circle cx="150" cy="100" r="88" fill="${colorShape}" />`
    } else if (shape === 'triangle') {
        return `<polygon points="150,20 65,190 235,190" fill="${colorShape}" />`
    } else if (shape === 'square') {
        return `<rect x="65" y="20" width="170" height="170" fill="${colorShape}" />`
    } else {
        return ``
    }
}

const generateLogo = ({text, colorText, shape, colorShape}) =>
`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
${renderSvgShape(shape, colorShape)}
<text x="150" y="120" font-size="50" text-anchor="middle" fill="${colorText}">${text}</text>
</svg>`;

module.exports = generateLogo