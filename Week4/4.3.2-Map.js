// using map, create a list of cities from the data
const cities = data.map((user) =>{
  return user.address.city;
  })

  console.log(cities);
  // create an array of latitude and longitude coordinate pairs
  const coords = data.map((curr) => {
  return {
    lat: curr.address.geo.lat,
    lng: curr.address.geo.lng
  }
  })
  console.log(coords);

  // create an array of strings that combine the company's catchPhrase and bs
  const arrOfStr = data.map(user => `${user.company.catchPhrase} ${user.company.bs}`);

  console.log(arrOfStr);
