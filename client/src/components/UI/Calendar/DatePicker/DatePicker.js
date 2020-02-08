import React, { Component } from "react";
import moment from "moment";
import classes from "./DatePicker.module.scss";

class DatePicker extends Component {
	state = {
		monthStartDate: moment()
			.startOf("month")
			.format("YYYY-MM-DD"),
		monthHeader: null,
		yearHeader: null,
		activeMonthDate: null,
		datesArray: [],
		monthsArray: null,
		selectedDate: null,
		today: moment().format("YYYY-MM-DD"),
		firstMonthSelect: true
	};

	handleMonthData = () => {
		moment.locale("en-ca");
		const monthStartDate = this.state.monthStartDate;
		const monthHeader = moment(monthStartDate).format("MMMM YYYY");
		const activeMonthDate = moment(monthStartDate).format("YYYY-MM");
		let activeMonthStartDate = moment(monthStartDate)
			.startOf("month")
			.startOf("week")
			.format("YYYY-MM-DD");
		let activeMonthEndDate = moment(monthStartDate)
			.add(5, "week")
			.format("YYYY-MM-DD");
		const datesArray = [];
		while (activeMonthStartDate <= activeMonthEndDate) {
			datesArray.push({
				date_number: moment(activeMonthStartDate).format("DD"),
				date_full: activeMonthStartDate
			});
			activeMonthStartDate = moment(activeMonthStartDate)
				.add(1, "days")
				.format("YYYY-MM-DD");
		}
		this.setState({
			monthHeader: monthHeader,
			datesArray: datesArray,
			activeMonthDate: activeMonthDate
		});
	};

	handleMonthSelection = () => {
		if (this.state.firstMonthSelect) {
			const monthsArray = [];
			for (let i = 1; i <= 12; i++) {
				monthsArray.push({
					month_number: i,
					month_full: moment()
						.month(i - 1)
						.format("MMM")
				});
			}
			this.setState({
				firstMonthSelect: false,
				yearHeader: moment().year(),
				monthsArray: monthsArray
			});
		}
		if (!this.state.firstMonthSelect) {
			this.setState({
				firstMonthSelect: true,
				monthsArray: null
			});
		}
	};

	handleMonthDateRange = month => {
		const activeMonth = month.month_full;
		const currentYear = this.state.yearHeader;
		const monthStartDate = moment()
			.month(activeMonth)
			.year(currentYear)
			.startOf("month")
			.format("YYYY-MM-DD");
		this.setState({
			firstMonthSelect: true,
			monthStartDate: monthStartDate,
			monthsArray: null
		});
	};

	handlePreviousYear = () => {
		const yearHeader = this.state.yearHeader - 1;
		const currentYear = yearHeader;
		const monthStartDate = this.state.monthStartDate;
		const previousMonthStartDate = moment(monthStartDate)
			.year(currentYear)
			.startOf("month")
			.format("YYYY-MM-DD");
		this.setState({
			yearHeader: yearHeader,
			monthStartDate: previousMonthStartDate
		});
	};

	handleNextYear = () => {
		const yearHeader = this.state.yearHeader + 1;
		const currentYear = yearHeader;
		const monthStartDate = this.state.monthStartDate;
		const nextYearStartDate = moment(monthStartDate)
			.year(currentYear)
			.startOf("month")
			.format("YYYY-MM-DD");
		this.setState({
			yearHeader: yearHeader,
			monthStartDate: nextYearStartDate
		});
	};

	handlePreviousMonth = () => {
		const monthStartDate = this.state.monthStartDate;
		const previousMonth = moment(monthStartDate)
			.subtract(1, "month")
			.format("YYYY-MM-DD");
		const previousMonthStartDate = moment(previousMonth)
			.startOf("month")
			.format("YYYY-MM-DD");
		this.setState({
			monthStartDate: previousMonthStartDate
		});
	};

	handleNextMonth = () => {
		const monthStartDate = this.state.monthStartDate;
		const nextMonth = moment(monthStartDate)
			.add(1, "month")
			.format("YYYY-MM-DD");
		const nextMonthStartDate = moment(nextMonth)
			.startOf("month")
			.format("YYYY-MM-DD");
		this.setState({
			monthStartDate: nextMonthStartDate
		});
	};

	handleSelectedDate = date => {
		this.setState({
			selectedDate: date.date_full
		});
		this.props.handleSelectedDate(date);
	};

	handleOtherSelectedDate = date => {
		const otherSelectedDate = date.date_full;
		const nextMonthStartDate = moment(otherSelectedDate)
			.startOf("month")
			.format("YYYY-MM-DD");
		this.setState({
			monthStartDate: nextMonthStartDate,
			selectedDate: otherSelectedDate
		});
	};

