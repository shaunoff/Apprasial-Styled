import './routes.js';

Accounts.ui.config({requestPermissions: {google:
  ['https://www.googleapis.com/auth/admin.directory.user.readonly',
  'https://www.googleapis.com/auth/userinfo.email']}
})
