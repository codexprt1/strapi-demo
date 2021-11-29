module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "codexprt1@gmail.com",
      defaultReplyTo: "codexprt1@gmail.com",
    },
  },
  // ...
});
