"use client";
import ChatInput from "@/components/custom/ChatInput";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState([]);

  const handelAiClick = () => {
    setMessage((pre) => ["AI", ...pre]);
  };

  const handelUserClick = () => {
    setMessage((pre) => ["User", ...pre]);
  };

  return (
    <div className="bg-gray-900 h-screen w-screen flex relative justify-end p-6 items-center flex-col">
      <div className="w-full h-full overflow-y-scroll flex flex-col-reverse no-scrollbar">
        {message.map((ele, index) => {
          return ele === "AI" ? (
            <div key={index} className="bg-blue-200 w-1/2 p-4 rounded-md my-4">
              AI message
            </div>
          ) : (
            <div
              key={index}
              className="bg-green-200 w-1/2 p-4 rounded-md my-4 self-end"
            >
              User message
            </div>
          );
        })}
      </div>
      <div className="flex space-x-4 w-full items-center">
      <ChatInput placeholder={"Please enter you prompt"} />
      <div className="flex space-x-4 my-4">
        <button className="bg-white p-2 rounded-md" onClick={handelUserClick}>
          human
        </button>
        <button className="bg-white p-2 rounded-md" onClick={handelAiClick}>
          AI
        </button>
      </div>
      </div>
    </div>
  );
}
