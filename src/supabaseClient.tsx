import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';
import Config from 'react-native-config';
const url = Config.PUBLIC_SUPABASE_URL;
const key = Config.PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient(url!, key!);
