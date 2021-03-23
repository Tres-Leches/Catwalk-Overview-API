import http from 'k6/http';
import { group, check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 100 }, // below normal load
    { duration: '5m', target: 100 },
    { duration: '2m', target: 200 }, // normal load
    { duration: '5m', target: 200 },
    { duration: '2m', target: 300 }, // around the breaking point
    { duration: '5m', target: 300 },
    { duration: '2m', target: 400 }, // beyond the breaking point
    { duration: '5m', target: 400 },
    { duration: '10m', target: 0 }, // scale down. Recovery stage.
  ],
};
export default function () {
  const BASE_URL = "http://localhost:8000/api";
  const SLEEP_DURATION = 1;
  const id = 1000000
  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/products/`,
      null,
      ],
    [
      'GET',
      `${BASE_URL}/products/${id}`,
      null,
      ],
    [
      'GET',
      `${BASE_URL}/products/${id}/styles`,
      null,
      ],
    [
      'GET',
      `${BASE_URL}/products/${id}/related`,
      null,
      ],
  ]);
  sleep(SLEEP_DURATION);
}
// export default function () {
//     const BASE_URL = "http://localhost:8000/api";
//     const SLEEP_DURATION = 1;
//     const id = 2000000
//   group("/products", () => {
//     let url = BASE_URL + `/products`;
//     // Request No. 1
//     let request = http.get(url);
//     check(request, {
//         "": (r) => r.status === 200
//     });
//     sleep(SLEEP_DURATION);
//   });
//   group("/products/:id", () => {
//     let url = BASE_URL + `/products/2000000`;
//     // Request No. 1
//     let request = http.get(url);
//     check(request, {
//         "": (r) => r.status === 200
//     });
//     sleep(SLEEP_DURATION);
//   });
//   group("/products/:id/styles", () => {
//     let url = BASE_URL + `/products/2000000/styles`;
//     // Request No. 1
//     let request = http.get(url);
//     check(request, {
//         "": (r) => r.status === 200
//     });
//     sleep(SLEEP_DURATION);
//   });
//   group("/products/:id/related", () => {
//     let url = BASE_URL + `/products/2000000/related`;
//     // Request No. 1
//     let request = http.get(url);
//     check(request, {
//         "": (r) => r.status === 200
//     });
//     sleep(SLEEP_DURATION);
//   });
// }
