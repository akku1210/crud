"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { BASE_API_URL } from "@/constant/contant";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(`${BASE_API_URL}/api/topics?id=${id}`, {
        method: "DELETE"
      });
      if (res.ok) router.refresh();
    }
  };
  return (
    <button className="text-red-400" onClick={() => removeTopic()}>
      <HiOutlineTrash size={24}></HiOutlineTrash>
    </button>
  );
}
