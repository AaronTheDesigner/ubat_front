import React from 'react';
import Image from 'next/image';

const PostCard = (props) => {

    return (
        <div className="flex flex-col" key={props.key}>
            <h1>{props.title}</h1>       
            <p>{props.intro}</p>
            <p>{props.tags}</p>
            <Image
                src={props.image}
                width="80"
                height="80"
            />
        </div>
    )
}

export default PostCard
