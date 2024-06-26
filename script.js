function createArrayOfAllImages(
  image1Source,
  image2Source,
  image3Source,
  image4Source,
  image5Source
) {
  const image1 = document.createElement("img");
  image1.src = image1Source;

  const image2 = document.createElement("img");
  image2.src = image2Source;

  const image3 = document.createElement("img");
  image3.src = image3Source;

  const image4 = document.createElement("img");
  image4.src = image4Source;

  const image5 = document.createElement("img");
  image5.src = image5Source;

  return [image1, image2, image3, image4, image5];
}

function createArrayOfImagesToDisplay(array, indexToDisplayInFrame) {
  const centerImage = array[indexToDisplayInFrame];

  // if centerImage is at index 0, leftImageIndex becomes -1
  // which is fine because at() can use negative index
  const leftImageIndex = indexToDisplayInFrame - 1;
  const leftImage = array.at(leftImageIndex);

  // if the center image is the last image,
  // then the right image should be the first image, i.e. the image at index 0
  const rightImageIndex =
    indexToDisplayInFrame + 1 >= array.length ? 0 : indexToDisplayInFrame + 1;
  const rightImage = array[rightImageIndex];

  return [leftImage, centerImage, rightImage];
}

function displayImages(indexToDisplayInFrame) {
  const bird = "./images/bird.jpg";
  const coffee = "./images/coffee.jpg";
  const cow = "./images/cow.jpg";
  const houses = "./images/houses.jpg";
  const lion = "./images/lion.jpg";

  const allImages = createArrayOfAllImages(bird, coffee, cow, houses, lion);
  const imagesToDisplay = createArrayOfImagesToDisplay(
    allImages,
    indexToDisplayInFrame
  );

  const slidesContainer = document.querySelector(".slides");
  imagesToDisplay.forEach((image) => slidesContainer.appendChild(image));
}

displayImages(4);
