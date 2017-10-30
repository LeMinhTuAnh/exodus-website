import React, { PureComponent } from "react";
import {
  MangaGridItem,
  Author,
  Subtext,
  NewChapter,
} from "../../../UIKit/Components/MangaGridItem";
import {
  MangaListItem,
  Author as ListAuthor,
  Subtext as ListSubtext,
} from "../../../UIKit/Components/MangaListItem";

class MangaGridComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>MangaGridItem</h1>

        <MangaGridItem
          serieUrl="#"
          thumbnailUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
          mangaTitle="Collection title with long text and break to 2 lines"
          author="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          authorUrl="#"
          newChapter="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, deserunt?"
          newChapterUrl="#"
          subtext="Lorem ipsum dolor sit amet, consectetur adipisicing. "
          style={{ width: "16.67%" }}
        >
          <Author url="#">Lorem ipsum dolor sit amet</Author>
          <Subtext>Lorem ipsum dolor sit amet, consectetur adipisicing.</Subtext>
          <NewChapter url="#">Lorem ipsum dolor sit amet, consectetur adipisicing.</NewChapter>
        </MangaGridItem>

        <MangaGridItem
          serieUrl="#"
          thumbnailUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
          mangaTitle="Collection title with long text and break to 2 lines"
          author="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          authorUrl="#"
          newChapter="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, deserunt?"
          newChapterUrl="#"
          subtext="Lorem ipsum dolor sit amet, consectetur adipisicing. "
          style={{ width: "16.67%" }}
        >
          <Author url="#">Lorem ipsum dolor sit amet</Author>
          <Subtext>Lorem ipsum dolor sit amet, consectetur adipisicing.</Subtext>
          <NewChapter url="#">Lorem ipsum dolor sit amet, consectetur adipisicing.</NewChapter>
        </MangaGridItem>

        <MangaGridItem
          serieUrl="#"
          thumbnailUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
          mangaTitle="Collection title with long text and break to 2 lines"
          author="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          authorUrl="#"
          newChapter="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, deserunt?"
          newChapterUrl="#"
          subtext="Lorem ipsum dolor sit amet, consectetur adipisicing. "
          style={{ width: "16.67%" }}
        >
          <Author url="#">Lorem ipsum dolor sit amet</Author>
          <Subtext>Lorem ipsum dolor sit amet, consectetur adipisicing.</Subtext>
          <NewChapter url="#">Lorem ipsum dolor sit amet, consectetur adipisicing.</NewChapter>
        </MangaGridItem>

        <MangaGridItem
          serieUrl="#"
          thumbnailUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
          mangaTitle="Collection title with long text and break to 2 lines"
          author="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          authorUrl="#"
          newChapter="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, deserunt?"
          newChapterUrl="#"
          subtext="Lorem ipsum dolor sit amet, consectetur adipisicing. "
          style={{ width: "16.67%" }}
        >
          <Author url="#">Lorem ipsum dolor sit amet</Author>
          <Subtext>Lorem ipsum dolor sit amet, consectetur adipisicing.</Subtext>
          <NewChapter url="#">Lorem ipsum dolor sit amet, consectetur adipisicing.</NewChapter>
        </MangaGridItem>

        <hr />
        <h1>MangaListItem</h1>
        <br />

        <div style={{ width: 500 }}>
          <h4>With numbering</h4>
          <MangaListItem
            numbering="12"
            serieUrl="#"
            thumbnailUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
            mangaTitle="Collection title with long text and break to 2 lines"
            author="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            authorUrl="#"
            newChapter="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, deserunt?"
            newChapterUrl="#"
            subtext="Lorem ipsum dolor sit amet, consectetur adipisicing. "
          >
            <ListAuthor url="#">Lorem ipsum dolor sit amet, consectetur adipisicing.</ListAuthor>
            <ListSubtext>Lorem ipsum dolor sit amet, consectetur adipisicing.</ListSubtext>
          </MangaListItem>
          <br />
          <h4>No numbering</h4>
          <MangaListItem
            serieUrl="#"
            thumbnailUrl="https://www.sticky.digital/wp-content/uploads/2013/11/img-6.jpg"
            mangaTitle="Collection title with long text and break to 2 lines"
            author="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            authorUrl="#"
            newChapter="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, deserunt?"
            newChapterUrl="#"
            subtext="Lorem ipsum dolor sit amet, consectetur adipisicing. "
          >
            <ListAuthor url="#">Lorem ipsum dolor sit amet, consectetur adipisicing.</ListAuthor>
            <ListSubtext>Lorem ipsum dolor sit amet, consectetur adipisicing.</ListSubtext>
          </MangaListItem>
        </div>
      </div>
    );
  }
}

export default MangaGridComponent;
