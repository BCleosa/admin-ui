import React from 'react';
import PostCard from './PostCard'; // Mengambil desain card dari Soal 2
import { postsData } from './postsData'; // Mengambil array data dari file postsData.js

function Exercise() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="mb-8 text-2xl font-bold text-center text-gray-800">Post Cards</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
        {postsData.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}

      </div>
    </div>
  );
}

export default Exercise;