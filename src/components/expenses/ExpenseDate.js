// import css
import "./expenseDate.css";

function expenseDate(props) {
  // console.log(typeof props.date);
  // const options = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // };
  //   const formatDate = new Intl.DateTimeFormat("en-US", options).format(
  //     props.date
  //   );
  //   another method of calculating date
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default expenseDate;
