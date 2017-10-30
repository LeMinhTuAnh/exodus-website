/* eslint-disable css-modules/no-undef-class */

import React from "react";
// import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
// import cn from "classnames";

import SearchBox from "../../Components/SearchBox";
import List from "../../Components/List";
import CollectionListItem from "../../Components/CollectionItem/CollectionListItem.js";
import { MangaListItem } from "../../Components/MangaListItem";
import PersonListItem from "../../Components/PersonItem/PersonListItem.js";
import Icon from "../../Elements/Icon";

import s from "./Search.scss";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleOnChange = inputValue => {
    if (inputValue.length !== 0) {
      this.setState({
        isOpen: true,
      });
    } else {
      this.setState({
        isOpen: false,
      });
    }
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className={s.root}>
        <SearchBox dark className={s.searchBox} onChange={this.handleOnChange} />
        {isOpen &&
          <div className={s.resultPanel}>
            <div className={s.resultWrap}>
              <div className={s.manga}>
                <div className={s.title}>Manga</div>
                <List className={s.result}>
                  <MangaListItem
                    className={s.mangaItem}
                    serieUrl="#"
                    thumbnailUrl="https://f1.mrcdn.info/file/mrportal/h/3/3/5/Mp.mGeGIiC7.jpg"
                    mangaTitle="Collection and break to 2 lines"
                    author="Lorem ipsum dolor sit amet, adipisicing elit."
                    authorUrl="#"
                  />
                  <MangaListItem
                    className={s.mangaItem}
                    serieUrl="#"
                    thumbnailUrl="https://f1.mrcdn.info/file/mrportal/h/3/3/5/Mp.mGeGIiC7.jpg"
                    mangaTitle="Collection and break to 2 lines"
                    author="Lorem ipsum dolor sit amet, adipisicing elit."
                    authorUrl="#"
                  />
                </List>
              </div>
              <div className={s.collection}>
                <div className={s.title}>Collection</div>
                <List className={s.result}>
                  <CollectionListItem
                    className={s.collectionItem}
                    bannerUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
                    title="Collection title with long text and break to 2 lines"
                    collectionUrl="#"
                  />
                  <CollectionListItem
                    className={s.collectionItem}
                    bannerUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
                    title="Collection title with long text and break to 2 lines"
                    collectionUrl="#"
                  />
                </List>
              </div>
              <div className={s.character}>
                <div className={s.title}>Character</div>
                <List className={s.result}>
                  <PersonListItem
                    avatarUrl="https://f1.mrcdn.info/file/mrportal/h/7/4/g/K1.7hWDjYvO.png"
                    personUrl="#"
                    name="Lorem ipsum."
                  />
                  <PersonListItem
                    avatarUrl="https://f1.mrcdn.info/file/mrportal/h/7/4/g/K1.7hWDjYvO.png"
                    personUrl="#"
                    name="Lorem ipsum."
                  />
                </List>
              </div>
              <div className={s.author}>
                <div className={s.title}>Author</div>
                <List className={s.result}>
                  <PersonListItem
                    avatarUrl="https://f1.mrcdn.info/file/mrportal/h/7/3/9/vJ.irK-QQfA.png"
                    personUrl="#"
                    name="Lorem ipsum."
                  />
                  <PersonListItem
                    avatarUrl="https://f1.mrcdn.info/file/mrportal/h/7/3/9/vJ.irK-QQfA.png"
                    personUrl="#"
                    name="Lorem ipsum."
                  />
                </List>
              </div>
            </div>
            <div className={s.btnWrap}>
              <button className={s.btn}>
                <Icon name="search" className={s.iconSearch} />
                <div className={s.btnText}>Search for...</div>
              </button>
            </div>
          </div>}
      </div>
    );
  }
}

export default withStyles(s)(Search);
