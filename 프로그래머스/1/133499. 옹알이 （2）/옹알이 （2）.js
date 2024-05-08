function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];

  const results = babbling.map((s) => {
    for (let i = 0; i < words.length; i++) {
      const array = s.split(words[i]);
      const isOver = array.join("*").split("**").length;

      if (isOver !== 1 || s.length === 0) {
        break;
      }
      s = array.join(".");
    }
    return s;
  });

  return results.filter(s => s.replaceAll(".", "").length === 0).length;
}