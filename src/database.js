import { createClient } from '@supabase/supabase-js'

export const supabase = createClient("https://cxttksztqmptigplcphw.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4dHRrc3p0cW1wdGlncGxjcGh3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MjkxNTQ0MiwiZXhwIjoyMDU4NDkxNDQyfQ.xqwuKm-jl57te9LqZYHafIf25u264l6tFztrPq7IG4M")

/**
 * @param {Number} id 
 * @param {String} title 
 * @param {String} content 
 */
export async function insert(id, title, content) {
    const { data, error } = await supabase
        .from("articles")
        .insert({ id, title, content });

    // debug
    if (error)
        console.error(error);
    else
        console.log(data);
}

export async function getAll() {
    const { data, error } = await supabase
        .from("articles")
        .select("*");

    return data;
}