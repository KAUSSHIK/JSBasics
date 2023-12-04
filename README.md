# JSBasics - Week 1 - Notes

## What we will be covering:
- Why languages?
- Interpreted vs compiled languages
- Why JS >> Other languages in some use-cases
- Static vs dynamic languages
- Single threaded nature of JS
- Simple primitives in JS (number, strings, booleans)
- Complex primitives in JS (arrays, objects)
- Functions in Javascript
- Practice problem solving
- Callback functions, Event loop, callback queue, Asynchronous programming
- Callback hell and Promises

## Content

### Why we need languages:
Why can not we have one language do it all?
We have different languages but they eventually go through the compiler to become one language which is 0s and 1s.

### Interpreted vs compiled languages
JS is interpreted, unlike C or Java.
You write and just run the file, the whole JS file, unlike in C where you have to run a compiled output file (which is what a compiled language does.)
This interpreted natire of language allows for partial execution.

#### How to run a JS file?
Execute `node <filename>.js` in your terminal.

Example: node main.js

### Why JS >> Other languages in some use-cases
Browsers can only understand HTML/CSS/JS (not technically true)
Thanks to Node.js, Javascript can also be used for "Backend Development"

### Static vs dynamic languages
JS is loosely typed, you can assign one variable to different types of data. Which is frowned upon, hence the advent of TypeScript.