"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_API_URL } from "@/constant/contant";
export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_API_URL}/api/topics/${id} `, {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ newTitle, newDescription })
      });
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-3">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add topic"
            className="border border-slate-500 px-8 w-full mt-7 h-10"
            value={newTitle}
            onChange={e => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Add Description"
            className="border border-slate-500 px-8 w-full mt-7 h-10"
            value={newDescription}
            onChange={e => setNewDescription(e.target.value)}
          />
          <button className="bg-green-500 text-white py-2 px-6 w-fit mt-7">
            Update Topic
          </button>
        </form>
      </div>
    </>
  );
}
