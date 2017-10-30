/* eslint-disable max-len */

import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Slider from "react-slick";

// submodules
import Col from "../../submodules/uikit/src/UIKit/Modules/GridSystem/Col";

import Arrowbutton from "../elements/ArrowButtons";

import Comment from "./Comment";

import s from "./style.less"; // eslint-disable-line

const comments = [
  {
    name: "Diegocade1",
    comment:
      "“I've been using it for a long time now and i couldnt find any other app like this one“",
  },
  {
    name: "Hao3130",
    comment: "“Keep calm and read manga rock!“",
  },
  {
    name: "AppSafari.com",
    comment: "“A fantastically superb resource for any manga reader .. even the free version!“",
  },
  {
    name: "Oluwaseyi Onibudo",
    // eslint-disable-next-line
    comment:
      "“Five stars says it all. Massive collection. Great reading experience. Ability to download. If there was six stars i'll give it to them!“",
  },
  {
    name: "Angiepark02",
    comment: "“AMAZING Manga Reader!”",
  },
  {
    name: "hngsntansn",
    comment: "“Best manga app i’ve ever found. Has a large selection of manga, and user friendly.”",
  },
  {
    name: "Mszoombie2995",
    comment:
      "“Great app with a lot of variaty of mangas and serves, i love it! Fully recommended.”",
  },
  {
    name: "Oluwaseyi Onibudo",
    comment:
      "“I found free manga series that would be expensive to buy a real thing. Not only that, i discover amazing manga series!”",
  },
];

class CommentsSliderBlock extends React.Component {
  render() {
    const settings = {
      prevArrow: <Arrowbutton />,
      nextArrow: <Arrowbutton next />,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    const _commentElement = comments.map(item =>
      <Comment key={item.name} name={item.name} comment={item.comment} />,
    );

    const listComment = [];

    while (_commentElement.length !== 0) {
      listComment.push(_commentElement.splice(0, 4));
    }

    const _listCommentElements = listComment.map((list, index) =>
      (<div key={`${index * 6}kdubck`}>
        <Col className="mr-auto ml-auto" xs={10} md={8}>
          {list}
        </Col>
      </div>),
    );

    return (
      <Slider {...settings}>
        {_listCommentElements}
      </Slider>
    );
  }
}

export default withStyles(s)(CommentsSliderBlock);
