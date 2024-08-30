fetch('../data/frases.json') 
    .then(res => res.json())
    .then(json => {
        const frases = json.frases;
        const randomIndex = Math.floor(Math.random() * frases.length);
        const fraseRandom = frases[randomIndex];

        const productContainer = document.getElementById('product-container');
        const Text = document.createElement('p');
        Text.textContent = fraseRandom;

        productContainer.appendChild(Text);
        Text.className = 'Text';
    })
    .catch(error => console.error('Error:', error));
