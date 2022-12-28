const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

// Determine whether a person is a seller
function personIsSeller(name) {
    return name[name.length - 1] === "m";
}

// Find a mango seller
function search(name) {
    let searchQueue = [];
    searchQueue = searchQueue.concat(graph[name]);
    // keeps track of which people you've searched before
    const searched = [];
    while (searchQueue.length) {
      let person = searchQueue.shift();
      // only search this person if you haven't already searched them
      if (searched.indexOf(person) === -1) {
        if (personIsSeller(person)) {
          console.log(person + " is a mango seller!");
          return true;
        }
  
        searchQueue = searchQueue.concat(graph[person]);
        // marks this person as searched
        searched.push(person);
      }
    }
    return false;
  }

  console.log(search("you"));
  console.log(search("anuj"));

