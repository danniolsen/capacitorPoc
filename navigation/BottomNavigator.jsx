import { useState, useEffect } from 'react'
import FeatherIcon from 'feather-icons-react'
import { useRouter } from 'next/dist/client/router'

const BottomNavigator = () => {
  const router = useRouter()
  const [activeRoute, setActiveRoute] = useState(navigationRoutes[0])

  const navigate = (tab) => {
    tab?.id !== activeRoute?.id && setActiveRoute(tab)
    router.push(tab?.pathname)
  }

  useEffect(() => {
    const currentPath = router?.pathname
    const foundRoute = navigationRoutes?.find(
      ({ pathname }) => pathname === currentPath
    )
    setActiveRoute(foundRoute ? foundRoute : navigationRoutes[0])
  }, [router])

  return (
    <div className="fixed bottom-0 left-0 bg-white flex">
      <div className="w-screen mb-6 flex">
        {navigationRoutes.map((tab) => (
          <div
            key={tab?.id}
            onClick={() => navigate(tab)}
            className="w-full flex justify-center py-4"
          >
            <Tab
              id={tab?.id}
              icon={tab?.icon}
              pathname={tab?.pathname}
              activeRoute={activeRoute}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BottomNavigator

const Tab = ({ id, icon, activeRoute }) => {
  return (
    <FeatherIcon
      icon={icon}
      className={`w-6 h-6 ${
        activeRoute?.id === id ? 'text-black' : 'text-gray-300'
      }`}
    />
  )
}

const navigationRoutes = [
  { id: 0, icon: 'list', pathname: '/' },
  { id: 1, icon: 'link', pathname: '/myapps' },
  { id: 2, icon: 'camera', pathname: '/camera' },
  { id: 3, icon: 'smartphone', pathname: '/device' },
  { id: 4, icon: 'volume-2', pathname: '/sounds' },
]
