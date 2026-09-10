import { createClient } from '@supabase/supabase-js';
export const supabaseConfigured=Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL&&process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
export function getSupabase(){if(!supabaseConfigured)return null;return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,{auth:{persistSession:true,autoRefreshToken:true}})}
export async function publishedOr<T>(table:string,fallback:T[]):Promise<T[]>{const client=getSupabase();if(!client)return fallback;const{data,error}=await client.from(table).select('*').eq('is_published',true).order('display_order');return error||!data?fallback:data as T[]}
