const art = require("ascii-art");

art.font("HELLO", "Doom", (err, asciiText) => {
  if (err) {
    return;
  }
  console.log(asciiText);
});
