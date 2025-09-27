import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.aa727fbc6f5b46a9b13ccabd025582e0',
  appName: 'dependentia-kitty-shop',
  webDir: 'dist',
  server: {
    url: 'https://aa727fbc-6f5b-46a9-b13c-cabd025582e0.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#0f0f0f",
      showSpinner: false
    }
  }
};

export default config;