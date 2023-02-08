// Find the Longest Common Subsequence
function lcs(string1, string2) {
  if (!string1 || !string2) {
    return {
      lcs: 0,
      offset: 0,
      sequence: "",
    };
  }

  let lcs = 0;

  let lastSubIndex = 0;

  let table = [];
  let length1 = string1.length;
  let length2 = string2.length;
  let row;
  let column;

  // Matrix
  // the number of rows is equal to the length of the first string + 1
  // the number of columns is equal to the length of the second string + 1
  for (row = 0; row <= length1; row++) {
    table[row] = [];
    for (col = 0; col <= length2; col++) {
      table[row][col] = 0;
    }
  }

  // fill the matrix
  let i;
  let j;

  for (i = 0; i < length1; i++) {
    for (j = 0; j < length2; j++) {
      if (string1[i] === string2[j]) {
        // the letters match
        if (table[i][j] === 0) {
          table[i + 1][j + 1] = 1;
        } else {
          table[i + 1][j + 1] = table[i][j] + 1;
        }

        // increment lcs if needed
        if (table[i + 1][j + 1] > lcs) {
          lcs = table[i + 1][j + 1];
          lastSubIndex = i;
        }
      } else {
        // the letters don't match
        table[i + 1][j + 1] = 0;
      }
    }
  }

  return {
    lcs: lcs,
    offset: lastSubIndex - lcs + 1,
    sequence: string1.slice(lastSubIndex - lcs + 1, lastSubIndex + 1),
  };
}

console.log(lcs("hish", "fish"));
console.log(lcs("vista", "hish"));
console.log(lcs("google", "abcdefgooglehijklm"));
console.log(lcs("0", 0));
