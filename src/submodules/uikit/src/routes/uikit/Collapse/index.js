import React, { PureComponent } from "react";
import Collapse from "../../../UIKit/Components/Collapse";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed cum, accusantium unde minus perferendis a, harum optio veniam quas eveniet adipisci et libero nobis, voluptatibus saepe minima obcaecati vero voluptas eum similique. Ipsam nihil aperiam ut sapiente voluptas earum facilis delectus accusantium rerum asperiores quaerat eveniet est, animi odit ex in atque et, eligendi voluptatem neque quo accusamus. Optio repudiandae delectus ab hic dolor, ipsam itaque quas! Deleniti, dolores, aliquam. Atque in cumque quasi ab minima beatae cum accusantium ea modi et. Facere aliquam dolorum quis ea perspiciatis, eligendi nulla nostrum dicta cumque fuga. Sunt eaque fuga praesentium corporis, nisi.";

class CollapseComponent extends PureComponent {
  state = {
    open: false,
    text,
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ open: !this.state.open, text: this.state.text + text })}
        >
          Open
        </button>
        <Collapse expanded>
          <div>Hello world</div>
          {this.state.text}
        </Collapse>
      </div>
    );
  }
}

export default CollapseComponent;
