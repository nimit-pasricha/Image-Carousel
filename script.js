const display = (function () {
  function getAllImages(
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

  const bird = "./images/bird.jpg";
  const coffee = "./images/coffee.jpg";
  const cow = "./images/cow.jpg";
  const houses = "./images/houses.jpg";
  const lion = "./images/lion.jpg";
  const allImages = getAllImages(bird, coffee, cow, houses, lion);

  function getImagesToDisplay(indexToDisplayInFrame) {
    const centerImage = allImages[indexToDisplayInFrame];

    // if the center image is the first image,
    // then the left image should be the last image,
    // i.e. the image at index (allImages.length - 1)
    const leftImageIndex =
      indexToDisplayInFrame - 1 < 0
        ? allImages.length - 1
        : indexToDisplayInFrame - 1;
    const leftImage = allImages[leftImageIndex];

    // if the center image is the last image,
    // then the right image should be the first image, i.e. the image at index 0
    const rightImageIndex =
      indexToDisplayInFrame + 1 >= allImages.length
        ? 0
        : indexToDisplayInFrame + 1;
    const rightImage = allImages[rightImageIndex];

    return [leftImage, centerImage, rightImage];
  }

  (function clickButtonForImage() {
    const selectButtons = document.querySelectorAll(".select-buttons button");
    let dataIndex = 0;
    selectButtons.forEach((selectButton) => {
      selectButton.dataset.index = dataIndex;
      dataIndex++;
      selectButton.addEventListener("click", () => {
        removeAllButtonBackground();
        selectButton.style.backgroundColor = "black";
        const indexOfImageToDisplay = +selectButton.dataset.index;
        displayImages(indexOfImageToDisplay);
      });
    });
  })();

  function displayImages(indexToDisplayInFrame) {
    const imagesToDisplay = getImagesToDisplay(indexToDisplayInFrame);
    const slidesContainer = document.querySelector(".slides");
    slidesContainer.innerHTML = "";
    imagesToDisplay.forEach((image) => slidesContainer.appendChild(image));
    colorCurrentImageButton(indexToDisplayInFrame);
  }
  displayImages(0);

  function colorCurrentImageButton(index) {
    const selectButtons = document.querySelectorAll(".select-buttons button");
    selectButtons.forEach((selectButton) => {
      if (+selectButton.dataset.index === index) {
        removeAllButtonBackground();
        selectButton.style.backgroundColor = "black";
      }
    });
  }

  function removeAllButtonBackground() {
    const selectButtons = document.querySelectorAll(".select-buttons button");
    selectButtons.forEach((selectButton) => {
      selectButton.style.backgroundColor = "";
    });
  }

  let imageToDisplayIndex = 0;
  (function goToPreviousImage() {
    const leftButton = document.querySelector(".left-button");
    leftButton.addEventListener("click", () => {
      imageToDisplayIndex =
        imageToDisplayIndex - 1 < 0
          ? allImages.length - 1
          : imageToDisplayIndex - 1;
      displayImages(imageToDisplayIndex);
    });
  })();

  (function goToNextImage() {
    const rightButton = document.querySelector(".right-button");
    rightButton.addEventListener("click", () => {
      imageToDisplayIndex =
        imageToDisplayIndex + 1 >= allImages.length
          ? 0
          : imageToDisplayIndex + 1;
      displayImages(imageToDisplayIndex);
    });
  })();
})();
