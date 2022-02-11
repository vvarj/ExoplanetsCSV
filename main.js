const csv = require('csv-parser')
const fs = require('fs')
const habPlanet = [];

fs.createReadStream('kepler_data.csv')
  .pipe(csv())
  .on('data', (element) => {
    if (element['koi_disposition'] == 'CONFIRMED' && element['koi_insol'] > 0.36 && element['koi_insol'] < 1.11 && element['koi_prad'] < 1.6) {
      habPlanet.push(element);
    }
  }
  )
  .on('end', () => {
    console.log('The habitual Planets are :');

    habPlanet.forEach(function (element) {
      console.log(element);
    })

  });