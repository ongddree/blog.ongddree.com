module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f4f7ca7c7f02e214b02c7174a6fa5c7a'),
  },
});
