function getData(data, getNextData = () => {}) {
  setTimeout(() => {
    console.log(data);
    getNextData();
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3); 
  });
});