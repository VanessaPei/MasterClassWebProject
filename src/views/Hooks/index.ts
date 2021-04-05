import { useEffect, useState } from "react";
import { ICourseCatalogList } from "../../types";
import { addStorage, getStorage } from "../../utils";

export function useGetFavoriteList() {
  const [favoriteList, setFavoriteList] = useState<ICourseCatalogList[]>([]);
  const proxySetFavoriteList = (data: ICourseCatalogList[]) => {
    setFavoriteList(data);
    addStorage(data);
  };

  useEffect(() => {
    const favoriteList = getStorage() || [];
    setFavoriteList(favoriteList);
  }, []);
  return [favoriteList, proxySetFavoriteList] as const;
}
