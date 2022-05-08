import NewNewsForm from "../../components/news/NewNews";
import { useRouter } from "next/router";

const NewNewsPage = () => {
  const router = useRouter();
  const addNews = async (props) => {
    const response = await fetch("/api/new-news", {
      method: "POST",
      body: JSON.stringify({ ...props }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/");
  };

  return <NewNewsForm onAddNews={addNews}></NewNewsForm>;
};

export default NewNewsPage;
