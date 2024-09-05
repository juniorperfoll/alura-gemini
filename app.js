function pesquisar() {
    let input_pesquisa = document.getElementById("search-input").value.toLowerCase(); // Obtém o valor do input e converte para minúsculas para facilitar a comparação
    let section = document.getElementById("card-container");
    let resultados = "";
  
    for (let dado of dados) {
      // Convertemos todas as propriedades para minúsculas para facilitar a comparação
      let tipoMinusculo = dado.tipo.toLowerCase();
      let descricaoMinuscula = dado.descricao.toLowerCase();
      let responsavelMinusculo = dado.responsavel.toLowerCase();
  
      // Verifica se o termo de pesquisa está presente em alguma propriedade do objeto
      if (tipoMinusculo.includes(input_pesquisa) ||
          descricaoMinuscula.includes(input_pesquisa) ||
          responsavelMinusculo.includes(input_pesquisa)) {
        // Se o termo foi encontrado, adiciona o card aos resultados
        resultados += `
          <div class="card">
            <img src="images/foto.png" alt="Imagem do Material"/>
            <h3>${dado.tipo}</h3>
            <p>${dado.descricao}</p>
            <p>Disponível: ${dado.quantidade}</p>
            <p>Contato: ${dado.responsavel} - ${dado.contato}</p>
          </div>
        `;
      }
    }
  
    section.innerHTML = resultados;
  }