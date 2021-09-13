function service() {
  const getAllProducts = () => {
    return fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "GET",
       
      }
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => e);
  };

  return {
    getAllProducts,
  };
}

const userData = service();

export default userData;