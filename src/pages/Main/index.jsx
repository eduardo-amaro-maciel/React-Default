import { useQuery } from "@tanstack/react-query";
import { api } from "../../services/api.jsx"

export default function Main() {
    
    const { data: posts , isError, isLoading } = useQuery({
        queryKey: ['users'], 
        queryFn: async () => {
            const response = await api.get(`posts`)
            return response.data
        },
        refetchOnWindowFocus: false
    })

    return (
        <div>
            {posts?.map(post => (
                <div key={post.id}>
                    <p>{post.title}</p>
                </div>
            ))}
        </div>
    );
}