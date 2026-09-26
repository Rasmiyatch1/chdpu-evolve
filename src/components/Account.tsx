import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { User } from '@supabase/supabase-js';
export function useAccount() {
 const [user, setUser] = useState<User | null>(null);
 const [loading, setLoading] = useState(true);
 useEffect(() => { let live = true; supabase.auth.getUser().then(({ data }) => { if (live) { setUser(data.user); setLoading(false); } }); const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => { if (live) { setUser(session?.user ?? null); setLoading(false); } }); return () => { live = false; subscription.unsubscribe(); }; }, []);
 return { user, loading };
}
