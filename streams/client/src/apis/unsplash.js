import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com/search/photos",
    headers: {
        Authorization: "Client-ID znbeFOaJf55VgeJ8jj6zMStVHKyxfVLKnK0nmjFwh00",
      }
});