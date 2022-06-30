// using forEach, print a list of cities from the data
data.forEach((user) => console.log(user.address.city));

// create an array of latitude and longitude coordinate pairs
const coords = [];

data.forEach((curr) => {
  let lat = curr.address.geo.lat;
  let lng = curr.address.geo.lng;

  coords.push([lat, lng]);
});

console.log(coords);
// create an array of strings that combine the company's catchPhrase and bs
const arrOfStr = [];

data.forEach((user) => {
  let catchPhrase = user.company.catchPhrase;
  let bs = user.company.bs;

  arrOfStr.push(`${catchPhrase} +++ ${bs}`);
})

console.log(arrOfStr);
