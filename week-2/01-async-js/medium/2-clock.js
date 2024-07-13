function incrementCounter() {
  let counter = new Date();

  const hours = counter.getHours();
  const minutes = counter.getMinutes();
  const seconds = counter.getSeconds();

  console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(incrementCounter, 1000);
