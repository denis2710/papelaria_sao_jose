import axios from 'axios';

export const HTTP = axios.create({
    baseURL: "http://localhost:3000",
    headers:{
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRlbmlzIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTY2MjcwNDc5LCJleHAiOjE1NjYyNzQwNzl9.wMaNWHUsCHFjTrWt94y_aIjUfsIUTTjOa4jLC1vTrXI'
    }
  })