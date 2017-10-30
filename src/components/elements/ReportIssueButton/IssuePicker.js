import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
// import Button from "react-mdl/lib/Button";
import RadioGroup from "react-mdl/lib/RadioGroup";
import Radio from "react-mdl/lib/Radio";

// submodules
import FlatButton from "../../../submodules/uikit/src/UIKit/Elements/FlatButton";
import {
  DialogTitle,
  DialogActions,
  DialogContent,
} from "../../../submodules/uikit/src/UIKit/Components/Dialog";

class IssuePicker extends React.Component {
  static propTypes = {
    onCancelClick: PropTypes.func,
    onContinueClick: PropTypes.func,
    onSelectIssue: PropTypes.func,
    issues: PropTypes.array,
    currentIssue: PropTypes.string,
  };

  static defaultProps = {
    onCancelClick: () => {},
    onContinueClick: () => {},
    onSelectIssue: () => {},
    issues: [],
    currentIssue: "",
  };

  renderRadio = (items = []) => {
    const radioItems = [];
    Object.values(items).forEach(item => {
      const { id, name } = item;
      radioItems.push(
        <Radio key={id} value={id}>
          {name}
        </Radio>,
      );
    });
    return radioItems;
  };

  render() {
    const { currentIssue = "", issues = [] } = this.props;

    return (
      <div>
        <DialogTitle>Report Issue</DialogTitle>
        <DialogContent>
          <p style={{ fontWeight: 500 }}>What problem are you encountering?</p>
          <div>
            <RadioGroup
              name="issue"
              childContainer="p"
              onChange={e => this.props.onSelectIssue(e.target.value)}
              value={currentIssue}
            >
              {this.renderRadio(issues)}
            </RadioGroup>
          </div>
        </DialogContent>

        <DialogActions>
          <FlatButton onClick={this.props.onCancelClick}>Cancel</FlatButton>
          <FlatButton disabled={!currentIssue} onClick={this.props.onContinueClick}>
            Continue
          </FlatButton>
        </DialogActions>
      </div>
    );
  }
}

export default withStyles()(IssuePicker);
