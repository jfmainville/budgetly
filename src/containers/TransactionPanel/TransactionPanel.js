import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import TransactionTable from "../../components/TransactionTable/TransactionTable";


class TransactionPanel extends Component {
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