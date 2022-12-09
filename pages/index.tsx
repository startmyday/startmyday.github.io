import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        Hello World. <Link href="/ai">AI</Link>
      </div>
      <div>
        Hello World. <Link href="/about">About</Link>
      </div>
    </>
  )
}
