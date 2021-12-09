import FeatherIcon from 'feather-icons-react'
import Audio1 from '../public/audioOne.mp3'

const Sounds = () => {
  const play = async () => {
    const audio = document.getElementById('player')
    await audio.play()
  }

  return (
    <>
      <div className="mx-2 mt-2">
        <SoundClip
          audio={Audio1}
          title="Sound clip on. 1"
          play={(audio) => play(audio)}
        />
        <audio id="player">
          <source src={Audio1} type="audio/mpeg" />
          <source src={Audio1} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </>
  )
}

const SoundClip = ({ audio, title, play }) => {
  return (
    <div className="bg-white p-4 rounded-lg flex items-center justify-between">
      <p>{title}</p>

      <div
        className="w-7 h-7 bg-gray-400 rounded-full flex justify-center items-center"
        onClick={() => play(audio)}
      >
        <FeatherIcon icon="play" className="w-4 h-4 text-white" />
      </div>
    </div>
  )
}

export default Sounds
