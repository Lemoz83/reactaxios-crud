import React, { useState } from "react";
import { deletePost } from "../api/PostAPI";

const CardCom = ({ post, index, postData, setPostData, setUpdatePostApi }) => {
  const handleDelete = async (id) => {
    //console.log(res.status);
    try {
      const res = await deletePost(id);
      if (res.status == 200) {
        const updatePost = postData.filter((item) => {
          return item.id !== id;
        });
        setPostData(updatePost);
        //console.log(updatePost);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (post) => {
    setUpdatePostApi(post);
    //console.log(post);
  };
  const { id, title, body } = post;
  return (
    <>
      <div className="w-[350px] mx-auto bg-emerald-100 rounded-lg shadow-xl px-5 py-5 border-l-4 border-emerald-700">
        <p className="mb-3 font-bold">{index + 1}</p>
        <h3 className="mb-3 font-bold text-md ">
          Title: <span className="text-sm font-normal">{title}</span>
        </h3>
        <p className="mb-4 font-bold text-md">
          Post: <span className="text-sm font-normal">{body}</span>
        </p>
        <div className="flex gap-3">
          <button
            type="submit"
            className="px-6 pt-0.5 pb-1 border-0.5 border-emerald-600 bg-emerald-500 rounded-md text-white cursor-pointer"
            onClick={() => handleEdit(post)}
          >
            Edit
          </button>
          <button
            type="button"
            className="px-6 pt-0.5 pb-1 border-0.5 border-red-400 bg-red-400 rounded-md text-white cursor-pointer"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CardCom;
