const { DataGreenhouse1, DataGreenhouse2 } = require('../models/dataGreenhouse');
const {
  statusMap,
  rainMap,
  lightSenseMap,
  ledMap,
  fanMap,
  pumpMap,
  doorMap,
  roofMap,
} = require('../models/statusMappings');

const moveIdToFront = (data) => {
  return data.map(item => {
    return {
      "_id": item._id,
      ...item.toJSON()
    };
  });
};

const getGreenhouse1Data = async (req, res, next) => {
  try {
    const data = await DataGreenhouse1.find();
    const transformedData = moveIdToFront(data);

    res.status(200).json(transformedData);
  } catch (error) {
    next(error);
  }
};

const postGreenhouse1Data = async (req, res, next) => {
  try {
    const data = req.body;
    data.timestamp = new Date();

    // Convert temperature, humidity, and soil moisture values
    data.temperature = { value: data.temperature, unit: '°C' };
    data.humidity = { value: data.humidity, unit: '%' };
    data.soil_moisture = { value: data.soil_moisture, unit: '%' };

    // Map values from 1 and 2 to corresponding strings
    data.status_rain = rainMap[data.status_rain];
    data.status_light_sense = lightSenseMap[data.status_light_sense];
    data.status_led = ledMap[data.status_led];
    data.status_fan = fanMap[data.status_fan];
    data.status_pump = pumpMap[data.status_pump];
    data.status_door = doorMap[data.status_door];
    data.roof = roofMap[data.roof];

    const newData = new DataGreenhouse1(data);
    await newData.save();

    console.log('Data for Greenhouse 1 saved successfully');
    res.status(201).send('Data received for Greenhouse 1');
  } catch (error) {
    next(error);
  }
};

const getGreenhouse2Data = async (req, res, next) => {
  try {
    const data = await DataGreenhouse2.find();
    const transformedData = moveIdToFront(data);

    res.status(200).json(transformedData);
  } catch (error) {
    next(error);
  }
};

const postGreenhouse2Data = async (req, res, next) => {
  try {
    const data = req.body;
    data.timestamp = new Date();

    // Convert temperature, humidity, and soil moisture values
    data.temperature = { value: data.temperature, unit: '°C' };
    data.humidity = { value: data.humidity, unit: '%' };
    data.soil_moisture = { value: data.soil_moisture, unit: '%' };

    // Map values from 1 and 2 to corresponding strings
    data.status_rain = rainMap[data.status_rain];
    data.status_light_sense = lightSenseMap[data.status_light_sense];
    data.status_led = ledMap[data.status_led];
    data.status_fan = fanMap[data.status_fan];
    data.status_pump = pumpMap[data.status_pump];
    data.status_door = doorMap[data.status_door];
    data.roof = roofMap[data.roof];

    const newData = new DataGreenhouse2(data);
    await newData.save();

    console.log('Data for Greenhouse 2 saved successfully');
    res.status(201).send('Data received for Greenhouse 2');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getGreenhouse1Data,
  postGreenhouse1Data,
  getGreenhouse2Data,
  postGreenhouse2Data,
};
