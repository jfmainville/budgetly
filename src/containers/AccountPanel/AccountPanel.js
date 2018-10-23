import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import AccountTable from "../../components/AccountTable/AccountTable";


class AccountPanel extends Component {
    state = {
        accounts: [
            {id: 1, enterprise: "Tim Hortons", category: "Restaurant", total: 920.24},
            {id: 2, enterprise: "McDonalds", category: "Restaurant", total: 1200.24},
            {id: 3, enterprise: "Burger King", category: "Restaurant", total: 120.24},
            {id: 4, enterprise: "Netflix", category: "Entertainment", total: 50.24},
            {id: 5, enterprise: "Metro", category: "Grocery", total: 1000.32},
            {id: 6, enterprise: "IGA", category: "Grocery", total: 523.32},
            {id: 7, enterprise: "Pacini", category: "Restaurant", total: 1000.24},
            {id: 8, enterprise: "Cineplex Odeon", category: "Entertainment", total: 1000.24},
            {id: 9, enterprise: "Desjardins", category: "Bank", total: 1000.24},
            {id: 10, enterprise: "Services Conseils Franc-Jeu", category: "Revenue", total: 1000.24},
            {id: 11, enterprise: "STM", category: "Transport", total: 1000.24},
            {id: 12, enterprise: "Nissan", category: "Automobile", total: 1000.24},
            {id: 13, enterprise: "Cinema Guzzo", category: "Entertainment", total: 1000.24},
            {id: 14, enterprise: "Maxi", category: "Grocery", total: 1000.24},
            {id: 15, enterprise: "Couche Tard", category: "Grocery", total: 1000.24},
            {id: 16, enterprise: "Pizza Pizza", category: "Restaurant", total: 1000.24},
            {id: 17, enterprise: "Pizza Hut", category: "Restaurant", total: 1000.24},
            {id: 18, enterprise: "Decathlon", category: "Sport", total: 1000.24},
            {id: 19, enterprise: "Forever 21", category: "Fashion", total: 1000.24},
            {id: 20, enterprise: "Amazon", category: "Technology", total: 1000.24},
            {id: 21, enterprise: "Newegg", category: "Technology", total: 1000.24},
            {id: 22, enterprise: "H & M", category: "Fashion", total: 1000.24},
            {id: 23, enterprise: "Wal-Mart", category: "Grocery", total: 825.66},
            {id: 24, enterprise: "Garage S & M", category: "Automobile", total: 1000.66}
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
        showCategoryDropdown: false
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

AccountPanel.propTypes = {
    accounts: PropTypes.array,
    categories: PropTypes.array,
    categorySearchInput: PropTypes.string,
    showCategoryDropdown: PropTypes.bool,
    handleShowCategoryDropdown: PropTypes.func,
    handleCategorySearch: PropTypes.func,
    handleClearCategorySearch: PropTypes.func,
    handleCategorySearchSelection: PropTypes.func
};

export default AccountPanel;