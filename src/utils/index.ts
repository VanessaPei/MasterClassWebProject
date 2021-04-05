import { ICourseCatalogList } from "../types";

function ObjToStr(data: Object): string {
  return JSON.stringify(data);
}

function StrToObj(data: string): Object {
  return JSON.parse(data);
}

export const addStorage = (data: ICourseCatalogList[]) => {
  // const favoriteListStr = localStorage.getItem("favoriteList");
  // if (favoriteListStr === null) {
  //   localStorage.setItem("favoriteList", ObjToStr([data]));
  // } else {

  // }
  localStorage.setItem("favoriteList", ObjToStr(data));
};

export const getStorage = (): ICourseCatalogList[] => {
  const favoriteListStr = localStorage.getItem("favoriteList");
  if (favoriteListStr === null) {
    return [];
  } else {
    return StrToObj(favoriteListStr) as ICourseCatalogList[];
  }
};
