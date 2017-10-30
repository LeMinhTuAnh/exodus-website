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
      <SimplePage title="FREQUENTLY ASKED QUESTIONS">
        <p>
          <strong>1. How do I know if and when my favorite mangas have been updated?</strong><br />
          See “Subscribe to be Updated” section on our homepage? Submit your email address to receive a daily prompter of the newest updates.
        </p>

        <p>
          <strong>
            2. How do I bookmark the chapter I’m reading now, so I can pick up my reading from there next time?
          </strong>
          <br />
          See the “Bookmark it” button beside your manga page? Click it to bookmark the page if you’re logged in. You can view all your history views in the “Bookmark” page. Not registered? Easy. Sign up now.
        </p>

        <p>
          <strong>
            3. I want to read Shoujo manga. Also, I want to avoid mature materials. How do I do that?
          </strong>
          <br />
          Click “Manga Directory” for advanced searching. See all the genre boxes? Check the green box in front of “Shoujo” to include it in your search. Check the red box in front of “Mature” to exclude it. Then click “search” button. Viola! All your desirable mangas are listed below. Take your pick.
        </p>

        <p>
          <strong>4. Could you recommend a nice manga for me to read?</strong><br />
          Check out “Manga of the Week” – a top rated manga that we pick out each week just for you. You can also take a look at our “Hottest Manga” list. Or, go to our forum to discuss manga/anime with other fans.
        </p>

        <p>
          <strong>5. Wow, reading manga here is totally free, is it for real?</strong><br />
          Of course! :p We sincerely hope MangaFox will forever be the free paradise for manga fans all around the world.
        </p>

        <p>
          <strong>6. I want to share my manga. How do I upload?</strong><br />
          Sign up to upload. Here’re the guidelines . Thank you for your contribution.
        </p>

        <p>
          <strong>
            7. Are there other ways to turn to the next page while reading manga instead of pressing the next and prev. buttons?
          </strong>
          <br />
          You can simply press [-&gt;] [&lt;-] arrow keys on your keyboard to turn the pages. It saves a lot of time and effort.
        </p>
      </SimplePage>
    );
  }
}

export default Page;
