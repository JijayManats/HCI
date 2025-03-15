import Image from "next/image";

export default function Profile() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/kagenou.webp"
          alt="Profile Picture"
          width={300}
          height={48}
          priority
        />

        <h1 className="text-3xl font-bold">Welcome to My Page</h1>
        <p className="text-xl">Name: Cris John Manatac</p>
        <p>Address: San Antonio Bay, Laguna</p>
        <p>Contact: 09701187212</p>

        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-violet-700 text-white py-2 px-4 rounded">
            Facebook
          </button>
          <button className="bg-blue-500 hover:bg-violet-700 text-white py-2 px-4 rounded">
            Instagram
          </button>
        </div>
      </main>
    </div>
  );
}
