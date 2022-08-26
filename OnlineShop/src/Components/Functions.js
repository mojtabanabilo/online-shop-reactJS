export const quantityInput = (state, id) => {
  const newIndex = state.selectItem.findIndex((item) => item.id === id);
  if (newIndex === -1) return false;
  else return state.selectItem[newIndex].quantity;
};

export const counter = (state) => {
  const itemsCounter = state.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = state
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemsCounter, total };
};

export const shorten = (word) => {
  const splited = word.split(" ");
  const newWord = splited[0] + splited[1] + splited[2];
  return newWord;
};

let slideShow = 0;
export const slider = (images) => {
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
    console.log(i);
  }
  slideShow++;
  if (slideShow > images.length) {
    slideShow = 1;
  }
  images[slideShow - 1].style.display = "block";
  setTimeout(slider, 2000);
};
