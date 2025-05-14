(function() {
    const currentUrl = window.location.href;
    const regex = /https:\/\/www\.chessable\.com\/analysis\/fen\/([^\/?]+)/;
    const match = currentUrl.match(regex);

    if (match && match[1]) {
        const chessableFen = match[1];
        const fenParts = chessableFen.split('U').join('/');

        const lichessUrl = `https://lichess.org/analysis/standard/${fenParts}`;

        // Add button to page
        const button = document.createElement('button');
        button.textContent = 'Open in Lichess';
        button.style.position = 'fixed';
        button.style.top = '50%';
        button.style.right = '10px';
        button.style.zIndex = 9999;
        button.style.padding = '10px';
        button.style.backgroundColor = '#5C7AEA';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';

        button.onclick = () => window.open(lichessUrl, '_blank');

        document.body.appendChild(button);
    }
})();
