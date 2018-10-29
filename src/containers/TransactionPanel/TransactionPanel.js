import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import TransactionTable from "../../components/TransactionTable/TransactionTable";
import * as actions from "../../store/actions";
import {connect} from "react-redux";


export class TransactionPanel extends Component {
    state = {
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
                    transactions={this.props.transactions}
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
        createTransaction: (data) => dispatch(actions.createTransaction(data)),
        updateTransaction: (data) => dispatch(actions.updateTransaction(data)),
        deleteTransaction: (data) => dispatch(actions.deleteTransaction(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPanel);