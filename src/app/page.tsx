import { performRequest } from '@/datocms/performRequest'
import { ALL_MAPS_QUERY } from '@/queries/allMapsQuery'
import { AllMaps } from '@/types/allMaps'
import dynamic from 'next/dynamic'

export default async function Home() {
  const MyAwesomeMap = dynamic(() => import('@/components/Map'), { ssr: false })

  const {
    data: { allMaps },
  } = await performRequest<{ data: { allMaps: AllMaps[] } }>({
    query: ALL_MAPS_QUERY,
  })

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <MyAwesomeMap className="min-h-screen" locations={allMaps} />
    </main>
  )
}
