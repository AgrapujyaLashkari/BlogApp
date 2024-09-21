import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../api/blogData.json';

function BlogDetail() {
  const { id } = useParams();
  let data = blogData.data;
  const post = data.find(post => post.id.toString() === id);
  console.log(post)

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="mb-4 text-gray-600">
        <span>{post.author}</span> • <span>{post.published_date}</span> • <span>{post.reading_time}</span>
      </div>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-auto mb-6 rounded-lg"
      />
      <div className="prose max-w-none">
        <p>{post.content}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map(tag => (
          <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default BlogDetail;