import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import TransactionTable from "../../components/TransactionTable/TransactionTable";


class TransactionPanel extends Component {
    state = {
        transactions: [
            {
                id: 1,
                date: "2018-10-11",
                enterprise: "Tim Hortons",
                type: "Expense",
                category: "Restaurant",
                total: 1000.24
            },
            {
                id: 2,
                date: "2018-09-11",
                enterprise: "McDonalds",
                type: "Expense",
                category: "Restaurant",
                total: 1000.24
            },
            {
                id: 3,
                date: "2018-08-11",
                enterprise: "Burger King",
                type: "Expense",
                category: "Restaurant",
                total: 1000.24
            },
            {
                id: 4,
                date: "2018-10-11",
                enterprise: "Netflix",
                type: "Expense",
                category: "Entertainment",
                total: 1000.24
            },
            {id: 5, date: "2018-10-11", enterprise: "Metro", type: "Expense", category: "Grocery", total: 1000.24},
            {id: 6, date: "2018-10-11", enterprise: "IGA", type: "Expense", category: "Grocery", total: 1000.24},
        ],
        activeMonth: moment().format("YYYY-MM")
    };

    handleMonthSelectionPrevious = () => {
        let activeMonth = moment(this.state.activeMonth, "YYYY-MM").add(-1, "month").format("YYYY-MM");
        this.setState({
            activeMonth: activeMonth
        })
    };

    handleMonthSelectionNext = () => {
        let activeMonth = moment(this.state.activeMonth, "YYYY-MM").add(1, "month").format("YYYY-MM");
        this.setState({
            activeMonth: activeMonth
        })
    };

    componentDidMount() {

    }

    render() {
        return (
            <Auxiliary>
                <TransactionTable
                    transactions={this.state.transactions}
                    activeMonth={this.state.activeMonth}
                    handleMonthSelectionPrevious={this.handleMonthSelectionPrevious}
                    handleMonthSelectionNext={this.handleMonthSelectionNext}
                />
            </Auxiliary>
        )
    }
}

TransactionPanel.propTypes = {
    transactions: PropTypes.array,
    activeMonth: PropTypes.string,
    handleMonthSelectionPrevious: PropTypes.func,
    handleMonthSelectionNext: PropTypes.func
};

export default TransactionPanel;