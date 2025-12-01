import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    name: 'Discord Digest',
    permissions: ['storage', 'activeTab', 'scripting'],
    host_permissions: ['https://discord.com/*'],
  },
  srcDir: '.',
  imports: {
    addons: {
      'react-ui': true,
    },
  },
});
