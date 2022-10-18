const timer = function() {
  const args = process.argv.slice(2);
  console.log(args);

  for (let i = 0; i < args.length; i++) {
    args[i] = parseFloat(args[i]);

    if (args[i] < 0 || Number.isNaN(args[i])) {
      continue;
    }
    setTimeout(() => process.stdout.write('\x07'), args[i] * 1000);
  }
};

timer();
