import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//get method
export const getPost = () => {
  return api.get("/posts");
};

//Delete Method

export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

//Post Method

export const newData = (newPost) => {
  return api.post("/posts", newPost);
};

// Put Method

export const updateNewData = (id, newPost) => {
  return api.put(`/posts/${id}`, newPost);
};
