const fs = require('fs')

fs.readFile('input.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const lines = data.split(/\r?\n/);

  let aim = 0;
  let depth = 0;
  let horizontalDistance = 0;
  // print all lines
  lines.forEach((line) => {
    let segments = line.split(" ");
    console.log(segments)
    if (segments.length === 2) {
      const instruction = segments[0];
      const distance = Number(segments[1]);
      switch(instruction) {
        case 'forward':
          horizontalDistance += distance;
          depth += (aim * distance)
          break;
        case 'down':
          aim += distance;
          break;
        case 'up':
          aim -= distance;
          break;
        default:
          console.error('no matching instruction')
      }
    }
  });

  console.log(depth);
  console.log(horizontalDistance);
  console.log(depth * horizontalDistance)
})