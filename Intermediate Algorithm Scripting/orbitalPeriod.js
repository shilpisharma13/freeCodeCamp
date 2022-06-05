/*Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.*/
const orbitalPeriod = (arr) => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = [...arr];
  newArr.map((obj) => {
    const a = 2 * Math.PI;
    const b = Math.pow(earthRadius + obj.avgAlt, 3);
    const c = Math.sqrt(b / GM);
    const orb = Math.round(a * c);
    obj.orbitalPeriod = orb;
    delete obj.avgAlt;
  });
  return newArr;
};

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }])); //[{name: "sputnik", orbitalPeriod: 86400}]
