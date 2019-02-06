import Header from '.';
import mockDatabase from '../../../server/database';

describe('header component', () => {
    it('it renders correctly', () => {
        const products = mockDatabase.bag[0].items;
        expect(Header(products)).toMatchSnapshot();
    });
});
