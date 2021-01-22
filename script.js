
const form = document.querySelector('#searchForm');
const container = document.querySelector('.container');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {headers: {Accept: 'application/json'}}
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}/`, config);
    makeImages(res.data.sprites.front_default);
    makeParagraphs(res.data.name);
    console.log(res.data);
    form.elements.query.value = '';
});

const makeImages = (sprite) => {
    const img = document.createElement('IMG');
    img.src = sprite;
    img.classList.add('img-pokemon');
    container.append(img);
}

const makeParagraphs = (name) => {
    const paragraph = document.createElement('P');
    paragraph.textContent = name.charAt(0).toUpperCase()+name.substr(1,name.length);
    paragraph.classList.add('pokemon-name');
    container.append(paragraph);
}