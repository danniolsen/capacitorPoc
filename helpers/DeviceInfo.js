import { Capacitor } from '@capacitor/core'

export const ANDROID = Capacitor.getPlatform() === 'android'
export const IOS = Capacitor.getPlatform() === 'ios'
