import './index.scss';
import closeIcon from '../../assets/remove.svg';

const ProductCard = (item) => {
    return `
    <div class="product-card">
        <div class="remove-btn" onclick="Bag.removeProduct(this.parentElement, '${item.id}')">
            <img src="${closeIcon}" />
        </div>
        <div class="image-container">
            <img class="image" src="${item.image}" />
        </div>
        <div class="info-container alignCenter">
            <div class="brandName">${item.name}</div>
            <div class="price">€ ${parseFloat(item.price).toLocaleString()}</div>
        </div>
    </div>`;
};

export default ProductCard;
