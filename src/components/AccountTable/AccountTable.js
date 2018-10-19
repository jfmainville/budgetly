import React from 'react';
import PropTypes from 'prop-types';
import classes from './AccountTable.module.scss';
import AccountCard from "./AccountCard/AccountCard";
import AccountCategoryDropdown from "./AccountCategoryDropdown/AccountCategoryDropdown";
import AccountEnterpriseInput from "./AccountEnterpriseInput/AccountEnterpriseInput";


const accountTable = (props) => {
    const accounts = props.accounts;
    return (
        <div className={classes.Container}>
            <div className={classes.AccountCategoryDropdown}>
                <AccountEnterpriseInput

                />
                <AccountCategoryDropdown
                    categories={categories}
                    categorySearchInput={props.categorySearchInput}
                    showCategoryDropdown={props.showCategoryDropdown}
                    handleCategorySearch={props.handleCategorySearch}
                    handleClearCategorySearch={props.handleClearCategorySearch}
                    handleShowCategoryDropdown={props.handleShowCategoryDropdown}
                    handleCategorySearchSelection={props.handleCategorySearchSelection}
                />
                <button className={classes.NewAccountSectionButtonSave}>Add Account</button>
            </div>
            <div className={classes.TableHeader}>
                <div className={classes.TableHeaderSelectColumn}>
                    <input
                        className={classes.TableHeaderCheckboxInput}
                        type="checkbox"
                    />
                </div>
                <div className={classes.TableHeaderEnterpriseColumn}>
                    Enterprise
                </div>
                <div className={classes.TableHeaderCategoryColumn}>
                    Category
                </div>
                <div className={classes.TableHeaderTotalColumn}>
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