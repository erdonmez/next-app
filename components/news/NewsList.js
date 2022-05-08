import NewsItem from "./NewsItem";
import classes from "./NewsList.module.css";

function NewsList(props) {
  return (
    <ul className={classes.list}>
      {props.newsList.map((news) => (
        <NewsItem
          key={news.id}
          id={news.id}
          imageUrl={news.imageUrl}
          title={news.title}
          description={news.description}
        />
      ))}
    </ul>
  );
}

export default NewsList;
