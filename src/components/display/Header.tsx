import Link from 'next/link';

export default function Header() {

  return (
    <header className="bg-white mt-10">
      <nav className=" max-w-[1024px] mx-auto flex items-center justify-between p-10 sm:px-8 font-black text-4xl">
        <div>
          <Link  href="/">&#129382;</Link>
        </div>
        <div>
          <Link title='options'  href="/options">&#128061;</Link>
        </div>
      </nav>
    </header>
  )
}
