// https://www.cuponomia.com.br/desconto/mercado-livre
const listaCupons = $x('//li[contains(@Class, "item-code") and .//span[contains(@Class, "item-code-link js-itemCode")]]');

const dadosCompletos = listaCupons.map(li => {
return {
codigo: $x('.//span[contains(@Class, "item-code-link js-itemCode")]', li)[0].innerText,
titulo: $x('.//h3[contains(@Class, "js-itemTitle")]', li)[0].innerText,
descricao: $x('.//div[contains(@Class, "item-desc")]', li)[0].innerText
};
});

console.table(dadosCompletos);

// ============================
// https://www.meliuz.com.br/desconto/cupom-desconto-mercado-livre
const listaCupons = $x('//div[contains(@Class, "cpn-layout offer-cpn") and .//button[contains(@Class, "code-btn")]]');

const dadosCompletos = listaCupons.map(li => {
return {
codigo: $x('.//span[contains(@Class, "code-btn__value")]', li)[0].innerText,
titulo: $x('.//h3[contains(@Class, "offer-cpn__title")]', li)[0].innerText,
descricao: $x('.//div[contains(@Class, "cpn-layout__rules")]', li)[0].innerText
};
});

console.table(dadosCompletos);

//============================
// https://descontostop.com/loja/cupom-desconto-mercado-livre/
const listaCupons = $x('//div[contains(@Class, "coupon-item") and .//div[contains(@Class, "open-code-mercado-livre")]]');

const dadosCompletos = listaCupons.map(li => {
return {
codigo: $x('.//span[contains(@Class, "code-text")]', li)[0].innerText,
titulo: $x('.//h3[contains(@Class, "coupon-title")]', li)[0].innerText,
descricao: $x('.//div[contains(@Class, "coupon-des-full")]/p', li)[0].innerHTML
};
});

console.table(dadosCompletos);
