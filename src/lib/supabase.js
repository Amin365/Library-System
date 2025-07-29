import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPBASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASEKEY

const supabase =createClient(supabaseUrl,supabaseKey,{
    auth:{
        persistSession:true,
        autoRefreshToken:true
    
    },
    realtime:{
        params:{
            eventPerSecond:10
        }
        
        

    }
})


export default supabase