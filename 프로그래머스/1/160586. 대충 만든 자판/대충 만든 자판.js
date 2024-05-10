function solution(keymap, targets) {
  return targets.map((s) => {
    const result = Array.from(s).map((char) => getKeyCount(keymap, char));
    return result.includes(-1) ? -1 : result.reduce((a, b) => a + b);
  });
}

function getKeyCount(keymap, target) {
  for (let i = 0; i < Math.max(...keymap.map((v) => v.length)); i++) {
    for (let j = 0; j < keymap.length; j++) {
      const char = keymap[j][i];
      if (char === target) {
        return i + 1;
      }
    }
  }
  return -1;
}