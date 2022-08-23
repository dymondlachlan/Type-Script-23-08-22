// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let splitby3: boolean;
let splitby5: boolean;
let i: number;
let output: string;

for (let i = 1; i <= 100; i += 1) {
  output = '';
  splitby3 = !(i % 3);
  splitby5 = !(i % 5);
}

if (splitby3) output += 'Fizz';
if (splitby5) output += 'Buzz';

if (!(splitby3 || splitby5)) output = i.toString();

console.log(output);
