// for custom

module.exports = {
  send: async (ctx) => {
    console.log(`ctx`, ctx);

    let body = ctx.request.body;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "codexprt1@gmail.com",
        from: "codexprt1@gmail.com",
        replyTo: "codexprt1@gmail.com",
        subject: "Sandgrid Email",
        text: "Testing Sendgrid Email in STRAPI-FIRST",
      });
      ctx.send("Email sent");
    } catch (err) {
      return ctx.badRequest(null, err);
    }
  },
};
