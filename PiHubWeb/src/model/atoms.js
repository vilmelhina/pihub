import {atom} from 'recoil';


// Inside climate

export const insideTemperatureState = atom({
  key: 'insideTemperatureState',
  default: 20,
})

export const insideHumidityState = atom({
  key: 'insideHumidityState',
  default: 40,
})

// Outside weather

export const outsideTemperatureState = atom({
  key: 'outsideTemperatureState',
  default: -12,
})

export const outsideHumidityState = atom({
  key: 'outsideHumidityState',
  default: 30,
})