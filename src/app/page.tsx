import dynamic from 'next/dynamic'

import Navbar from '@/components/Navbar'
import { performRequest } from '@/datocms/performRequest'
import { ALL_MAPS_QUERY } from '@/queries/allMapsQuery'
import { AllMaps } from '@/types/allMaps'

export default async function Home() {
  const MyAwesomeMap = dynamic(() => import('@/components/Map'), { ssr: false })

  const {
    data: { allMaps },
  } = await performRequest<{ data: { allMaps: AllMaps[] } }>({
    query: ALL_MAPS_QUERY,
  })

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <MyAwesomeMap className="min-h-screen z-10" locations={allMaps} />
    </main>
  )
}
