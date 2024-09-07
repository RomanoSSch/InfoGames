function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "Campo de busca vazio";
        return;
    }

    

    for (let dado of dados) {
        if (dado.titulo.toLocaleLowerCase().includes(campoPesquisa.toLocaleLowerCase()) || dado.categoria.toLocaleLowerCase().includes(campoPesquisa.toLocaleLowerCase())) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href=${dado.link_sobre} target="_blank">
                            ${dado.titulo}
                        </a>
                        <h2>
                        ${dado.categoria}
                        </h2>
                    </h2>
                    <p class="descricao-meta">
                        ${dado.descricao}
                    </p>
                    <a href=${dado.link_download} target="_blank">
                        Link para baixar
                    </a>
                </div>
    `
        }
    }

    if (!resultados) {
        section.innerHTML = "Nenhum resultado encontrado";
        return;
    }

    section.innerHTML = resultados;
    
}