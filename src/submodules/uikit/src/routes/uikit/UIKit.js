import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Link from "../../components/Link";

import s from "./style.css";

class UIKit extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    menu: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        group: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const groups = {};
    this.props.menu.forEach(menuItem => {
      if (!menuItem.group || menuItem.group.length <= 0) {
        return;
      }

      if (!groups[menuItem.group]) {
        groups[menuItem.group] = [];
      }
      groups[menuItem.group].push(menuItem);
    }, this);

    return (
      <div className={`${s.container} ${s.clearfix}`}>
        <div className={s.header}>
          <h1>Light Blue Web - UI Kit Portal</h1>
        </div>
        <div className={s["left-column"]}>
          {Object.keys(groups).map((groupName, i) =>
            <div className={s["group-menu"]} key={`uikitgroup${i * 2}`}>
              <div className={s["group-title"]}>
                {groupName}
              </div>
              <ul>
                {groups[groupName].map((item, index) =>
                  <li className={s["group-item"]} key={`uikitcompnent${index * 2}`}>
                    <Link to={`${item.path}`}>
                      {item.title}
                    </Link>
                  </li>,
                )}
              </ul>
            </div>,
          )}
        </div>

        <div className={s["right-column"]}>
          {this.props.children}
        </div>

        <div className={s.clearfix} />
      </div>
    );
  }
}

export default withStyles(s)(UIKit);
