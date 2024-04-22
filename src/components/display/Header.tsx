import Link from 'next/link';

export default function Header() {

  return (
    <header className="bg-white">
      <nav className=" max-w-[1024px] mx-auto flex items-center justify-between p-2 sm:px-8 font-black">
        <div className="text-4xl">
          <Link  href="/">&#9822;</Link>
        </div>
        <div className="text-4xl px-2 sm:px-8">
          <Link  href="/options">&#9881;</Link>
        </div>
      </nav>
    </header>
  )
}
