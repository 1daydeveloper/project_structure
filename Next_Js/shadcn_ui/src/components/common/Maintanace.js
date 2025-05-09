import Image from "next/image";

export default function Maintanance() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          src="/img/logo.png"
          alt="Logo"
          width={180}
          height={38}
          priority
        />
        <ul className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
          We are in Welding Process 🥽
          
            .
          </li>
          <li className="tracking-[-.01em]">
          For More details Contact +91 9677773101

          </li>
        </ul>

       
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          All Rights Reserved @2025 OD2
        </a>
      </footer>
    </div>
  );
}
