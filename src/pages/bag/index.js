import Footer from '../../components/footer';
import Header from '../../components/header';
import ProductsList from '../../components/products-list';
import BagService from '../../services/bag-service';

async function BagPage(bagId) {
    let bag;

    try {
        bag = await BagService.getBagByIdAsync(bagId);
    } catch (e) {
        return '<div class="error">Error loading bag items...</div>';
    }

    return `<div class="page">
                ${Header(bag.items)}
                ${ProductsList(bag.items)}
                ${Footer()}
            </div>`;
}

export default BagPage;
