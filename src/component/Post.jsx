import { useEffect, useState } from "react";
import { getPost, deletePost } from "../api/PostAPI";
import CardCom from "./CardCom";
import FormCom from "./FormCom";

function Post() {
  const [postData, setPostData] = useState([]);
  const [updatePostApi, setUpdatePostApi] = useState({});
  const getData = async () => {
    const res = await getPost();
    //console.log(res);
    setPostData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  //console.log(postData);
  return (
    <>
      <div className="container flex justify-center mx-auto">
        <FormCom
          setPostData={setPostData}
          postData={postData}
          updatePostApi={updatePostApi}
          setUpdatePostApi={setUpdatePostApi}
        />
      </div>
      <div className="container grid grid-flow-cols grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto mt-10 mb-20 p-5">
        {postData.map((item, index) => {
          return (
            <CardCom
              key={item.id}
              post={item}
              index={index}
              setPostData={setPostData}
              postData={postData}
              updatePostApi={updatePostApi}
              setUpdatePostApi={setUpdatePostApi}
            />
          );
        })}
      </div>
    </>
  );
}

export default Post;
