/**
 * Tiny improvement:
 *  we can use const instead of let since the "things" variable won't get reassigned
 */

let things = ['apples', 'baboons', 'cribs', 'dulcimers'];
for (const thing of things) {
  console.log("Here's a thing: " + thing);
}

// In compliance with AirBnb coding style. But might be a bit hard to read for junior devs
things.forEach((thing) => console.log(`Here's a thing: ${thing}`));
