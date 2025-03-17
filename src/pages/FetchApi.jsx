import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FetchApi = () => {
  const [data, setData] = useState([]);
  const mockData = [
    {
      id: 1,
      title: "Watch",
      decription: "asdfh lah sdkj faosd lh ",
      price: 10000,
      image:
        "https://img.drz.lazcdn.com/static/np/p/6195d1b0e86d4ed9fbedd4c1ab543d16.jpg_400x400q80.jpg_.webp",
    },
  ];

  const fetchData = async () => {
    // try {
    //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    //   console.log(res.data, " :Response");
    //   setData(res.data);
    // } catch (err) {
    //   console.log(err);
    // }
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data, " :Data");

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {data.map((item, index) => {
        return (
          <Link to={`/product/${item.id}`}>
            <div key={index} className="flex flex-col border-2 h-50">
              <h1 className="text-2xl font-bold">{item.title}</h1>
              <p>{item.body}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FetchApi;
