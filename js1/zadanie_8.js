const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};

const strs1 = ["flower", "flow", "flight"];
console.log(`Przykład 1: "${longestCommonPrefix(strs1)}"`);

const strs2 = ["dog", "racecar", "car"];
console.log(`Przykład 2: "${longestCommonPrefix(strs2)}"`);
