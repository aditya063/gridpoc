var noOfBoxes = 37;

for (; noOfBoxes > 0; noOfBoxes--) $.mainView.add(Alloy.createController('box').getView());

$.index.open();
