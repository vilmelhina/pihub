import {atom, selector} from 'recoil';
import {getHumidity, getPressure, getTemperature} from "../integration/climateapi";


// Inside climate

export const insideTemperatureState = selector({
  key: 'insideTemperatureState',
  get: async () => {
    return await getTemperature();
  },
})

export const insideHumidityState = selector({
  key: 'insideHumidityState',
  get: async () => {
    return await getHumidity();
  },
})

export const insidePressureState = selector({
  key: 'insidePressureState',
  get: async () => {
    return await getPressure();
  },
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