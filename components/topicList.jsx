import Link from "next/link";
import RemoveBtn from "./removeBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store"
    });
    if (!res.ok) {
      throw new Error("Failed");
    }
    return res.json();
  } catch (e) {
    console.error(e);
  }
};

export default async function TopicList() {
  const data = await getTopics();

  return (
    <>
      {data &&
        data.topicDetail.map((t, id) => {
          return (
            <div
              key={id}
              className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
            >
              <div>
                <h2 className="font-bold">{t.title}</h2>
                <div className="">{t.description}</div>
              </div>
              <div className="flex gap-2">
                <RemoveBtn id={t._id} />
                <Link href={`./editTopic/${t._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
}