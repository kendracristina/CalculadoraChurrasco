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
    const totalCarne = (qtdHomens * carneBovinaHomens) + (qtdMulheres * carneBovinaMulheres) + (qtdCriancas * carneBovinaCriancas);
    const totalFrango = (qtdHomens * frangoHomens) + (qtdMulheres * frangoMulheres) + (qtdCriancas * frangoCriancas);
    const totalLinguica = (qtdHomens * linguicaHomens) + (qtdMulheres * linguicaMulheres) + (qtdCriancas * linguicaCriancas);
    const totalRefrigerante = (qtdHomens * refrigeranteHomens) + (qtdMulheres * refrigeranteMulheres) + (qtdCriancas * refrigeranteCriancas);
    const totalCerveja = (qtdHomens * cervejaHomens) + (qtdMulheres * cervejaMulheres) + (qtdCriancas * cervejaCriancas);

    const IngredientesLista = document.getElementById("ingredienteUl");
    IngredientesLista.innerHTML = `
        <li class="IngredientesLista">${totalCarne}g de carne bovina</li>
        <li class="IngredientesLista">${totalFrango}g de carne de frango</li>
        <li class="IngredientesLista">${totalLinguica}g de linguiça</li>
        <li class="IngredientesLista">${totalRefrigerante}ml de refrigerante</li>
        <li class="IngredientesLista">${totalCerveja}ml de cerveja</li>
    `;
    return false;
}
