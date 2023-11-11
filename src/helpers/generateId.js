export default function generateUniqueID() {
  const timestamp = new Date().getTime(); // Get the current timestamp
  const uniqueID = "ID" + timestamp; // You can prepend a prefix if you like
  return uniqueID;
}
