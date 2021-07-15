import axios from "axios";

const handleSuccessResponse = (response, resolve) => {
  resolve(response);
};

const handleErrorResponse = (error, reject) => {
  reject(error);
};

// let API_URL = 'http://192.168.1.184:8000/api'
let API_URL = process.env.VUE_APP_API_INT_URL;
const service = {
  get(endPoint) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${API_URL}${endPoint}`, {
          headers: localStorage.getItem("token")
            ? { Authorization: `Bearer ${localStorage.getItem("token")}` }
            : null,
        })
        .then((response) => {
          handleSuccessResponse(response, resolve);
          console.log(API_URL)
        })
        .catch((error) => {
          console.log(API_URL)
          handleErrorResponse(error, reject);
        });
    });
  },
  post(endPoint, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${API_URL}${endPoint}`, params, {
          headers: localStorage.getItem("token")
            ? { Authorization: `Bearer ${localStorage.getItem("token")}` }
            : null,
        })
        .then((response) => {
          handleSuccessResponse(response, resolve);
          console.log(API_URL)
        })
        .catch((error) => {
          handleErrorResponse(error, reject);
          console.log(API_URL)
        });
    });
  },
  put(endPoint, params) {
    return new Promise((resolve, reject) => {
      axios
        .put(`${API_URL}${endPoint}`, params, {
          headers: localStorage.getItem("token")
            ? { Authorization: `Bearer ${localStorage.getItem("token")}` }
            : null,
        })
        .then((response) => {
          handleSuccessResponse(response, resolve);
        })
        .catch((error) => {
          handleErrorResponse(error, reject);
        });
    });
  },
//   delete(endPoint) {
//     return new Promise((resolve, reject) => {
//       axios
//         .delete(`${API_URL}${endPoint}`, {
//           headers: { Authorization: `Bear ${localStorage.getItem("token")}` },
//         })
//         .then((response) => {
//           handleSuccessResponse(response, resolve);
//         })
//         .catch((error) => {
//           handleErrorResponse(error, reject);
//         });
//     });
//   },
//   getUrlImg(params) {
//     return new Promise((resolve, reject) => {
//       axios
//         .post("https://api.cloudinary.com/v1_1/dj5xafymg/image/upload", params)
//         .then((response) => {
//           handleSuccessResponse(response, resolve);
//         })
//         .catch((error) => {
//           handleErrorResponse(error, reject);
//         });
//     });
//   },
};

export default service