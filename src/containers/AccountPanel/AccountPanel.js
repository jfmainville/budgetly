import React, {Component} from 'react';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import AccountTable from "../../components/AccountTable/AccountTable";


class AccountPanel extends Component {
    state = {
        accounts: [
            {id: 1, date: "2018-10-15", enterprise: "Tim Hortons", category: "Restaurant", total: 920.24},
            {id: 2, date: "2018-10-15", enterprise: "McDonalds", category: "Restaurant", total: 1200.24},
            {id: 3, date: "2018-10-15", enterprise: "Burger King", category: "Restaurant", total: 120.24},
            {id: 4, date: "2018-10-15", enterprise: "Netflix", category: "Entertainment", total: 50.24},
            {id: 5, date: "2018-10-15", enterprise: "Metro", category: "Grocery", total: 1000.32},
            {id: 6, date: "2018-10-15", enterprise: "IGA", category: "Grocery", total: 523.32},
            {id: 7, date: "2018-10-15", enterprise: "Pacini", category: "Restaurant", total: 1000.24},
            {id: 8, date: "2018-10-15", enterprise: "Cineplex Odeon", category: "Entertainment", total: 1000.24},
            {id: 9, date: "2018-10-15", enterprise: "Desjardins", category: "Bank", total: 1000.24},
            {id: 10, date: "2018-10-15", enterprise: "Services Conseils Franc-Jeu", category: "Revenue", total: 1000.24},
            {id: 11, date: "2018-10-15", enterprise: "STM", category: "Transport", total: 1000.24},
            {id: 12, date: "2018-10-15", enterprise: "Nissan", category: "Automobile", total: 1000.24},
            {id: 13, date: "2018-10-15", enterprise: "Cinema Guzzo", category: "Entertainment", total: 1000.24},
            {id: 14, date: "2018-10-15", enterprise: "Maxi", category: "Grocery", total: 1000.24},
            {id: 15, date: "2018-10-15", enterprise: "Couche Tard", category: "Grocery", total: 1000.24},
            {id: 16, date: "2018-10-15", enterprise: "Pizza Pizza", category: "Restaurant", total: 1000.24},
            {id: 17, date: "2018-10-15", enterprise: "Pizza Hut", category: "Restaurant", total: 1000.24},
            {id: 18, date: "2018-10-15", enterprise: "Decathlon", category: "Sport", total: 1000.24},
            {id: 19, date: "2018-10-15", enterprise: "Forever 21", category: "Fashion", total: 1000.24},
            {id: 20, date: "2018-10-15", enterprise: "Amazon", category: "Technology", total: 1000.24},
            {id: 21, date: "2018-10-15", enterprise: "Newegg", category: "Technology", total: 1000.24},
            {id: 22, date: "2018-10-15", enterprise: "H & M", category: "Fashion", total: 1000.24},
            {id: 23, date: "2018-10-15", enterprise: "Wal-Mart", category: "Grocery", total: 825.66},
            {id: 24, date: "2018-10-15", enterprise: "Garage S & M", category: "Automobile", total: 1000.66}
        ]
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
                    handleShowCategoryDropdown={this.handleShowCategoryDropdown}
                    handleCategorySearch={this.handleCategorySearch}
                    handleClearCategorySearch={this.handleClearCategorySearch}
                    handleCategorySearchSelection={this.handleCategorySearchSelection}

                />
            </Auxiliary>
        )
    }
}

export default AccountPanel;