const paises_container = document.getElementById('paises_container');

const getAllPaises = async () => {
    const url = `https://restcountries.com/v3.1/all`;
    const result = await fetch(url);
    const paises = await result.json();
    createPaises(paises);
}

const createPaises = (paises) => {

    let paisElemento = [];
    let paisInnerHTML = "";

    for (let i = 0; i < paises.length; i++) {

        paisElemento[i] = document.createElement('div');
        paisElemento[i].classList.add('pais');

        paisInnerHTML = `
        <div class="bandeira">
            <img src="${paises[i].flags.png}" alt="${paises[i].name.common}" title="${paises[i].name.common}" height="50px" width="100px">
        </div>`;

        paisElemento[i].innerHTML = paisInnerHTML;
        paises_container.appendChild(paisElemento[i]);
    }

}


getAllPaises();

