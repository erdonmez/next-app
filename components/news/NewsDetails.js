import classes from "./NewsDetails.module.css";

const NewsDetails = (props) => {
  return (
    <section className={classes.detail}>
      <h1>{props.title}</h1>
      <img src={props.imageUrl} alt={props.title}></img>
      <div>{props.description}</div>
    </section>
  );
};

export default NewsDetails;
