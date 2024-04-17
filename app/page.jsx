import TopicList from "@/components/topicList";
import { BASE_API_URL } from "@/constant/contant";

export default function Home() {
  if (!BASE_API_URL) {
    return null;
  }
  return <TopicList />;
}
