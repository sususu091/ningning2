import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js'
import { getAll } from '../database';

export const supabase = createClient("https://cxttksztqmptigplcphw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4dHRrc3p0cW1wdGlncGxjcGh3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MjkxNTQ0MiwiZXhwIjoyMDU4NDkxNDQyfQ.xqwuKm-jl57te9LqZYHafIf25u264l6tFztrPq7IG4M")

export function Like({ id }) {

    const handleLike = async (postId) => {
        const post = articles.find(p => p.id === postId);
        const newLike = post.like + 1;

        const { error } = await supabase
            .from('articles')
            .update({ like: newLike })
            .eq('id', postId);

        if (error) {
            console.log(error);
            return;
        }

        setArticles(prevArticles =>
            prevArticles.map(p =>
                p.id === postId ? { ...p, like: newLike } : p
            )
        );
    };

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getAll()
            .then(r => setArticles(r))
    }, []);


    const article = articles.find(p => p.id === id);

    return (
        <div>
            <div className="flex items-center gap-2">
                    <button
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => handleLike(id)}
                    >
                        ❤️ <span className="text-lg">{article == null ? "좋아요" : article.like}</span>
                    </button>
                </div>
            
        </div>
    );
}