import axios from "axios";

class LoginService {
  url = "https://n386mqfftc.execute-api.ap-south-1.amazonaws.com/dev/employee";

  setSubscriber() {
    const headers = {
      "Content-Type": "application/json",
    };

    return axios.get(this.url, { headers });
  }
}

export default LoginService;
