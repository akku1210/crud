"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_API_URL } from "@/constant/contant";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const handleSubmit = async e => {
    e.preventDefault();
    if (!title || !description) {
      alert("title and description required here");
      return;
    }

    try {
      const res = await fetch(`${BASE_API_URL}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ title, description })
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
    <div className="flex flex-col gap-3 mb-52">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add topic"
          className="border border-slate-500 px-8 w-full mt-7 h-10 italic"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Add Description"
          className="border border-slate-500 px-8 w-full mt-7 h-10 leading-3 italic"
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
        <button className="bg-green-500 text-white py-2 px-6 w-fit mt-7 italic rounded-lg font-bold">
          Add Topic
        </button>
      </form>
    </div>
  );
}
