const axios = require('axios');

export async function govCensus(req, res) {
  try{
    const response = await axios.get('api.census.gov/data/timeseries/poverty/saipe.html');
    console.log(response)
    return await response.json();
  } catch(error) {
      return [];
}
  }