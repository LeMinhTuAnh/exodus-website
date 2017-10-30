import React, { Component } from "react";
import Tag from "../../../UIKit/Elements/Tag";

class Index extends Component {
  render() {
    return (
      <div>
        <h1>Tags</h1>
        <br />
        <br />
        <h4>Tags without link:</h4>
        <br />
        <Tag>Action</Tag>
        <Tag>Hentai</Tag>
        <Tag>Adult</Tag>
        <Tag>Mature</Tag>
        <br />
        <br />
        <h4>Tags with link:</h4>
        <br />
        <Tag href="#">Action</Tag>
        <Tag href="#">Hentai</Tag>
        <Tag href="#">Adult</Tag>
        <Tag href="#">Mature</Tag>
        <br />
        <br />
        <h4>Tags with color:</h4>
        <br />
        <Tag color="#FF8D47">Action</Tag>
        <Tag color="#F45D5D">Hentai</Tag>
        <Tag color="#59B6E5">Adult</Tag>
        <Tag color="#4AC471">Mature</Tag>
        <br />
        <br />
        <h4>Tags with sublabel:</h4>
        <br />
        <Tag sublabel={24}>Read on bus</Tag>
        <Tag sublabel={36}>Read when having sex</Tag>
        <Tag color="#3BD6BC" sublabel={72}>
          Never read
        </Tag>
        <Tag color="#D352D1" sublabel={16}>
          Read at night
        </Tag>
        <br />
        <br />
        <h4>Tags with sublabel and link:</h4>
        <br />
        <Tag href="#" sublabel={24}>
          Read on bus
        </Tag>
        <Tag href="#" sublabel={36}>
          Read when having sex
        </Tag>
        <Tag href="#" color="#3BD6BC" sublabel={72}>
          Never read
        </Tag>
        <Tag href="#" color="#D352D1" sublabel={16}>
          Read at night
        </Tag>
      </div>
    );
  }
}

export default Index;
