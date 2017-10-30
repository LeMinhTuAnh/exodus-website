/* eslint max-len: "off" */
/* eslint react/no-unescaped-entities: "off" */

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
// import PageTitle from "../../components/elements/PageTitle";
// import Link from "../../components/elements/Link";
// import withStyles from "isomorphic-style-loader/lib/withStyles";
// import s from "./style.less";

import SimplePage from "./SimplePage";

class Page extends React.Component {
  render() {
    return (
      <SimplePage title="Privacy">

        <p>
          Not A Basement Studio Ltd. ("Not A Basement Studio") operates several websites & mobile apps including <a href="https://www.mangarock.com">mangarock.com</a>, <a href="https://www.mangarockapp.com">mangarockapp.com</a>, <a href="https://www.notabasement.com">notabasement.com</a>, Manga Rock - Best Manga Reader. It is Not A Basement Studio’s policy to respect your privacy regarding any information we may collect while operating our websites.
        </p>

        <p>
          <strong>Visitors</strong><br />
          Like most website operators, Not A Basement Studio collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Not A Basement Studio’s purpose in collecting non-personally identifying information is to better understand how Not A Basement Studio’ visitors use its websites & apps. From time to time, Not A Basement Studio may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its websites & apps. Not A Basement Studio also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on Not A Basement Studio posts. Not A Basement Studio only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below, except that blog commenter IP addresses are visible and disclosed to the administrators of the blog where the comment was left.
        </p>
        <p>
          <strong>Gathering of Personally-Identifying Information</strong><br />
          Certain visitors to Not A Basement Studio’s websites & users of Not A Basement Studio’s apps choose to interact with Not A Basement Studio in ways that require Not A Basement Studio to gather personally-identifying information. The amount and type of information that Not A Basement Studio gathers depends on the nature of the interaction. For example, we ask visitors to share a photo on Facebook to provide a username and email address. In each case, Not A Basement Studio collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor’s interaction with Not A Basement Studio. For example, Not A Basement Studio only asks for Camera or Photo permission when users want to change their account’s avatar using their device’s photo, or Not A Basement Studio will only asks for a user’s email address if a user would like to share to Facebook or Twitter from Not A Basement Studio’s websites or apps. Not A Basement Studio does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.
        </p>

        <p>
          <strong>Aggregated Statistics</strong><br />
          Not A Basement Studio may collect statistics about the behavior of visitors to its websites. Not A Basement Studio may display this information publicly or provide it to others. However, Not A Basement Studio does not disclose personally-identifying information other than as described below.
        </p>

        <p>
          <strong>Protection of Certain Personally-Identifying Information</strong><br />
          Not A Basement Studio discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on Not A Basement Studio behalf or to provide services available at Not A Basement Studio websites, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using Not A Basement Studio’s websites & apps, you consent to the transfer of such information to them. Not A Basement Studio will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, Not A Basement Studio discloses potentially personally-identifying and personally-identifying information only when required to do so by law, or when Not A Basement Studio believes in good faith that disclosure is reasonably necessary to protect the property or rights of Not A Basement Studio, third parties or the public at large. If you are a registered user of a Not A Basement Studio’s website & apps and have supplied your email address, Not A Basement Studio may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what’s going on with Not A Basement Studio and our products. Not A Basement Studio primarily use our various product blogs & fan pages to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. Not A Basement Studio takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.
        </p>

        <p>
          <strong>Cookies</strong><br />
          A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Not A Basement Studio uses cookies to help Not A Basement Studio identify and track visitors, their usage of Not A Basement Studio’s website, and their website access preferences. Not A Basement Studio’s visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Not A Basement Studio’s websites, with the drawback that certain features of Not A Basement Studio’s websites may not function properly without the aid of cookies.
        </p>

        <p>
          <strong>Privacy Policy Changes</strong><br />
          Although most changes are likely to be minor, Not A Basement Studio may change its Privacy Policy from time to time, and in Not A Basement Studio’s sole discretion. Not A Basement Studio encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.
        </p>
      </SimplePage>
    );
  }
}

export default Page;
