import { Icon } from "antd-mobile";
import { ICourseCatalogList } from "../../types";
import { useGetFavoriteList } from "../Hooks";

function FavoriteList() {
  const [favoriteList, setFavoriteList] = useGetFavoriteList();

  function removeFavorite(item: ICourseCatalogList) {
    const newFavoriteList = favoriteList.filter(
      (favorite) => favorite.id !== item.id
    );
    setFavoriteList(newFavoriteList);
  }

  return (
    <div className="courseCatalogList">
      {favoriteList.map((item) => (
        <div
          className="item"
          key={item.id}
          onClick={() => removeFavorite(item)}
        >
          <img
            className="img"
            src={item.instructor_image_url}
            alt={item.instructor_name}
          />
          <div className="detail">
            <Icon
              type="check-circle"
              style={{
                color: "red",
                position: "absolute",
                top: "20",
                right: "20",
              }}
            />
            <p className="name">{item.instructor_name}</p>
            <p className="desc" title={item.description}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavoriteList;
