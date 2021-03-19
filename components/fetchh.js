let getData = async (url, body) => {
  let base_url = 'https://api.themoviedb.org/3';

  // let mainInit = {
  //   method: 'POST',
  //   headers: {},
  //   mode: 'cors',
  // };

  // if (body != null) {
  //   mainInit.body = JSON.stringify(body);
  // }

  console.log(base_url + url);

  let temp = await fetch(base_url + url);
  return temp.json();
};
export default getData;
