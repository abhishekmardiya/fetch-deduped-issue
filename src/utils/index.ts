export const getPosts = async () => {
  console.log("rendering getPosts");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};
