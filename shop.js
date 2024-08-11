document.addEventListener('DOMContentLoaded', function() {
    const colorButtons = document.querySelectorAll('.color-btn');
    const productImage = document.getElementById('product-image');

    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const color = this.getAttribute('data-color');
            switch (color) {
                case 'blue':
                    productImage.src = 'bluecupfinal.png';
                    productImage.alt = 'Blue Cup';
                    break;
                case 'green':
                    productImage.src = 'greencupfinal.png';
                    productImage.alt = 'Green Cup';
                    break;
                case 'orange':
                    productImage.src = 'orangecupfinal.png';
                    productImage.alt = 'Orange Cup';
                    break;
                case 'black':
                    productImage.src = 'blackcupfinal.png';
                    productImage.alt = 'Black Cup';
                    break;
            }
        });
    });
});
