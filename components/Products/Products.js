class Products {
    constructor() {
        this.classNameActive = 'products_element__btn--active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocalStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        headerPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
            <li class="products_element">
            <span class="products_element__name">${name}</span>
            <img class="products_element__img" src="${img}" width="100">
            <span class="products_element__price">💰 ${price.toLocaleString()} USD</span>
            <button class="products_element__btn ${activeClass}" type="button" onclick="productsPage.handleSetLocalStorage(this, '${id}')">
            ${activeText}
            </button>
            </li>
            `;

            const html = `
                <ul class="products_container">
                    ${htmlCatalog}
                </ul>
            `;

            ROOT_PRODUCTS.innerHTML = html;
        });
    }
}

const productsPage = new Products();
