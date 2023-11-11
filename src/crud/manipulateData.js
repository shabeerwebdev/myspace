import {
  onChildAdded,
  onValue,
  ref,
  push,
  child,
  get,
  update,
} from "firebase/database";
import database from "../firebase"; // Import the Firebase database

export const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    onValue(ref(database, "urlsList/"), (snapshot) => {
      const data = snapshot.val();
      const dataWithId = Object.keys(data).map((key) => {
        return {
          dbId: key,
          ...data[key],
        };
      });
      if (!!dataWithId) {
        resolve(dataWithId);
      } else {
        reject("Data not found");
      }
    });
  });
};

export const addDataPromise = (data) => {
  return new Promise((resolve, reject) => {
    const newChildRef = push(ref(database, "urlsList/"), data);

    onChildAdded(ref(database, "urlsList/"), (snapshot) => {
      if (snapshot.key === newChildRef.key) {
        console.log("New entry added with key: ", snapshot.key);
        resolve(snapshot.key);
      } else {
        console.error("Error adding entry: ");
        // reject("Error adding entry");
      }
    });
  });
};

export const updateKeywordsPromise = (
  collectionId,
  newKeyword,
  action = "add"
) => {
  const collectionRef = ref(database, "urlsList/");
  const collectionItemRef = child(collectionRef, collectionId);

  return new Promise((resolve, reject) => {
    get(collectionItemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const keywords = data.keywords || [];

          if (action === "add") {
            keywords.push(newKeyword);
            return update(collectionItemRef, { keywords });
          } else if (action === "remove") {
            const updatedKeywords = keywords.filter(
              (keyword) => keyword !== newKeyword
            );
            return update(collectionItemRef, { keywords: updatedKeywords });
          } else {
            reject(`Invalid action: ${action}`);
          }
        } else {
          reject(`Collection item with ID ${collectionId} not found`);
        }
      })
      .then(() => {
        if (action === "add") {
          resolve(`Keyword added successfully to ${collectionId}`);
        } else if (action === "remove") {
          resolve(`Keyword deleted successfully from ${collectionId}`);
        }
      })
      .catch((error) => {
        reject(`Error updating keywords: ${error}`);
      });
  });
};
