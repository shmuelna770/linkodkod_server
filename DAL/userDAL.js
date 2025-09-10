import { supabase } from "../DB/supabase.js";

export async function addUserD(player) {
    const { data, error } = await supabase
        .from('players')
        .insert(player)
        .select()
        .maybeSingle();
    if (error) {
        throw new Error(error.message);
    }   
    return data;
}


export async function selectUserByUsername(username) {
    const { data, error } = await supabase
        .from('players')
        .select()
        .eq('username', username)
        .single()
        .maybeSingle();
    if (error) throw new Error(error.message)
    return data;
}


