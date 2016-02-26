var Store = function() {
    this.tracks = [];
};

Store.prototype.getDataForBrick = function(brick) {
    var values = {};

    values.column = brick.column;
    values.row = brick.row;
    values.type = brick.type;
    values.rotation = brick.rotation;

    return values;
};

Store.prototype.saveTrack = function(brickArray) {

    var brickValues = brickArray.map(this.getDataForBrick);
    var trackJSON = JSON.stringify(brickArray);

    this.tracks.push(trackJSON);

    return this.tracks.length - 1;
};

Store.prototype.getBrickForData = function(brickData) {
    var brick = new window[brickData.type]();

    brick.column = brickData.column;
    brick.row = brickData.row;
    brick.rotation = brickData.rotation;

    return brick;
};

Store.prototype.getTrack = function(id) {

    var trackJSON = this.tracks[id];
    var bricksValues = JSON.parse(trackJSON);

    return bricksValues.map(this.getBrickForData);
};
