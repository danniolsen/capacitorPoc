import { useEffect, useState } from 'react'
import { Device } from '@capacitor/device'

const DeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    name: '-',
    model: '-',
    platform: '-',
    osVersion: '-',
    manufacturer: '-',
  })
  const [batteryInfo, setBatteryInfo] = useState({
    isCharging: '-',
    batteryLevel: '-',
  })

  const logDeviceInfo = async () => {
    const info = await Device.getInfo()
    setDeviceInfo(info)
  }

  const logBatteryInfo = async () => {
    const info = await Device.getBatteryInfo()
    setBatteryInfo(info)
  }

  useEffect(() => {
    logDeviceInfo()
    logBatteryInfo()
  }, [])

  return (
    <div className="p-4">
      <div className="pb-4">
        <p>device info</p>
        <p>name: {deviceInfo?.name}</p>
        <p>model: {deviceInfo?.model}</p>
        <p>platform: {deviceInfo?.platform}</p>
        <p>osVersion: {deviceInfo?.osVersion}</p>
        <p>manufacturer: {deviceInfo?.manufacturer}</p>
      </div>

      <div className="pb-4">
        <p>isCharging: {batteryInfo?.isCharging ? 'yes' : 'No'}</p>
        <p>batteryLevel: {batteryInfo?.batteryLevel}</p>
      </div>
    </div>
  )
}

export default DeviceInfo
