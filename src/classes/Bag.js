import BagService from '../services/bag-service';

import TotalPrice from '../components/total-price';

class Bag {
    constructor(bagId) {
        this.bagId = bagId;
        this.elemTotalPrice = null;
    }

    bindElements() {
        this.elemTotalPrice = document.querySelector('#render-total-price');
    }

    async removeProduct(element, id){
        if(!id) {
            return;
        }
        let response;
        try {
            response = await BagService.deleteItemByIdAsync(this.bagId, id);
        } catch (e) {
            console.error(e);
            return;
        }
        element.remove();
        this.renderTotalPrice(response.data);
    }

    renderTotalPrice(products) {
        this.elemTotalPrice.innerHTML = TotalPrice(products);
    }
}

export default Bag;