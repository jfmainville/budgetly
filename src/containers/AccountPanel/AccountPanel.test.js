import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AccountPanel from "./AccountPanel";
import AccountTable from "../../components/AccountTable/AccountTable";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";


configure({adapter: new Adapter()});

describe('<AccountPanel/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AccountPanel/>);
    });

    it('should update the showCategoryDropdown state to true (handleShowCategoryDropdown)', () => {
        wrapper.setState({
            showCategoryDropdown: false
        });
        wrapper.instance().handleShowCategoryDropdown();
        const showCategoryDropdown = wrapper.state('showCategoryDropdown');
        expect(showCategoryDropdown).toEqual(true)
    });
    it('should update the categorySearchInput and showCategoryDropdown states (handleCategorySearch)', () => {
        wrapper.setState({
            showCategoryDropdown: false,
            categorySearchInput: ""
        });
        wrapper.instance().handleCategorySearch({target: {value: "test"}});
        const showCategoryDropdown = wrapper.state('showCategoryDropdown');
        const categorySearchInput = wrapper.state('categorySearchInput');
        expect(showCategoryDropdown).toEqual(true);
        expect(categorySearchInput).toEqual("test")
    });
    it('should clear the categorySearchInput and showCategoryDropdown states (handleClearCategorySearch)', () => {
        wrapper.setState({
            showCategoryDropdown: true,
            categorySearchInput: "test"
        });
        wrapper.instance().handleClearCategorySearch();
        const showCategoryDropdown = wrapper.state('showCategoryDropdown');
        const categorySearchInput = wrapper.state('categorySearchInput');
        expect(showCategoryDropdown).toEqual(false);
        expect(categorySearchInput).toEqual("")
    });
    it('should select the category and set the showCategoryDropdown state to false (handleCategorySearchSelection)', () => {
        wrapper.setState({
            showCategoryDropdown: true,
            categorySearchInput: "test"
        });
        wrapper.instance().handleCategorySearchSelection({title: "category"});
        const showCategoryDropdown = wrapper.state('showCategoryDropdown');
        const categorySearchInput = wrapper.state('categorySearchInput');
        expect(showCategoryDropdown).toEqual(false);
        expect(categorySearchInput).toEqual("category")
    });
    it('should show one <Auxiliary/> component', () => {
        expect(wrapper.find(Auxiliary)).toHaveLength(1);
    });
    it('should show one <AccountTable/> component', () => {
        expect(wrapper.find(AccountTable)).toHaveLength(1);
    });

    afterEach(() => {
        wrapper.unmount();
    })
});