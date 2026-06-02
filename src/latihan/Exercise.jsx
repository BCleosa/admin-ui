import React , {useEffect, useState} from "react";
//import UserCard from "./UserCard";
//import { getUsers } from "./Services";
import PostCard from "./PostCard";
import postsData from "../postsData";


function Exercise() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
          Post Cards
        </h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {postsData.map((post) => (
          <PostCard 
            key={post.id} 
            id={post.id} 
            userId={post.userId} 
            title={post.title} 
            body={post.body} 
          />
        ))}
      </main>
    </div>
  );
}

export default Exercise;