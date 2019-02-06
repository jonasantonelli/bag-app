import TotalPrice from '../total-price';
import './index.scss';

const Header = (products) =>
    `<header class="header">
        <h1>My Bag</h1>
        <div id="render-total-price">
            ${TotalPrice(products)}
        </div>
    </header>`;

export default Header;