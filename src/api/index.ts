import fetchJsonp from "jsonp";
export const queryCourseCatalogList = () => {
  return fetchJsonp(
    "https://drive.google.com/file/d/1A2kikjkOC8K6rksEPvLnU5HqbuXxIWkk/view",
    {
      "content-type": "application/json",
    } as any
    // headers:{
    //     'content-type': 'application/json'
    // }
  );
};
