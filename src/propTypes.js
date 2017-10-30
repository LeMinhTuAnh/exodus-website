import PropTypes from "prop-types";

export const author = PropTypes.shape({
  eid: PropTypes.number.isRequired,
  type: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
  avatar: PropTypes.string,
  extra: PropTypes.string,
  artwork: PropTypes.arrayOf(PropTypes.string),
});

export const character = PropTypes.shape({
  eid: PropTypes.number.isRequired,
  type: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
  thumbnail: PropTypes.string,
  extra: PropTypes.string,
  artwork: PropTypes.arrayOf(PropTypes.string),
});

export const scanlator = PropTypes.shape({
  eid: PropTypes.number.isRequired,
  type: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  description: PropTypes.string,
  website: PropTypes.string,
});

export const genre = PropTypes.shape({
  eid: PropTypes.number.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  cover: PropTypes.string,
});

export const chapter = PropTypes.shape({
  eid: PropTypes.number.isRequired,
  type: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  name: PropTypes.string.isRequired,
  pages: PropTypes.arrayOf(PropTypes.string),
  mr_cid: PropTypes.number,
  c_order: PropTypes.number,
  language: PropTypes.string,
  view: PropTypes.number,
  serie_id: PropTypes.number,
});

export const collection = PropTypes.shape({
  eid: PropTypes.number.isRequired,
  type: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  name: PropTypes.string.isRequired,
  cover: PropTypes.string,
  view: PropTypes.number,
  description: PropTypes.string,
});

export const manga = PropTypes.shape({
  eid: PropTypes.number.isRequired,
  type: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool,
  rating: PropTypes.number,
  description: PropTypes.string,
  artwork: PropTypes.arrayOf(PropTypes.string),
  extra: PropTypes.string,
  rank: PropTypes.number,
  view: PropTypes.number,
  thumbnail: PropTypes.string,
  authors: PropTypes.arrayOf(author),
  characters: PropTypes.arrayOf(character),
  genres: PropTypes.arrayOf(genre),
  scanlators: PropTypes.arrayOf(scanlator),
  collections: PropTypes.arrayOf(collection),
});

export const nanoManga = PropTypes.shape({
  eid: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.bool,
  thumbnail: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.number),
});
