import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
});

export const getRepository = searchTerm =>
  api.get(`search/repositories?q=${searchTerm}+in:name`);

export const getIssue = (owner, name) =>
  api.get(`repos/${owner}/${name}/issues?state=all`);
