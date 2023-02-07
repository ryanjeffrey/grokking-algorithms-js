// pass an array in that gets converted to a set
let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = {};
stations["kOne"] = new Set(["id", "nv", "ut"]);
stations["kTwo"] = new Set(["wa", "id", "mt"]);
stations["kThree"] = new Set(["or", "nv", "ca"]);
stations["kFour"] = new Set(["nv", "ut"]);
stations["kFive"] = new Set(["ca", "az"]);

const finalStations = new Set();

while (statesNeeded.size) {
  let bestStation = null;
  let statesCovered = new Set();
  for (let station in stations) {
    const states = stations[station];
    const covered = new Set([...statesNeeded].filter((x) => states.has(x)));
    if (covered.size > statesCovered.size) {
      bestStation = station;
      statesCovered = covered;
    }
  }
  statesNeeded = new Set(
    [...statesNeeded].filter((x) => !statesCovered.has(x))
  );
  finalStations.add(bestStation);
}

console.log(finalStations);
