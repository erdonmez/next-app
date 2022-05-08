import NewsList from "../components/news/NewsList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React News</title>
        <meta name="description" content="Recent React News"></meta>
      </Head>
      <NewsList newsList={props.newsList}></NewsList>
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect("");
  const db = client.db();
  const newsCollection = db.collection("news");
  const result = await newsCollection.find().toArray();
  client.close();

  return {
    props: {
      newsList: result.map((news) => ({
        title: news.title,
        description: news.description,
        imageUrl: news.imageUrl,
        id: news._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
