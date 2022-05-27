class Header {
    handleOpenShoppingCart() {
        cart.render();
        console.log(22)
    }

    render(count) {

        const html = `
            <div class="header_container">
                <div class="header_counter" onclick="headerPage.handleOpenShoppingCart()">
                🛒 ${count}
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();
