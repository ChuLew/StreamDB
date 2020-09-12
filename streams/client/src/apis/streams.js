import axios from 'axios';

export default axios.create({
  baseURL: 'http://ec2-18-221-166-212.us-east-2.compute.amazonaws.com:8080/'
});

// baseURL: 'http://ec2-18-221-166-212.us-east-2.compute.amazonaws.com:8080/'
