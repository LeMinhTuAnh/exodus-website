import history from "../../core/history";

function getUserFromContext(context = {}) {
  const store = context.store || {};
  const state = store.getState();
  return (state.user && state.user.user) || {};
}

function checkUserEmailIsVerified(user = {}) {
  if (user && !user.email) {
    return false;
  }
  return user && user.email && user.emailVerified;
}

const accountLogin = () => ({
  path: "/login",
  async action(context) {
    let component = null;
    if (process.env.BROWSER) {
      const route = await new Promise(resolve => {
        require.ensure(
          [],
          require => resolve(require("./routes/LoginRoute").default),
          "accountLogin",
        );
      });
      component = await route(context);
    }
    return {
      title: "Login page",
      chunk: "accountLogin",
      component,
    };
  },
});

const accountManage = () => ({
  path: "/manage_account",
  async action(context) {
    const user = getUserFromContext(context);
    if (user.email && !user.emailVerified) {
      history.push("/account/email_verify");
    }
    // if (!checkUserEmailIsVerified(user)) {
    //   history.push("/account/email_verify");
    // }

    let component = null;
    if (process.env.BROWSER) {
      const route = await new Promise(resolve => {
        require.ensure(
          [],
          require => resolve(require("./routes/AccountManage").default),
          "accountManage",
        );
      });
      component = await route(context);
    }
    return {
      title: "Manage Account page",
      chunk: "accountManage",
      component,
    };
  },
});

const emailVerify = () => ({
  path: "/email_verify",
  async action(context) {
    const user = getUserFromContext(context);
    if (checkUserEmailIsVerified(user)) {
      history.push("/");
    }

    let component = null;
    if (process.env.BROWSER) {
      const route = await new Promise(resolve => {
        require.ensure(
          [],
          require => resolve(require("./routes/EmailVerify").default),
          "emailVerify",
        );
      });
      component = await route(context);
    }
    return {
      title: "Email verify page",
      chunk: "EmailVerify",
      component,
    };
  },
});

export default {
  path: "/account",

  children: [accountLogin(), accountManage(), emailVerify()],
};
