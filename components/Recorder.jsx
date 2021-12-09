import { useState } from 'react'
import FeatherIcon from 'feather-icons-react'

const Recorder = () => {
  const [micIsOn, setMicIsOn] = useState(false)
  const [recording, setRecording] = useState('')

  return (
    <div className="py-2">
      <div className="mx-2 flex justify-between items-center">
        <p onClick={() => setMicIsOn(!micIsOn)}>
          <FeatherIcon
            className={micIsOn ? 'text-green-500' : 'text-black'}
            icon={micIsOn ? 'mic' : 'mic-off'}
          />
        </p>

        <FeatherIcon
          icon="trash"
          className="w-4 h-4"
          onClick={() => setRecording(false)}
        />
      </div>
      <p className="py-4 text-sm mx-2 text-gray-500">{recording}</p>
    </div>
  )
}

export default Recorder
