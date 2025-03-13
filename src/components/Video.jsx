import React from "react";
import { Link } from "react-router-dom";
import Time from "../Loader.jsx/Time";
const Video = ({ video }) => {
  //   console.log("vide", video);
  return (
    <div className="flex flex-col">
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex">
          <div className="flex flex-col">
            {/* thumbnail */}
            <div className="flex justify-center items-center relative h-48 md:h-56 md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
              <img
                src={video?.thumbnails[0]?.url}
                alt=""
                className="h-full w-full"
              />
              {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
            </div>
            {/* channel logo */}
            <div className="flex mt-3 space-x-2 items-center justify-center">
              <div className="flex items-start">
                <div className="flex  h-9 w-9 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full rounded-full overflow-hidden"
                    src={video?.author?.avatar[0]?.url}
                    alt=""
                  />
                </div>
                <div>
                  <span className="text-sm font-bold line-clamp-2">
                    {video?.title}
                  </span>
                  {video?.author?.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Video;
