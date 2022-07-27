export const createFormData = (data) => {
  console.log('data: ', data);

  let formData = new FormData();
  for (let key in data) {
    // console.log('FormData: ', data[key] + ', type: '+ typeof(data[key]));
    formData.append(key, data[key]);
  }
  return formData;
}