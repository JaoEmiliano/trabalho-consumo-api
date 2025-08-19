const content = document.getElementById('detail');
let id = Number(window.location.hash.replace("#", ""));

async function getCharacterDetail() {
    if (!id) {
        content.innerHTML = "Personagem nao informado.";
        return;
    }
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();

    content.innerHTML = `
        <ol>
            <li><img src="${data.image}" alt="${data.name}" /></li>
            <li>Nome: ${data.name}</li>
            <li>Espécie: ${data.species}</li>
            <li>Gênero: ${data.gender}</li>
            <li>Mundo/Dimensão: ${data.location?.name || 'Desconhecido'}</li>
            <li>Status: ${data.status}</li>
        </ol> 
        <a href="index.html">Voltar</a>
    `;
}

getCharacterDetail();