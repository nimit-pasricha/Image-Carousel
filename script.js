import bird from "./images/bird.jpg";
import coffee from "./images/coffee.jpg";
import cow from "./images/cow.jpg";
import houses from "./images/houses.jpg";
import lion from "./images/lion.jpg";

function createArrayOfAllImages(
  image1Source,
  image2Source,
  image3Source,
  image4Source,
  image5Source
) {
  const image1 = new Image();
  image1.src = image1Source;

  const image2 = new Image();
  image2.src = image2Source;

  const image3 = new Image();
  image3.src = image3Source;

  const image4 = new Image();
  image4.src = image4Source;

  const image5 = new Image();
  image5.src = image5Source;

  return [image1, image2, image3, image4, image5];
}

function createArrayOfImagesToDisplay(array, indexToDisplayInFrame) {
  const centerImage = array[indexToDisplayInFrame];

  const leftImageIndex = indexToDisplayInFrame - 1;
  const leftImage = array.at(leftImageIndex);

  // if the center image is the last image,
  // then the right image should be the first image, i.e. the image at index 0
  const rightImageIndex =
    indexToDisplayInFrame + 1 >= array.length ? 0 : indexToDisplayInFrame + 1;

  return [leftImage, centerImage, rightImageIndex];
}
