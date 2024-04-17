import EditTopicForm from "@/components/editTopicForm";
import { BASE_API_URL } from "@/constant/contant";
const getTopicById = async id => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/topics/${id}`, {
      cache: "no-store"
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    return res.json();
  } catch (e) {
    console.log(e);
  }
};
export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;
  console.log(topic);
  return <EditTopicForm id={id} title={title} description={description} />;
}
