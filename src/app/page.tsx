import dynamic from 'next/dynamic'

export default function Home() {
  const MyAwesomeMap = dynamic(() => import('@/components/Map'), { ssr: false })

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <MyAwesomeMap className="min-h-screen" />
    </main>
  )
}
