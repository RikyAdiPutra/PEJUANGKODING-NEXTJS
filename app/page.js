import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
        <div className="flex justify-between">
          <div>logo</div>
          <div>
            <ul className='flex gap-5'>
              <li><Link href="/" className='hover:text-red-400'>CATALOGUE</Link></li>
              <li><Link href="/" className='hover:text-red-400'>FASHION</Link></li>
              <li><Link href="/" className='hover:text-red-400'>FAVOURITE</Link></li>
            </ul>
          </div>
        </div>
    </main>
  )
}
