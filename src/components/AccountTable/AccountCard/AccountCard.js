import React from 'react';
import classes from "./AccountCard.module.scss";


const accountCard = (props) => {
    const account = props.account;
    const totalAmount = new Intl.NumberFormat('en-CA', {style: 'currency', currency: 'CAD'}).format(account.total);
    return (
        <div className={classes.TableRow}>
            <div className={classes.TableSelectRow}>
                <input
                    className={classes.TableCheckboxInput}
                    type="checkbox"
                />
            </div>
            <div className={classes.TableEnterpriseRow}>
                {account.enterprise}
            </div>
            <div className={classes.TableCategoryRow}>
                {account.category}
            </div>
            <div className={classes.TableTotalRow}>
                {totalAmount}
            </div>
        </div>
    )
};

export default accountCard;