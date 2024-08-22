declare module 'react-native-config' {
    export interface NativeConfig {
        PUBLIC_SUPABASE_URL?: string;
        PUBLIC_SUPABASE_ANON_KEY?: string;
    }
    
    export const Config: NativeConfig
    export default Config
  }