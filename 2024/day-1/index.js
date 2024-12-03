import fs from "fs";

fs.readFile(`example.txt`, `utf-8`, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const lines = data.split(`\n`);
    const numbers = lines.map((line) => line.trim().split(/\s+/).map(Number));
    numbers.forEach((block) => {
      let count = 0;
      let b0 = block[0]
        .toString()
        .split(``)
        .sort((a, b) => a - b);
      let b1 = block[1]
        .toString()
        .split(``)
        .sort((a, b) => a - b);

      for (let i = 0; i < b0.length; i++) {
        count += Math.abs(parseInt(b0[i]) - parseInt(b1[i]));
      }
      console.log(count);
    });
  }
});
