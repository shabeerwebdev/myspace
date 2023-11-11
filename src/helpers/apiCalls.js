import { getDataPromise } from "../crud/manipulateData";

export const getUrlsList = async () => {
  try {
    const data = await getDataPromise();
    // const dataArray = Object.values(data);
    // setUrlsList(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
