const lowers = ['alex', 'george', 'bonnie'];
const uppers = lowers.map(name => name.toUpperCase());
uppers.forEach(name => console.log(`Hello, ${name}!`));
