import React, {Component} from 'react';


class TransactionPanel extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <p>Transaction Panel</p>
            </div>
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