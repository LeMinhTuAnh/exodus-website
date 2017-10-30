import React, { PureComponent } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "../../../UIKit/Components/Dialog";
import Button from "../../../UIKit/Elements/FlatButton";
import RaisedButton from "../../../UIKit/Elements/RaisedButton";

class DialogComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <h1>Dialog</h1>
        <br />
        <RaisedButton onClick={this.handleClick}>Click to show Dialog</RaisedButton>
        <Dialog show={this.state.show}>
          <DialogTitle>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</DialogTitle>
          <DialogContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptatem quasi ipsum
            neque quidem odit quas, unde tempore itaque voluptate libero aspernatur, ab, consequatur
            dolores illum ducimus assumenda laborum accusantium nobis adipisci quaerat quia. Veniam
            quis, culpa atque dolores explicabo fugiat aut dolorem soluta iusto repudiandae optio
            officiis quibusdam officia consectetur, dolore molestias velit vero quae id sunt neque
            enim odit numquam magni. Cupiditate rem natus maxime tempora modi quasi necessitatibus
            quo, fugiat aliquid fugit similique quod animi voluptates facilis, obcaecati dignissimos
            placeat. Laborum neque odit animi suscipit officia quibusdam, accusamus assumenda sint.
            Omnis blanditiis nesciunt reprehenderit, deserunt iste cumque.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione nihil accusantium
            enim, at quidem pariatur veniam? Praesentium perspiciatis beatae vitae. Laboriosam
            voluptatem aliquam, vero. Rerum vel sequi quidem. Voluptates beatae at vel
            necessitatibus officiis commodi, est eveniet repellendus earum similique ad amet neque
            culpa doloribus minima quo ut, nam iste! Soluta placeat adipisci omnis doloremque, qui
            enim necessitatibus illo deserunt labore expedita vitae sint laudantium culpa beatae
            autem hic fuga corporis ab laborum sunt voluptas asperiores? Vel ab laborum sapiente cum
            amet temporibus impedit ratione eum iusto architecto, aliquam odit, quaerat ipsa iure
            sed voluptatem, doloribus illo ex. Officiis, blanditiis!
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis quasi officia nisi
            quaerat, esse ipsum asperiores! Inventore doloremque odio veritatis consectetur
            praesentium laborum eligendi reiciendis eos adipisci dolores architecto aliquam ab
            dolorem doloribus, suscipit facilis recusandae fugit nulla eius harum aperiam. Expedita
            ipsa maxime totam iure ut officia ipsam, est cum fugiat labore blanditiis quasi eligendi
            deleniti, asperiores iusto impedit sint, reprehenderit. Magni accusamus quaerat,
            necessitatibus, nostrum facilis adipisci eius velit quis voluptate corporis impedit
            ipsum fuga, molestiae minima illum totam quod. Nisi, assumenda obcaecati ad dolorum
            placeat ducimus dignissimos distinctio. Alias dolor deleniti vero veniam odit debitis
            eum voluptatibus!
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quaerat vitae eligendi
            deserunt quod soluta unde, praesentium cum ullam quas! Ea tempora sit dolore, sed ad
            reiciendis, eveniet praesentium. Possimus reprehenderit fuga voluptatem, neque
            reiciendis molestias sequi consequatur accusantium saepe id porro eveniet in harum
            impedit nisi sed perspiciatis temporibus laboriosam beatae illo ea incidunt labore esse
            rem. Aperiam molestiae nam alias magni neque qui similique commodi sunt tenetur
            recusandae culpa maxime natus quae voluptatem, itaque assumenda esse est id odio
            dignissimos ratione at non aut suscipit sed! Vero hic, quod praesentium quos provident
            aperiam amet quia culpa cum qui.
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClick}>Cancel</Button>
            <Button>Action</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DialogComponent;
