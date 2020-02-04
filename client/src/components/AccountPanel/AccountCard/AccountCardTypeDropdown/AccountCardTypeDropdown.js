import React from 'react'
import classes from './AccountCardTypeDropdown.module.scss'
import { Manager, Reference, Popper } from 'react-popper'

const accountCardTypeDropdown = props => {
	const account_type = props.account.type
	const account_id = props.account.id
	const types = props.types

	return (
		<Manager>
			<div className={classes.TypeDropdown}>
				<Reference>
					{({ ref }) => (
						<button
							id={account_id}
							ref={ref}
							className={classes.TypeDropdownButton}
							onClick={() => props.handleAccountCardTypeDropdownShowDropdown(props.account)}
						>
							<svg className={classes.TypeDropdownButtonIcon}>
								<use xlinkHref="/assets/sprite.svg#icon-chevron-down"/>
							</svg>
						</button>
					)}
				</Reference>
				<Reference>
					{({ ref }) => (
						<p
							ref={ref}
							className={classes.TypeDropdownText}
						>
							{account_type}
						</p>
					)}
				</Reference>
				{props.accountCardTypeDropdownShowDropdown.id === account_id ? (
					<div className={classes.TransparentBackgroundWrapper}>
						<div
							onClick={props.handleAccountCardTypeDropdownShowDropdown}
							className={classes.TransparentBackground}
						/>
						<Popper placement="bottom" positionFixed="true">
							{({ ref, style, placement }) => (
								<div
									ref={ref}
									style={style}
									data-placement={placement}
									className={classes.ShowTypeDropdown}
								>
									{types.map((type, index) =>
										<div
											className={classes.ShowTypeDropdownRow}
											key={index}
											onClick={() => props.handleAccountUpdate(props.account, type)}
										>
											<p className={classes.ShowTypeDropdownTitle}>
												{type}
											</p>
										</div>
									)}
								</div>
							)}
						</Popper>
					</div>
				) : null}
			</div>
		</Manager>
	)
}

export default accountCardTypeDropdown
