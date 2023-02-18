function count_letter(str) {
  const counts = {};
  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i);
    if (c.match(/[a-z]/i)) {
      const lowerC = c.toLowerCase();
      if (counts[lowerC]) {
        counts[lowerC]++;
      } else {
        counts[lowerC] = 1;
      }
    }
  }
  return Object.entries(counts)
    .map(([char, count]) => `${count}${char}`)
    .join(", ");
}
