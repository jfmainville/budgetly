import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import AccountTable from "../../components/AccountTable/AccountTable";
import * as actions from "../../store/actions";
import {connect} from "react-redux";


export class AccountPanel extends Component {
    state = {
        categories: [
            {id: 1, title: "Entertainment"},
            {id: 2, title: "Technology"},
            {id: 3, title: "Grocery"},
            {id: 4, title: "Fashion"},
            {id: 5, title: "Automobile"},
            {id: 6, title: "Automobile"},
            {id: 7, title: "Automobile"},
            {id: 8, title: "Automobile"},
            {id: 9, title: "Automobile"},
            {id: 10, title: "Automobile"},
            {id: 11, title: "Automobile"},
            {id: 12, title: "Automobile"},
            {id: 13, title: "Automobile"},
            {id: 14, title: "Automobile"},
            {id: 15, title: "Automobile"},
            {id: 16, title: "Automobile"},
        ],
        categorySearchInput: '',
        showCategoryDropdown: false,
        typeSearchInput: '',
        showTypeDropdown: false
    };

    handleShowCategoryDropdown = () => {
        this.setState({
            showCategoryDropdown: !this.state.showCategoryDropdown
        })
    };

    handleCategorySearch = (event) => {
        const categorySearchInput = event.target.value;
        this.setState({
            showCategoryDropdown: true,
            categorySearchInput: categorySearchInput
        })
    };

    handleClearCategorySearch = () => {
        this.setState({
            showCategoryDropdown: false,
            categorySearchInput: ''
        })
    };

    handleCategorySearchSelection = (category) => {
        this.setState({
            categorySearchInput: category.title,
            showCategoryDropdown: false
        })
    };

    handleShowTypeDropdown = () => {
        this.setState({
            showTypeDropdown: !this.state.showTypeDropdown
        })
    };

    handleTypeSearch = (event) => {
        const typeSearchInput = event.target.value;
        this.setState({
            showTypeDropdown: true,
            typeSearchInput: typeSearchInput
        })
    };

    handleClearTypeSearch = () => {
        this.setState({
            showTypeDropdown: false,
            typeSearchInput: ''
        })
    };

    handleTypeSearchSelection = (type) => {
        this.setState({
            typeSearchInput: type,
            showTypeDropdown: false
        })
    };

    componentDidMount() {

    }

    render() {
        return (
            <Auxiliary>
                <AccountTable
                    accounts={this.props.accounts}
                    categories={this.state.categories}
                    categorySearchInput={this.state.categorySearchInput}
                    showCategoryDropdown={this.state.showCategoryDropdown}
                    typeSearchInput={this.state.typeSearchInput}
                    showTypeDropdown={this.state.showTypeDropdown}
                    handleShowCategoryDropdown={this.handleShowCategoryDropdown}
                    handleCategorySearch={this.handleCategorySearch}
                    handleClearCategorySearch={this.handleClearCategorySearch}
                    handleCategorySearchSelection={this.handleCategorySearchSelection}
                    handleShowTypeDropdown={this.handleShowTypeDropdown}
                    handleTypeSearch={this.handleTypeSearch}
                    handleClearTypeSearch={this.handleClearTypeSearch}
                    handleTypeSearchSelection={this.handleTypeSearchSelection}

                />
            </Auxiliary>
        )
    }
}

AccountPanel.propTypes = {
    accounts: PropTypes.array,
    categories: PropTypes.array,
    categorySearchInput: PropTypes.string,
    showCategoryDropdown: PropTypes.bool,
    typeSearchInput: PropTypes.string,
    showTypeDropdown: PropTypes.bool,
    handleShowCategoryDropdown: PropTypes.func,
    handleCategorySearch: PropTypes.func,
    handleClearCategorySearch: PropTypes.func,
    handleCategorySearchSelection: PropTypes.func,
    handleShowTypeDropdown: PropTypes.func,
    handleTypeSearch: PropTypes.func,
    handleClearTypeSearch: PropTypes.func,
    handleTypeSearchSelection: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        accounts: state.account.accounts,
        transactions: state.transaction.transactions
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAccounts: () => dispatch(actions.fetchAccounts()),
        fetchTransactions: () => dispatch(actions.fetchTransactions()),
        createAccount: (data) => dispatch(actions.createAccount(data)),
        updateAccount: (data) => dispatch(actions.updateAccount(data)),
        deleteAccount: (data) => dispatch(actions.deleteAccount(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountPanel);