import axios from 'axios';

const client = axios.create();

export const BagServiceUrls = {
    base() {
        return 'http://localhost:3000/bag/';
    },
    getBagUrl(id) {
        return `${this.base()}${id}`;
    },
    getBagItemUrl(id, itemId) {
        return `${this.base()}${id}/items/${itemId}`;
    },
};

const BagService = {
    async getBagByIdAsync(bagId) {
        return client.get(BagServiceUrls.getBagUrl(bagId))
            .then(res => res.data[0]);
    },

    async deleteItemByIdAsync(id, itemId) {
        return client.delete(BagServiceUrls.getBagItemUrl(id, itemId))
            .then(res => res);
    }
};

export default BagService;
