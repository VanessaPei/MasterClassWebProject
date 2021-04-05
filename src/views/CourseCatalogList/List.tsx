import { Icon, Button } from "antd-mobile";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
// import { useQuery } from "react-query";
// import { queryCourseCatalogList } from "../../api";
import CourseCatalogListData from "../../mock/CourseCatalogListData";
import { ICourseCatalogList } from "../../types";
import { useGetFavoriteList } from "../Hooks";
import "./index.css";

function CourseCatalogList() {
  const [courseCatalogList, setCourseCatalogList] = useState<
    ICourseCatalogList[]
  >([]);
  const [isRating, setIsRating] = useState<boolean>(false);
  const [favoriteList, proxySetFavoriteList] = useGetFavoriteList();

  useEffect(() => {
    setCourseCatalogList(CourseCatalogListData);
  }, []);

  const computeCourseCatalogList = useMemo<ICourseCatalogList[]>(() => {
    if (isRating) {
      return courseCatalogList.sort((a, b) => a.rating - b.rating);
    } else {
      return courseCatalogList;
    }
  }, [courseCatalogList, isRating]);

  const favoriteListId = useMemo<number[]>(
    () => favoriteList.map((item) => item.id),
    [favoriteList]
  );

  function addFavorite(data: ICourseCatalogList, isFavorite: boolean) {
    if (isFavorite) return;
    proxySetFavoriteList([...favoriteList, data]);
  }

  return (
    <div className="courseCatalogList">
      <Button>
        <Link to="/favorite">FavoriteList</Link>
      </Button>

      <Button onClick={() => setIsRating(true)}>rating</Button>
      {computeCourseCatalogList.map((item) => {
        const isFavorite = favoriteListId.includes(item.id);
        return (
          <div
            className="item"
            key={item.id}
            onClick={() => addFavorite(item, isFavorite)}
          >
            <img
              className="img"
              src={item.instructor_image_url}
              alt={item.instructor_name}
            />
            <div className="detail">
              {isFavorite && (
                <Icon
                  type="check-circle"
                  style={{
                    color: "red",
                    position: "absolute",
                    top: "20",
                    right: "20",
                  }}
                />
              )}
              <p className="name">{item.instructor_name}</p>
              <p className="desc" title={item.description}>
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CourseCatalogList;
