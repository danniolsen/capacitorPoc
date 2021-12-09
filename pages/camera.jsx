import { useState, useEffect } from 'react'
import { Camera, CameraResultType } from '@capacitor/camera'
import FeatherIcon from 'feather-icons-react'

const CameraScreen = () => {
  const [latestImage, setLatestImage] = useState('')

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
    })

    const imageUrl = image.base64String

    setLatestImage(imageUrl)
    saveImage(imageUrl)
  }

  const saveImage = async (url) => {
    localStorage.setItem('image', url)
  }

  const getLastImage = () => {
    const value = localStorage.getItem('image')
    setLatestImage(value)
  }
  useEffect(() => {
    getLastImage()
  }, [])

  return (
    <div className="relative mx-2 mt-2">
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        src={`data:image/png;base64, ${latestImage}`}
        alt="hej"
        className="aspect-w-16 aspect-h-16"
      />

      <div className="fixed w-full z-10 bottom-24 left-0 items-center">
        <div
          className="w-16 h-16 bg-gray-400 rounded-full flex justify-center items-center m-auto"
          onClick={takePicture}
        >
          <FeatherIcon icon="camera" className="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  )
}

export default CameraScreen
