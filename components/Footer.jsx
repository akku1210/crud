export default function Footer() {
  return (
    <div className="flex flex-col  bg-slate-800 px-5 py-5 h-42">
      <h1 className="text-white font-bold uppercase italic">
        Crud Operation Using Next.JS With Mongodb
      </h1>
      <h2 className="text-white font-bold mt-4 italic">Akanksha Singh</h2>
      <h2 className="text-white font-semibold mt-2 italic">
        Frontend Developer
      </h2>
      <div className="flex gap-10">
        <a
          className="text-white font-semibold mt-2 italic "
          href="https://github.com/akku1210/crud/tree/master"
          target="_blank"
        >
          Github
        </a>
        <a
          className="text-white font-semibold mt-2 italic "
          href="https://www.linkedin.com/in/akanksha-singh-63ba1214a"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="text-white font-semibold mt-2 italic "
          href="https://crud-operation-theta.vercel.app/"
          target="_blank"
        >
          Deployment Link
        </a>
      </div>
    </div>
  );
}
