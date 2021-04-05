// import { Button } from "antd-mobile";
import { List } from "antd-mobile";
import { Item } from "antd-mobile/lib/tab-bar";
import React, { useEffect, useState } from "react";
// import { useQuery } from "react-query";
// import { queryCourseCatalogList } from "../../api";
import CourseCatalogListData from "../../mock/CourseCatalogListData";
import { ICourseCatalogList } from "../../types";
import "./index.css";

function CourseCatalogList() {
  //   const {
  //     data,
  //     isLoading,
  //     isError,
  //     refetch,
  //   } = useQuery(`queryCourseCatalogList`, () => queryCourseCatalogList());

  //   if (isLoading) {
  //     return <p>请求中</p>;
  //   }

  //   if (isError) {
  //     return (
  //       <p>
  //         请求错误<Button onClick={() => refetch()}>重试</Button>
  //       </p>
  //     );
  //   }
  const [courseCatalogList, setCourseCatalogList] = useState<
    ICourseCatalogList[]
  >([]);

  useEffect(() => {
    setCourseCatalogList(CourseCatalogListData);
  }, []);

  return (
    <div className="courseCatalogList">
      {courseCatalogList.map((item) => (
        <div className="item" key={item.id}>
          <img
            className="img"
            src={item.instructor_image_url}
            alt={item.instructor_name}
          />
          <div className="detail">
            <p className="name">{item.instructor_name}</p>
            <p className="desc" title={item.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseCatalogList;
