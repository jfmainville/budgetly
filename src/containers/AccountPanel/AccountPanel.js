import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import AccountTable from "../../components/AccountTable/AccountTable";


class AccountPanel extends Component {
    state = {
        accounts: [
            {id: 1, enterprise: "Tim Hortons", type: "Expense", category: "Restaurant", recurrent: true, recurrence: 1, payment_date: "2018-11-01", payment_amount: 100},
            {id: 2, enterprise: "McDonalds", type: "Expense", category: "Restaurant", recurrent: true, recurrence: 2, payment_date: "2019-11-01", payment_amount: 500},
            {id: 3, enterprise: "Burger King", type: "Expense", category: "Restaurant", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 4, enterprise: "Netflix", type: "Expense", category: "Entertainment", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 5, enterprise: "Metro", type: "Expense", category: "Grocery", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 6, enterprise: "IGA", type: "Expense", category: "Grocery", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 7, enterprise: "Pacini", type: "Expense", category: "Restaurant", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 8, enterprise: "Cineplex Odeon", type: "Expense", category: "Entertainment", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 9, enterprise: "Desjardins", type: "Expense", category: "Bank", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 10, enterprise: "Services Conseils Franc-Jeu", type: "Income", category: "Revenue", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 11, enterprise: "STM", type: "Expense", category: "Transport", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 12, enterprise: "Nissan", type: "Expense", category: "Automobile", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 13, enterprise: "Cinema Guzzo", type: "Expense", category: "Entertainment", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 14, enterprise: "Maxi", type: "Expense", category: "Grocery", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 15, enterprise: "Couche Tard", type: "Expense", category: "Grocery", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 16, enterprise: "Pizza Pizza", type: "Expense", category: "Restaurant", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 17, enterprise: "Pizza Hut", type: "Expense", category: "Restaurant", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 18, enterprise: "Decathlon", type: "Expense", category: "Sport", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 19, enterprise: "Forever 21", type: "Expense", category: "Fashion", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 20, enterprise: "Amazon", type: "Expense", category: "Technology", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 21, enterprise: "Newegg", type: "Expense", category: "Technology", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 22, enterprise: "H & M", type: "Expense", category: "Fashion", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 23, enterprise: "Wal-Mart", type: "Expense", category: "Grocery", recurrent: false, recurrence: null, payment_date: null, payment_amount: null},
            {id: 24, enterprise: "Garage S & M", type: "Expense", category: "Automobile", recurrent: false, recurrence: null, payment_date: null, payment_amount: null}
        ],
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
                    accounts={this.state.accounts}
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

export default AccountPanel;