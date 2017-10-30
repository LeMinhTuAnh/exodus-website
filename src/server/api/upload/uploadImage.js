// import { Router } from "express";
const uploadConfig = require("../../config/upload.json");
const request = require("request");
const FileReader = require("filereader");
// const fs = require("fs");
// const sizeOf = require("image-size");
// const router = new Router();
// import { permissions } from "../../../constants/permissions";

// let count = 0;

function _retriveFileObjects(files) {
  if (files.originalFilename && files.path && files.size) {
    return [files];
  }

  const results = [];
  Object.keys(files).forEach(key => {
    const item = files[key];
    if (typeof item === "object") {
      const _results = _retriveFileObjects(item);
      if (_results && _results.length > 0) {
        _results.forEach(_result => {
          results.push(_result);
        });
      }
    }
  });

  return results;
}

function uploadFile(file) {
  const reader = new FileReader();
  // count++;
  // console.log(count);
  return new Promise((resolve, reject) => {
    reader.onload = function onload() {
      const binary = reader.result;
      request({
        method: "POST",
        url: uploadConfig.uploadUrl,
        body: binary,
      },
        (error, response, body) => {
          if (error) {
            reject(`upload failed:${error}`);
            return console.error("upload failed:", error);
          }
          // console.log(response);
          if (response.statusCode !== 200) {
            reject(`upload failed:${body}`);
            return console.error("upload failed:", error);
          }
          // console.log("Upload successful!  Server responded with:", body);
          return resolve(body);
        },
      );
    };
    reader.readAsArrayBuffer(file);
  });
}

module.exports = (req, response) => {
  // if (!req.user) {
  //   response.statusCode = 403;
  //   response.json({
  //     code: 403,
  //     msg: "Access denied",
  //   });
  //   return;
  // }
  // console.log(req.body);
  // console.log(req.files);
  const files = _retriveFileObjects(req.files);
  if (!files || files.length <= 0) {
    response.json({
      code: 0,
      url: "http://empty.array",
    });
    return;
  }
  // console.log(files);
  uploadFile(files[0]).then(
    resultUrl => {
      response.json({
        code: 0,
        url: resultUrl,
      });
    },
    err => {
      console.log(err);
      response.json({
        code: 500,
        msg: err,
      });
    },
  );
};
