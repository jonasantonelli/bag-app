import TotalPrice from '.';
import mockDatabase from '../../../server/database';

describe('total price component', () => {
    it('it renders correctly', () => {
        const products = mockDatabase.bag[0].items;
        expect(TotalPrice(products)).toMatchSnapshot();
    });
});
