import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        <Link href="/manage">Manage</Link>
      </div>
      <div>
        <Link href="/ai">AI</Link>
      </div>
      <div>
        <Link href="/tracker">Tracker....</Link>
      </div>
      {/* <div>
        <Link href="/notes">Notes</Link>
      </div> */}
    </>
  )
}
