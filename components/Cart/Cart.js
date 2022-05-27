class Cart {
    handleClear () {
        ROOT_CART.innerHTML = '';
    }

     render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;


        CATALOG.forEach(({ id, name, price }) => {

            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr class="cart_element">
                    <td class="cart_element__name">⚡️ ${name}</td>
                    <td class="cart_element__price">${price.toLocaleString()} USD</td>
                </tr>
                `;

                sumCatalog += price;
            }
        });

        const html = `
        <div class="cart_container">
            <div class="cart_close" onclick="cart.handleClear()"></div>
            <table>
                ${htmlCatalog}
                <tr class="cart_element">
                    <td class="cart_element__name">💲  Сумма</td>
                    <td class="cart_element__price">${sumCatalog.toLocaleString()} USD</td>
                </tr>
            </table>
        </div>
        `;
        ROOT_CART.innerHTML = html;
    }
}

const cart = new Cart();
