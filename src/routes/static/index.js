import React from "react";
import FAQ from "./FAQ";
import Privacy from "./Privacy";
import Term from "./Term";
import About from "./About";
import Disclamer from "./Disclamer";
import InvalidLink from "./InvalidLink";
import ResetPassword from "./ResetPassword";
import SuccessfullVerify from "./SuccessfullVerifyEmail";
import SuccessfullUpdatedPassword from "./SuccessfullUpdatedPassword";


export default {
  path: "/",
  children: [
    {
      path: "/faq",
      action() {
        return {
          title: "FREQUENTLY ASKED QUESTIONS",
          component: <FAQ />,
        };
      },
    },
    {
      path: "/privacy",
      action() {
        return {
          title: "Privacy",
          component: <Privacy />,
        };
      },
    },
    {
      path: "/about",
      action() {
        return {
          title: "About Us",
          component: <About />,
        };
      },
    },
    {
      path: "/Disclamer",
      action() {
        return {
          title: "Disclamer",
          component: <Disclamer />,
        };
      },
    },
    {
      path: "/term",
      action() {
        return {
          title: "Terms of Service",
          component: <Term />,
        };
      },
    },
    {
      path: "/invalid_link.html",
      action() {
        return {
          title: "Invalid Link",
          component: <InvalidLink />,
        };
      },
    },
    {
      path: "/invalid_link.hmtl",
      action() {
        return {
          title: "Invalid Link",
          component: <InvalidLink />,
        };
      },
    },
    {
      path: "/choose_password.html",
      action(context) {
        return {
          title: "Choose your password",
          component: <ResetPassword username={context.query && context.query.username} token={context.query && context.query.token} />,
        };
      },
    },
    {
      path: "/email_verification.html",
      action() {
        return {
          title: "Successfull Verify",
          component: <SuccessfullVerify />,
        };
      },
    },
    {
      path: "/password_reset_success.html",
      action() {
        return {
          title: "Successfull Updated",
          component: <SuccessfullUpdatedPassword />,
        };
      },
    },
  ],
};
