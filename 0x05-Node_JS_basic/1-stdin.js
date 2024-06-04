process.stdout.write("Welcome to Holberton School, what is your name?\n");
process.stdin.setEncoding("utf8");

process.stdin.on("readable", function () {
  var name = process.stdin.read();
  if (name !== null) {
    process.stdout.write("Your name is: " + name);
  }
});

process.on("exit", function () {
  process.stdout.write("This important software is now closing\n");
});
