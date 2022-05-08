import Card from "../ui/Card";
import classes from "./NewsItem.module.css";
import { useRouter } from "next/router";

function NewsItem(props) {
  const router = useRouter();
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.imageUrl} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <div>{props.description}</div>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              router.push(`/${props.id}`);
            }}
          >
            Show Details
          </button>
        </div>
      </Card>
    </li>
  );
}

export default NewsItem;
