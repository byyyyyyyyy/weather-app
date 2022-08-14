import axios from "axios";

const HttpMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const client = axios.create({
  baseURL: process.env.VUE_APP_WEATHER_API_URL || "", //place default api endpoint here,
});

export default {
  async execute(method, resource, data, params) {
    const accessToken = process.env.VUE_APP_WEATHER_API_KEY || ""; //place api key here,
    params["APPID"] = accessToken;
    return client({
      method,
      url: resource,
      data,
      params,
    }).then((req) => {
      return req.data;
    });
  },
  getWeather(q) {
    return this.execute(HttpMethod.GET, `/weather`, undefined, { q });
  },
};
