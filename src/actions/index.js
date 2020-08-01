import request from 'superagent';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const REQUEST_GIFS = 'REQUEST_GIFS';

const API_URL = 'http://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc';

export function requestGifs(term = null) {
  const data = request.get(`https://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc`);
  
  return {
    type: REQUEST_GIFS,
    payload: data
  }
}

export function openModal(gif) {
  return {
    type: OPEN_MODAL,
    gif
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}