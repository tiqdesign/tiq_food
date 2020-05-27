import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer XXjglptsHHHgz3T17vBObBUuRHq0b9dmHENfoWEygsazwJYSw1t9x3F-2d4jvBkiUhul7TfYCwXpzH6GYUgv20gNDuV59ix_MDYmG0mGMJoRGmk9tGH0NPHPInvOXnYx",
  },
});