	handleCurrentMonthTodayDate = () => {
		const currentMonthStartDate = moment()
			.startOf("month")
			.format("YYYY-MM-DD");
		const currentMonthToday = moment().format("YYYY-MM-DD");
		this.setState({
			monthStartDate: currentMonthStartDate,
			selectedDate: currentMonthToday
		});
		this.props.handleSelectedDate(currentMonthToday);
	};

	handleTomorrowDate = () => {
		const currentMonthStartDate = moment()
			.add(1, "day")
			.startOf("month")
			.format("YYYY-MM-DD");
		const tomorrowDate = moment()
			.add(1, "day")
			.format("YYYY-MM-DD");
		this.setState({
			monthStartDate: currentMonthStartDate,
			selectedDate: tomorrowDate
		});
		this.props.handleSelectedDate(tomorrowDate);
	};

	handleNextWeekDate = () => {
		const currentMonthStartDate = moment()
			.add(7, "day")
			.startOf("month")
			.format("YYYY-MM-DD");
		const nextWeekDate = moment()
			.add(7, "day")
			.format("YYYY-MM-DD");
		this.setState({
			monthStartDate: currentMonthStartDate,
			selectedDate: nextWeekDate
		});
		this.props.handleSelectedDate(nextWeekDate);
	};

	handleActiveDateRemove = () => {
		this.setState({
			selectedDate: null
		});
		this.props.handleSelectedDate();
	};

	componentDidMount () {
		this.handleMonthData();
	}

	componentDidUpdate (prevProps, prevState) {
		if (this.state.monthStartDate !== prevState.monthStartDate) {
			this.handleMonthData();
		}
	}

	render () {
		return (
			<div className={classes.DatePickerContainer}>
				{!this.state.monthsArray ? (
					<div className={classes.DatePicker}>
						<div className={classes.Month}>
							<ul>
								<li>
									<button
										onClick={this.handlePreviousMonth}
										className={classes.PreviousMonth}
									>
										<svg>
											<use xlinkHref="/assets/sprite.svg#icon-chevron-left"/>
										</svg>
									</button>
								</li>

								<li>
									<button
										onClick={this.handleNextMonth}
										className={classes.NextMonth}
									>
										<svg>
											<use xlinkHref="/assets/sprite.svg#icon-chevron-right"/>
										</svg>
									</button>
								</li>
								<li className={classes.MonthHeader}>
									<button onClick={this.handleMonthSelection}>
										{this.state.monthHeader}
									</button>
								</li>
							</ul>
						</div>
						<ul className={classes.WeekDays}>
							<li>S</li>
							<li>M</li>
							<li>T</li>
							<li>W</li>
							<li>T</li>
							<li>F</li>
							<li>S</li>
						</ul>
						<ul className={classes.Days}>
							{this.state.datesArray.map((date, index) => (
								<li key={index}>
									{date.date_full === this.state.selectedDate ? (
										<button
											id={index}
											onClick={() => this.handleSelectedDate(date)}
											className={classes.SelectedDate}
										>
											{date.date_number}
										</button>
									) : date.date_full === this.state.today ? (
										<button
											id={index}
											onClick={() => this.handleSelectedDate(date)}
											className={classes.Today}
										>
											{date.date_number}
										</button>
									) : date.date_full.match(this.state.activeMonthDate) ? (
										<button
											id={index}
											onClick={() => this.handleSelectedDate(date)}
											className={classes.CurrentMonthDays}
										>
											{date.date_number}
										</button>
									) : (
										<button
											id={index}
											onClick={() => this.handleOtherSelectedDate(date)}
											className={classes.OtherMonthDays}
										>
											{date.date_number}
										</button>
									)}
								</li>
							))}
						</ul>
					</div>
				) : (
					<div className={classes.DatePicker}>
						<div className={classes.Month}>
							<ul>
								<li>
									<button
										onClick={this.handlePreviousYear}
										className={classes.PreviousMonth}
									>
										<svg>
											<use xlinkHref="/assets/sprite.svg#icon-chevron-left"/>
										</svg>
									</button>
								</li>

								<li>
									<button
										onClick={this.handleNextYear}
										className={classes.NextMonth}
									>
										<svg>
											<use xlinkHref="/assets/sprite.svg#icon-chevron-right"/>
										</svg>
									</button>
								</li>
								<li className={classes.MonthHeader}>
									<button onClick={this.handleMonthSelection}>
										{this.state.yearHeader}
									</button>
								</li>
							</ul>
						</div>
						<div className={classes.Months}>
							<ul>
								{this.state.monthsArray.map((month, index) => (
									<li key={index}>
										<button onClick={() => this.handleMonthDateRange(month)}>
											{month.month_full}
										</button>
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default DatePicker;
