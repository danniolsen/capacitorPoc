import { useEffect } from 'react'
import { App } from '@capacitor/app'
import { useRouter } from 'next/dist/client/router'

const AppUrlListener = () => {
  const router = useRouter()

  useEffect(() => {
    App.addListener('appUrlOpen', (event) => {
      // Example url: https://beerswift.app/tabs/tab2
      // slug = /tabs/tab2
      const slug = event.url.split('.app').pop()
      if (slug) {
        router.push(slug)
      }
      // If no match, do nothing - let regular routing
      // logic take over
    })
  }, [router])

  return null
}

export default AppUrlListener
