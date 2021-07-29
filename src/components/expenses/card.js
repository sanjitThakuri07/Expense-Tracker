import "./card.css";

function card(props) {
  // accepting classes
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default card;
