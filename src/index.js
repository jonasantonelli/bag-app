import './index.scss';
import Loading from './components/loading';
import BagPage from './pages/bag';
import BagClass from './classes/Bag'
const body = document.querySelector('body');

async function init(bagId) {
    Bag = new BagClass(bagId);
    body.innerHTML = Loading();
    body.innerHTML = await BagPage(bagId);
    Bag.bindElements();
}

init('bag1');
