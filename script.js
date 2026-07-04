function firstWord(s) {
  const trimmed = s.trim();
  const spaceIndex = trimmed.indexOf(' ');
  return spaceIndex === -1 ? trimmed : trimmed.slice(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));