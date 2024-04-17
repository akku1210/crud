import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import TopicList from "@/components/topicList";
import { BASE_API_URL } from "@/constant/contant";
import Image from "next/image";

export default function Home() {
  if (!BASE_API_URL) {
    return null;
  }
  return (
    <>
      <TopicList />
    </>
  );
}
