import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
};

const PostsComponent = () => {
    const { data, error, isLoading, refetch } = useQuery('posts', fetchPosts, {
        staleTime: 300000, // Cache data for 5 minutes
    });

    if (isLoading) return <p>Loading posts...</p>;
    if (error) return <p>Error fetching posts: {error.message}</p>;

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={() => refetch()}>Refetch Posts</button>
            <ul>
                {data.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
