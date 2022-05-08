import NewsDetails from "../../components/news/NewsDetails";
import { MongoClient, ObjectId } from "mongodb";

const NewsDetailsPage = (props) => {
  return <NewsDetails {...props.news}></NewsDetails>;
};

export async function getStaticProps(context) {
  const newsId = context.params.newsId;
  const client = await MongoClient.connect("");
  const db = client.db();
  const newsCollection = db.collection("news");
  const news = await newsCollection.findOne({ _id: ObjectId(newsId) });
  client.close();

  return {
    props: {
      news: {
        id: news._id.toString(),
        title: news.title,
        description: news.description,
        imageUrl: news.imageUrl,
      },
    },
  };
}

export async function getStaticPaths() {
  const client = await MongoClient.connect("");
  const db = client.db();
  const newsCollection = db.collection("news");

  const result = await newsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: result.map((news) => ({ params: { newsId: news._id.toString() } })),
  };
}

export default NewsDetailsPage;
