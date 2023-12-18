const mongoose = require('mongoose');

const dataGreenhouseSchema = new mongoose.Schema({
  greenhouseId: { type: String, default: null },
  temperature: {
    value: { type: Number, default: null },
    unit: { type: String, default: '°C' },
  },
  humidity: {
    value: { type: Number, default: null },
    unit: { type: String, default: '%' },
  },
  soil_moisture: {
    value: { type: Number, default: null },
    unit: { type: String, default: '%' },
  },
  status_rain: { type: String, default: null },
  status_light_sensor: { type: String, default: null },
  status_led: { type: String, default: null },
  status_fan: { type: String, default: null },
  status_pump: { type: String, default: null },
  status_door: { type: String, default: null },
  roof: { type: String, default: null },
  timestamp: { type: Date, default: Date.now },
});

const DataGreenhouse1 = mongoose.model('greenHouse1', dataGreenhouseSchema);
const DataGreenhouse2 = mongoose.model('greenHouse2', dataGreenhouseSchema);

module.exports = {
  DataGreenhouse1,
  DataGreenhouse2,
};
