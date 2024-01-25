// Tiny improvement: we can use const instead of let since
// the "things" variable won't get reassigned

let things = ["apples", "baboons", "cribs", "dulcimers"];
for (const thing of things) {
  console.log("Here's a thing: " + thing);
}
