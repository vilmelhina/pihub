import {selector} from 'recoil';
import {getHumidity, getPressure, getTemperature} from "../integration/climateapi";
import {getOutsideHumidity, getOutsideTemperature} from "../integration/weatherapi";
import {getDepartures} from "../integration/trainsapi";


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

export const outsideTemperatureState = selector({
  key: 'outsideTemperatureState',
  get: async () => {
    return await getOutsideTemperature();
  },
})

export const outsideHumidityState = selector({
  key: 'outsideHumidityState',
  get: async () => {
    return await getOutsideHumidity();
  },
})

// Trains

export const departuresState = selector({
  key: 'departuresState',
  get: async () => {
    return await getDepartures()
  }
})