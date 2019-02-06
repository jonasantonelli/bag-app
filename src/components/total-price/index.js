import './index.scss';

const render = (total = 0) => `
    <div class="price">Total: € ${total.toLocaleString()}</div>
`;

const TotalPrice = (products) => {
    if(!products || !products.length) {
        return render();
    }
    const total = products.map(product => product.price).reduce((prev, next) => parseFloat(prev) + parseFloat(next));
    return render(total);
};

export default TotalPrice;