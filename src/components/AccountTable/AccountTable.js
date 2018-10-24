import React from 'react';
import PropTypes from 'prop-types';
import classes from './AccountTable.module.scss';
import AccountCard from "./AccountCard/AccountCard";
import AccountCategoryDropdown from "./AccountCategoryDropdown/AccountCategoryDropdown";
import AccountEnterpriseInput from "./AccountEnterpriseInput/AccountEnterpriseInput";
import AccountTypeDropdown from "./AccountTypeDropdown/AccountTypeDropdown";


const accountTable = (props) => {
    const accounts = props.accounts.sort((a, b) => {
        const textA = a.enterprise.toLowerCase();
        const textB = b.enterprise.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    const categories = props.categories;
    return (
        <div className={classes.Container}>
            <div className={classes.NewAccountSection}>
                <button className={classes.NewAccountSectionButtonPlusSave}>
                    <svg className={classes.NewAccountSectionIconPlusSave}>
                        <use
                            xlinkHref="/assets/sprite.svg#icon-plus"/>
                    </svg>
                </button>
                <AccountEnterpriseInput

                />
                <AccountTypeDropdown
                    accounts={accounts}
                    typeSearchInput={props.typeSearchInput}
                    showTypeDropdown={props.showTypeDropdown}
                    handleShowTypeDropdown={props.handleShowTypeDropdown}
                    handleTypeSearch={props.handleTypeSearch}
                    handleClearTypeSearch={props.handleClearTypeSearch}
                    handleTypeSearchSelection={props.handleTypeSearchSelection}
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
    account: PropTypes.object,
    categories: PropTypes.array,
    categorySearchInput: PropTypes.string,
    showCategoryDropdown: PropTypes.bool,
    handleCategorySearch: PropTypes.func,
    handleClearCategorySearch: PropTypes.func,
    handleShowCategoryDropdown: PropTypes.func,
    handleCategorySearchSelection: PropTypes.func,
};

export default accountTable;