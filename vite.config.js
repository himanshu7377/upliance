import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'process.env.REACT_APP_API_KEY': JSON.stringify('AIzaSyDlqeNRqHGsdHeHZrw78rAYxXQbEz54obM'),
    'process.env.REACT_APP_AUTH_DOMAIN': JSON.stringify('your_auth_domain'),
    // Define other environment variables here
  },
});