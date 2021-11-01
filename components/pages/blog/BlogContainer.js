import React from 'react';
import PostCard from './PostCard';
import Image from 'next/image';
import posts from './posts';

const showPosts = () => {
    return posts.map(post => {
        return <PostCard 
            key={post.id}
            title={post.title}
            intro={post.intro}
            image={post.image.src}
            tags={post.tags}
        />
    })
}

const BlogContainer = () => {

    return (
        <div className="flex flex-wrap gap-3 justify-center py-5 sm:px-0 md:px-0 lg:px-28">
            {showPosts()}
        </div>
    )
}

export default BlogContainer
