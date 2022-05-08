import { useEffect, useState } from "react";
import Card from "../ui/Card";
import classes from "./NewNews.module.css";

function NewNewsForm(props) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {
    if (pageOpen) {
      props.onAddNews({ title, description, imageUrl });
    }
    setPageOpen(true);
  }, [buttonClicked]);

  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">News Title</label>
          <input
            type="text"
            required
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">News Image</label>
          <input
            type="url"
            required
            id="image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button
            onClick={() => {
              setButtonClicked(!buttonClicked);
            }}
          >
            Add News
          </button>
        </div>
      </form>
    </Card>
  );
}

export default NewNewsForm;
