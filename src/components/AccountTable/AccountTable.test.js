import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AccountTable from "./AccountTable";
import AccountEnterpriseInput from "./AccountEnterpriseInput/AccountEnterpriseInput";
import AccountCategoryDropdown from "./AccountCategoryDropdown/AccountCategoryDropdown";
import AccountCard from "./AccountCard/AccountCard";


configure({adapter: new Adapter()});

describe('<AccountTable/>', () => {
    const props = {
        accounts: [
            {id: 1, enterprise: "Tim Hortons", category: "Restaurant", total: 920.24},
            {id: 2, enterprise: "McDonalds", category: "Restaurant", total: 1200.24},
            {id: 3, enterprise: "Burger King", category: "Restaurant", total: 120.24}
        ],
        categories: [
            {id: 1, title: "Entertainment"},
            {id: 2, title: "Technology"},
            {id: 3, title: "Grocery"},
            {id: 4, title: "Fashion"}
        ],
        categorySearchInput: "",
        showCategoryDropdown: false,
        handleCategorySearch: jest.fn(),
        handleClearCategorySearch: jest.fn(),
        handleShowCategoryDropdown: jest.fn(),
        handleCategorySearchSelection: jest.fn()
    };
    const location = {pathname: '/accounts'};
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AccountTable {...props} location={location}/>);
    });

    it('should contain the accounts array', () => {
        expect(props.accounts).toEqual(expect.arrayContaining(props.accounts));
    });
    it('should contain the categories array', () => {
        expect(props.categories).toEqual(expect.arrayContaining(props.categories));
    });
    it('should contain the required props in the <AccountCategoryDropdown/> component', () => {
        expect(wrapper.find(AccountCategoryDropdown).props()).toEqual({
            categories: props.categories,
            categorySearchInput: props.categorySearchInput,
            showCategoryDropdown: props.showCategoryDropdown,
            handleCategorySearch: props.handleCategorySearch,
            handleClearCategorySearch: props.handleClearCategorySearch,
            handleShowCategoryDropdown: props.handleShowCategoryDropdown,
            handleCategorySearchSelection: props.handleCategorySearchSelection
        })
    });
    it('should show one <AccountEnterpriseInput/> component', () => {
        expect(wrapper.find(AccountEnterpriseInput)).toHaveLength(1);
    });
    it('should show one <AccountCategoryDropdown/> component', () => {
        expect(wrapper.find(AccountCategoryDropdown)).toHaveLength(1);
    });
    it('should show one <AccountCard/> component', () => {
        expect(wrapper.find(AccountCard)).toHaveLength(3);
    });

    afterEach(() => {
        wrapper.unmount();
    })
});