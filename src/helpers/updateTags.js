export const updateKeywordsForId = (id, keywords, urlsList, setUrlsList) => {
  // Find the index of the object with the matching id
  const index = urlsList.findIndex((item) => item.id === id);

  // If the index is not found, handle the error or return without making changes.
  if (index === -1) {
    console.log(`Object with id ${id} not found in urlsList.`);
    return;
  }

  // Create a copy of the urlsList array
  const updatedState = [...urlsList];

  // Update the keywords property for the object at the found index
  updatedState[index] = {
    ...updatedState[index],
    keywords: keywords,
  };

  // Set the urlsList with the updated array
  setUrlsList(updatedState);
};
