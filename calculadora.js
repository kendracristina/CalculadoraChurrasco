function handleSubmit() {
    //INPUT
    const qtdHomens = document.querySelector(".homens").value;
    const qtdMulheres = document.querySelector(".mulheres").value;
    const qtdCriancas = document.querySelector(".criancas").value;

    //INGREDIENTES

    //HOMENS 
    const carneBovinaHomens = 500;
    const frangoHomens = 200;
    const linguicaHomens = 200;
    const refrigeranteHomens = 300;
    const cervejaHomens = 800;

    //MULHERES
    const carneBovinaMulheres = 300;
    const frangoMulheres = 200;
    const linguicaMulheres = 200;
    const refrigeranteMulheres = 400;
    const cervejaMulheres = 500;

    //CRIANÇAS
    const carneBovinaCriancas = 200;
    const frangoCriancas = 100;
    const linguicaCriancas = 200;
    const refrigeranteCriancas = 200;
    const cervejaCriancas = 0;

    //CALCULO INGREDIENTES
    const totalCarne = Math.round(((qtdHomens * carneBovinaHomens + qtdMulheres * carneBovinaMulheres + qtdCriancas * carneBovinaCriancas) / 1000) * 100) / 100;
    const totalFrango = Math.round(((qtdHomens * frangoHomens + qtdMulheres * frangoMulheres + qtdCriancas * frangoCriancas) / 1000) * 100) / 100;
    const totalLinguica = Math.round(((qtdHomens * linguicaHomens + qtdMulheres * linguicaMulheres + qtdCriancas * linguicaCriancas) / 1000) * 100) / 100;
    const totalRefrigerante = Math.round(((qtdHomens * refrigeranteHomens + qtdMulheres * refrigeranteMulheres + qtdCriancas * refrigeranteCriancas) / 1000) * 100) / 100;
    const totalCerveja = Math.round(((qtdHomens * cervejaHomens + qtdMulheres * cervejaMulheres + qtdCriancas * cervejaCriancas) / 1000) * 100) / 100;

    const IngredientesLista = document.getElementById("ingredienteUl");
    IngredientesLista.innerHTML = `
        <li class="IngredientesLista">${totalCarne.toFixed(2)} kg de carne bovina</li>
        <li class="IngredientesLista">${totalFrango.toFixed(2)} kg de carne de frango</li>
        <li class="IngredientesLista">${totalLinguica.toFixed(2)} kg de linguiça</li>
        <li class="IngredientesLista">${totalRefrigerante.toFixed(2)} L de refrigerante</li>
        <li class="IngredientesLista">${totalCerveja.toFixed(2)} L de cerveja</li>
    `;
    return false;
}
