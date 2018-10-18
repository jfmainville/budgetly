import React from 'react';
import PropTypes from 'prop-types';
import classes from './AccountTable.module.scss';
import AccountCard from "./AccountCard/AccountCard";


const accountTable = (props) => {
    const accounts = props.accounts;
    return (
        <div className={classes.Container}>
            <div className={classes.ActionButtons}>
                <button className={classes.ButtonAddAccount}>Add Account</button>
                <button className={classes.ButtonExportCSV}>Export to CSV</button>
            </div>
            <div className={classes.TableHeaders}>
                <div className={classes.TableSelectColumn}>
                    <input
                        className={classes.TableCheckboxInput}
                        type="checkbox"
                    />
                </div>
                <div className={classes.TableDateColumn}>
                    Date
                </div>
                <div className={classes.TableEnterpriseColumn}>
                    Enterprise
                </div>
                <div className={classes.TableCategoryColumn}>
                    Category
                </div>
                <div className={classes.TableTotalColumn}>
                    Total
                </div>
            </div>
            <div className={classes.TableRows}>
                {accounts.map(account =>
                    <AccountCard
                        key={account.id}
                        account={account}
                    />
                )}
            </div>
        </div>
    )
};

accountTable.propTypes = {
    accounts: PropTypes.array,
    account: PropTypes.object
};

export default accountTable;