import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
};

const PostsComponent = () => {
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
    });

    if (isLoading) return <p>Loading posts...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Posts</h1>
            <button onClick={refetch}>Refetch Posts</button>
            <ul>
                {data.map(post => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
