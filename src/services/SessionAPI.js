import BaseAPI from "./BaseAPI";
import axios from 'axios';

export class SessionAPI extends BaseAPI {
  listSessions() {
    return axios.get(`${this.baseUrl}/sessions`);
  }

  getSessionById(sessionId) {
    return axios.get(`${this.baseUrl}/sessions/${sessionId}`);
  }
}

export default new SessionAPI();
