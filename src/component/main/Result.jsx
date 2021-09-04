import React from "react";
import "./result.css";

const Main = ({ result }) => {
  console.log(result);
  return (
    <main className="container">
      <div className="row">
        {result.map((gif, index) => {
          return (
            <div className="col-12 col-md-4 col-sm-6 mb-3" key={index}>
              <div className='p-3 color'>
                <img
                  src={gif.images.downsized.url}
                  alt="Error response from the server!!!"
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Main;
