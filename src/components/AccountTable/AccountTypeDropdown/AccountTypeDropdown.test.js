import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AccountTypeDropdown from "./AccountTypeDropdown";


configure({adapter: new Adapter()});

describe('<AccountTypeDropdown/>', () => {
    const props = {
        accounts: [
            {id: 1, enterprise: "Tim Hortons", type: "Restaurant", total: 920.24},
            {id: 2, enterprise: "McDonalds", type: "Restaurant", total: 1200.24},
            {id: 3, enterprise: "Burger King", type: "Restaurant", total: 120.24}
        ],
        typeSearchInput: "",
        showTypeDropdown: false,
        handleShowTypeDropdown: jest.fn(),
        handleTypeSearch: jest.fn(),
        handleClearTypeSearch: jest.fn(),
        handleTypeSearchSelection: jest.fn(),
    };
    const location = {pathname: '/accounts'};
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<AccountTypeDropdown {...props} location={location}/>);
    });

    it('should execute the handleShowTypeDropdown function on click', () => {
        wrapper.find('.TypeDropdownButton').simulate('click');
        expect(props.handleShowTypeDropdown).toHaveBeenCalledTimes(1);
    });
    it('should execute handleTypeSearch function on type search input', () => {
        wrapper.find('.TypeDropdownInput').simulate('change', {
            target: {
                value: "typeSearchInput"
            }
        });
        expect(props.handleTypeSearch).toHaveBeenCalledTimes(1);
    });
    it('should execute the handleClearTypeSearch function on click', () => {
        wrapper.find('.TypeDropdownClearButton').simulate('click');
        expect(props.handleClearTypeSearch).toHaveBeenCalledTimes(1);
    });

    afterEach(() => {
        wrapper.unmount();
    })
});

