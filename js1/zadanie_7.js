const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

const nums = [1, 1, 2];
const k = removeDuplicates(nums);

console.log(`Unikalne elementy: ${k}`);
console.log(`Zmodyfikowana tablica:`, nums.slice(0, k)); 

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k2 = removeDuplicates(nums2);

console.log(`-------------------`);
console.log(`Unikalne elementy: ${k2}`);
console.log(`Zmodyfikowana tablica:`, nums2.slice(0, k2));
