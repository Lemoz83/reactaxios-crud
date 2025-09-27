import React, { useEffect, useState } from "react";
import { newData, updateNewData } from "../api/PostAPI";

const FormCom = ({
  postData,
  setPostData,
  updatePostApi,
  setUpdatePostApi,
}) => {
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const addNewPost = async () => {
    try {
      const res = await newData(newPost);
      //console.log("response:", res);
      if (res.status === 200 || res.status === 201) {
        setPostData([...postData, res.data]);
        setNewPost({ title: "", body: "" }); // 🔹 reset inputs here
      }
    } catch (error) {
      console.log(error);
    }
  };

  let isEmpty = Object.keys(updatePostApi).length === 0;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEmpty) {
      addNewPost();
    } else {
      updateNewPost();
    }
  };

  const updateNewPost = async () => {
    try {
      const res = await updateNewData(updatePostApi.id, newPost);
      console.log(res);
      setPostData((prev) => {
        return prev.map((item) => {
          return item.id === res.data.id ? res.data : item;
        });
      });
      setNewPost({ title: "", body: "" }); // 🔹 reset inputs here
      setUpdatePostApi({}); // empty the object and changes the button to Add from update
    } catch (error) {
      console.log(error);
    }
  };

  // fetch edit data to the input field

  useEffect(() => {
    if (updatePostApi) {
      setNewPost({
        title: updatePostApi.title || "",
        body: updatePostApi.body || "",
      });
    } else {
      setNewPost({ title: "", body: "" });
    }
  }, [updatePostApi]); // 🔹 run every time updatePostApi changes
  return (
    <>
      <div className="container bg-emerald-100 py-4 px-3 flex justify-center w-auto rounded-md ">
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-2 md:flex-row">
            <input
              type="text"
              name="title"
              value={newPost.title}
              placeholder="Enter Title"
              className="border-2 border-gray-400 px-3 py-1 w-xs rounded-md bg-white"
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Enter Post"
              name="body"
              value={newPost.body}
              className="border-2 border-gray-400 px-3 py-1 w-xs rounded-md bg-white"
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="px-6 pt-0.5 pb-1 border-0.5 border-emerald-600 bg-emerald-500 rounded-md text-white cursor-pointer"
              value={isEmpty ? "Add" : "Update"}
            >
              {isEmpty ? "Add" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormCom;
