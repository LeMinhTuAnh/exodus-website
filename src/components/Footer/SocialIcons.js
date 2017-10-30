/* eslint max-len: "off" */

import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Link from "../../submodules/uikit/src/UIKit/Elements/Link";

import s from "./SocialIcons.scss";

const socialFacebook = "https://facebook.com/";
const socialTwitter = "https://twitter.com/";
const socialGPlus = "https://plus.google.com/";

const IconFacebook = () => (
  <svg
    height="20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 11.987 25.792"
  >
    <path d="M11.519,12.904H7.905v12.888H2.548V12.904H0V8.352h2.548V5.406C2.548,3.299,3.548,0,7.953,0l3.968,0.017v4.419H9.042c-0.472,0-1.136,0.236-1.136,1.241v2.679h4.081L11.519,12.904z M11.519,12.904" />
  </svg>
);

const IconTwitter = () => (
  <svg
    height="20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 26.916 21.875"
  >
    <g>
      <path d="M26.916,2.589c-0.99,0.439-2.055,0.736-3.172,0.869c1.14-0.683,2.015-1.765,2.429-3.055c-1.067,0.633-2.249,1.092-3.507,1.34C21.659,0.671,20.223,0,18.634,0c-3.049,0-5.522,2.473-5.522,5.522c0,0.433,0.049,0.854,0.144,1.259C8.666,6.551,4.597,4.352,1.873,1.01C1.398,1.826,1.125,2.775,1.125,3.787c0,1.915,0.976,3.606,2.457,4.596C2.677,8.355,1.825,8.107,1.081,7.692C1.08,7.716,1.08,7.739,1.08,7.762c0,2.676,1.904,4.907,4.43,5.414c-0.463,0.127-0.951,0.194-1.455,0.194c-0.357,0-0.702-0.035-1.039-0.099c0.703,2.193,2.742,3.79,5.159,3.834c-1.89,1.482-4.271,2.364-6.859,2.364c-0.445,0-0.885-0.026-1.316-0.077c2.443,1.567,5.346,2.481,8.464,2.481c10.157,0,15.712-8.414,15.712-15.713c0-0.239-0.005-0.478-0.016-0.714C25.24,4.669,26.176,3.697,26.916,2.589L26.916,2.589z M26.916,2.589" />
    </g>
  </svg>
);

const IconGplus = () => (
  <svg
    height="20"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 30.928 19.682"
  >
    <g>
      <path d="M9.841,8.435v3.374h5.581c-0.225,1.448-1.687,4.246-5.581,4.246c-3.36,0-6.101-2.783-6.101-6.214s2.741-6.214,6.101-6.214c1.912,0,3.191,0.815,3.922,1.518l2.671-2.573C14.719,0.97,12.498,0,9.841,0C4.4,0,0,4.4,0,9.841s4.4,9.841,9.841,9.841c5.68,0,9.448-3.992,9.448-9.616c0-0.647-0.071-1.139-0.155-1.631H9.841L9.841,8.435z" />
      <path d="M30.928,8.435h-2.812V5.623h-2.811v2.811h-2.811v2.812h2.811v2.811h2.811v-2.811h2.812V8.435z" />
    </g>
  </svg>
);

class SocialIcons extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { className, ...otherProps } = this.props;

    return (
      <div className={cn(s.root, className)} {...otherProps}>
        <Link external className={s.link} to={socialFacebook}>
          <IconFacebook />
        </Link>
        <Link external className={s.link} to={socialTwitter}>
          <IconTwitter />
        </Link>
        <Link external className={s.link} to={socialGPlus}>
          <IconGplus />
        </Link>
      </div>
    );
  }
}

export default withStyles(s)(SocialIcons);
