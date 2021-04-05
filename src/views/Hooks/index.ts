import { useEffect, useState } from "react";
import { ICourseCatalogList } from "../../types";
import { getStorage } from "../../utils";

export function useGetFavoriteList() {
  const [favoriteList, setFavoriteList] = useState<ICourseCatalogList[]>([]);
  useEffect(() => {
    const favoriteList = getStorage() || [];
    setFavoriteList(favoriteList);
  }, []);
  return [favoriteList, setFavoriteList] as const;
}
