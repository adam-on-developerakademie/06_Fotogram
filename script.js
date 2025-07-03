let photoArry = [
'beach-1868342_1920.jpg', 
'chiemsee-lake-8523044_1280.jpg', 
'cliff-5954980_1280.jpg', 
'cliff-7930586_1280.jpg', 
'cliffs-9444605_1280.jpg', 
'clouds-449822_1920.jpg', 
'fog-7440132_1920.jpg', 
'mountain-9631830_1920.jpg', 
'sea-164989_1280.jpg', 
'sea-205717_1920.jpg', 
'sun-5685447_1920.jpg', 
'sunset-3689760_1280.jpg', 
'sunset-476589_1920.jpg', 
'tree-736875_1280.jpg', 
'trees-8482254_1280.jpg', 
'trees-sunrise-3796183_1280.jpg', 
'winter-2080070_1920.jpg'];
let content = '';
let imageNameContainer = `<p id="imageNameContainerId">imageNameContainer</p>`;
let buttons = `<div id="buttonsId">
                    <img src="./img/Left.png" id="buttonLeft" class="buttons" onclick="clickLeft(event)"></button>
                    <p id="imageCounter"></p>
                    <img src="./img/Right.png" id="buttonRight" class="buttons" onclick="clickRight(event)"></button>
               </div>`;
let currentImageName='';

function photoLoad() {
    for (i = 0; i < photoArry.length; i++) {
        content += `<img class="images" onclick="overlayOnOff(this.name)" src="./img/photo/${photoArry[i]}" alt="Photo-Dateiname: ${photoArry[i]}" name="${photoArry[i]}">`;
        document.getElementById('container').innerHTML = content;
    };
};

function overlayOnOff(imageName) {

    if (imageName != null) {
        document.getElementById('overlayId').classList.add('overlay');
        document.getElementById('imageViewerId').classList.add('imageViewer');
        document.getElementById('imageViewerId').innerHTML = `${imageNameContainer} <img id="photoId"  src="./img/photo/${imageName}"></img> ${buttons}`;
        document.getElementById('photoId').classList.add('photo');
        document.getElementById('imageNameContainerId').innerHTML = imageName;
        document.getElementById('imageCounter').innerHTML = 1 + photoArry.indexOf(imageName) + '/' + photoArry.length;
    } else {
        document.getElementById('overlayId').classList.remove('overlay');
        document.getElementById('imageViewerId').classList.remove('imageViewer');
        if (document.getElementById('photoId') != null) {
            document.getElementById('photoId').classList.add('OnOff');
            document.getElementById('buttonLeft').classList.add('OnOff');
            document.getElementById('imageCounter').classList.add('OnOff');
            document.getElementById('buttonRight').classList.add('OnOff');
            document.getElementById('imageNameContainerId').classList.add('OnOff');
        };
    };
    currentImageName = imageName;
}

function clickLeft(event) {
    event.stopPropagation();
    if (photoArry.indexOf(currentImageName) == 0) {
        currentImageName = photoArry[photoArry.length - 1];
        overlayOnOff(currentImageName);
    } else {
        currentImageName = photoArry[photoArry.indexOf(currentImageName) - 1];
        overlayOnOff(currentImageName);
    };
    document.getElementById('imageCounter').innerHTML = 1 + photoArry.indexOf(currentImageName) + '/' + photoArry.length;
    document.getElementById('imageNameContainerId').innerHTML = currentImageName;
};

function clickRight(event) {
    event.stopPropagation();
    if (photoArry.indexOf(currentImageName) == photoArry.length - 1) {
        currentImageName = photoArry[0];
        overlayOnOff(currentImageName);
    } else {
        currentImageName = photoArry[photoArry.indexOf(currentImageName) + 1];
        overlayOnOff(currentImageName);
    };
    document.getElementById('imageCounter').innerHTML = 1 + photoArry.indexOf(currentImageName) + '/' + photoArry.length;
    document.getElementById('imageNameContainerId').innerHTML = currentImageName;
};


