import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AccountCard from "./AccountCard";


configure({adapter: new Adapter()});

describe('<AccountCard/>', () => {
    const props = {
        account: {id: 1, enterprise: "Tim Hortons", type: "Expense", category: "Restaurant", total: 920.24},
    };
    const location = {pathname: '/accounts'};
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<AccountCard {...props} location={location}/>);
    });

    it('should have one account prop object', () => {
        expect(wrapper.props().account).toBeDefined();
    });

    afterEach(() => {
        wrapper.unmount();
    })
});

