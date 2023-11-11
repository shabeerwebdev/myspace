export const searchByUrl = (urlsList, urlText) => {
  const searchChars = urlText.toLowerCase().split("");

  return urlsList.filter(({ url }) => {
    const itemLower = url.toLowerCase();
    let index = 0;

    for (const char of searchChars) {
      index = itemLower.indexOf(char, index);
      if (index === -1) {
        return false;
      }
      index++;
    }
    return true;
  });
};

export const searchByTags = (urlsList=[], urlText="") => {
  // debugger
  const urlTextArr = urlText.split(" ").filter(Boolean);
  return urlsList.filter(({ keywords=[] }) => {
    // debugger
    return urlTextArr.every((text) => {
      return Array.from(keywords).some((keyword) => keyword.includes(text));
    });
  });
};
