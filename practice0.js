// 1. Variables
const targetProgram = "GSoC 2027";
const language = "JavaScript";
let daysPracticed = 1;

// 2. Function
function checkProgress(days) {
  return `Day ${days}: Learning ${language} to prepare for ${targetProgram}!`;
}

// 3. Output to terminal
console.log(checkProgress(daysPracticed));