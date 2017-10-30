import React, { PureComponent } from "react";
import { ReminderStack, Reminder } from "../../../UIKit/Components/Reminder";
import { MangaListItem } from "../../../UIKit/Components/MangaListItem";
import RaisedButton from "../../../UIKit/Elements/RaisedButton";

class ReminderComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      reminder: [],
    };
  }

  handleClick = () => {
    this.setState({
      reminder: [
        ...this.state.reminder,
        <Reminder>
          <MangaListItem
            serieUrl="#"
            thumbnailUrl="https://f1.mrcdn.info/file/mrportal/h/3/3/5/Mp.mGeGIiC7.jpg"
            mangaTitle="Collection title with long text and break to 2 lines"
            author="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            authorUrl="#"
            newChapter="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, deserunt?"
            newChapterUrl="#"
            subtext="Lorem ipsum dolor sit amet, consectetur adipisicing. "
          />
        </Reminder>,
      ],
    });
  };

  render() {
    return (
      <div>
        <h1>Reminder</h1>
        <br />
        <RaisedButton onClick={this.handleClick}>Click to add Reminder</RaisedButton>
        <ReminderStack>
          {this.state.reminder}
        </ReminderStack>
      </div>
    );
  }
}

export default ReminderComponent;
