import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link
        href={"/"}
        className="text-white font-bold uppercase text-xl italic"
      >
        Crud Operations
      </Link>
      <Link
        href={"/addTopic"}
        className="bg-white p-3 uppercase rounded-lg text-xl italic font-semibold"
      >
        Add Topic
      </Link>
    </nav>
  );
}
