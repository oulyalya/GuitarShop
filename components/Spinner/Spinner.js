class Spinner {
    handleClear() {
        ROOT_SPINNER.innerHTML = '';
    }

    render () {
        const html = `
            <div class="spinner_container">
                <img src="components/Spinner/img/spinner.svg">
            </div>
        `;

        ROOT_SPINNER.innerHTML=html;
    }
}

const spinner = new Spinner();
