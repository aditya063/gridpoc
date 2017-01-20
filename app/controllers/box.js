var noOfBoxes,
    platformWidth = Ti.Platform.displayCaps.platformWidth,
    boxWidth = $.boxView.width,
    remainingSpace;

(Ti.Platform.osname === 'android') ? platformWidth /= Ti.Platform.displayCaps.logicalDensityFactor : null;

noOfBoxes = Math.floor(platformWidth / boxWidth);
remainingSpace = platformWidth - (boxWidth * noOfBoxes + (noOfBoxes + 1) * $.boxView.left);

$.boxView.width += remainingSpace / noOfBoxes;