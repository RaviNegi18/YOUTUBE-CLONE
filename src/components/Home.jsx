import React from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider";
const Home = () => {
  const { data } = useAuth();
  console.log(data);
  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className=" h-[calc(100vh-6.625rem)] w-[82%] overflow-y-scroll overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 ml-2">
          {data.map((item) => {
            return (
              <>
                <Video key={item.id} video={item.video} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
