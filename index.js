
function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinner.render();

let CATALOG = [];

fetch('server/catalog.json')
.then(res => res.json())
.then(body => {
    CATALOG = body;

    // setTimeout(() => {
        spinner.handleClear();
        render();
    // }, 31000);
})
.catch(error => {
    spinner.handleClear();
    errorPage.render();
});
