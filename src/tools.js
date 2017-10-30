import React from "react";

const strToHtml = str => {
  const regex = /style="[\w\W][^"]*"/g;

  const arr = str.replace(regex, "").split("\n");

  const createMarkup = markup => ({ __html: `${markup}` });

  return (
    <div>
      {arr.map(item => [
        <span dangerouslySetInnerHTML={createMarkup(item)} />,
        <br />,
      ])}
    </div>
  );
};

export const jsonToHtml = json => {
  let extra = json;
  if (typeof json === "string") extra = JSON.parse(json);
  return (
    <div>
      {Object.keys(extra).map(key => (
        <div key={key}>{`${key}: ${extra[key]}`}</div>
      ))}
    </div>
  );
};

export default strToHtml;
