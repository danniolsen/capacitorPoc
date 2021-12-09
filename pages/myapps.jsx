import { useState, useEffect } from 'react'
import { AppLauncher } from '@capacitor/app-launcher'
import { registerPlugin } from '@capacitor/core'

const MyApps = () => {
  const Echo = registerPlugin('Echo')
  //const ViewStore = registerPlugin('OnInstall')
  const [appsData] = useState([
    {
      id: 0,
      appName: 'Instagram',
      scheme: 'instagram://',
      appstoreLink: '389801252',
      googlePlayLink:
        'https://play.google.com/store/apps/details?id=com.instagram.android',
    },
    {
      id: 1,
      appName: 'Facebook',
      scheme: 'fb://',
      appstoreLink: '284882215',
      googlePlayLink:
        'https://play.google.com/store/apps/details?id=com.facebook.katana',
    },
    {
      id: 2,
      appName: 'Twitter',
      scheme: 'twitter://',
      appstoreLink: '333903271',
      googlePlayLink:
        'https://play.google.com/store/apps/details?id=com.twitter.android',
    },
  ])

  const openApplication = async (isInstalled, appData) => {
    if (isInstalled) {
      await AppLauncher.openUrl({ url: appData.scheme })
    } else {
      await Echo.echo({ appId: appData.appstoreLink })
    }
  }

  return (
    <div>
      <div className="flex mx-2 justify-around">
        {appsData.map((appData) => (
          <App
            key={appData.id}
            appName={appData.appName}
            openApp={(isInstalled) => openApplication(isInstalled, appData)}
            scheme={appData.scheme}
          />
        ))}
      </div>
    </div>
  )
}

const App = ({ appName, openApp, scheme }) => {
  const [installed, setInstalled] = useState()

  const onFocus = () => {
    checkCanOpenUrl()
  }

  useEffect(() => {
    window.addEventListener('focus', onFocus)

    return () => window.removeEventListener('focus', onFocus)
  })

  useEffect(() => {
    checkCanOpenUrl()
  }, []) // eslint-disable-line

  const checkCanOpenUrl = async () => {
    const { value } = await AppLauncher.canOpenUrl({ url: scheme })
    setInstalled(value)
  }

  return (
    <div
      className="w-28 h-28 mt-4 flex rounded-lg bg-white items-center justify-center"
      onClick={() => {
        openApp(installed)
      }}
    >
      <div className="flex flex-col items-center space-y-3">
        <p>{appName}</p>
        <div
          className={`${
            !installed ? 'bg-blue-500' : 'bg-gray-500'
          } py-1 px-3 rounded-full`}
        >
          <p className="text-white text-sm">{installed ? 'Open' : 'Install'}</p>
        </div>
      </div>
    </div>
  )
}

export default MyApps
