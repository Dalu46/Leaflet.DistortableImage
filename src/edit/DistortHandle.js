L.DistortHandle = L.EditHandle.extend({
  options: {
    TYPE: "distort",
    icon: L.icon({
      iconUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAklEQVR4AewaftIAAAChSURBVO3BIU4DURgGwNkvL2B6AkQTLBqP4QCoSm7DDXoBLBZHDbfgICAIZjEV3YTn9uVHdMZZtcnCfI13bIzxg0emg6Nm6QVbYz3jylEsXRrvwommb49X67jFkz80fR9Mb1YxTzqiWBSLYlEsikWxKBbFolgUi2JRLIpFsSgWxaJY03fHHOu40dH07bAzWCx9Ge/TiWbpHgdsjPGNB2f/yS+7xRCyiiZPJQAAAABJRU5ErkJggg==",
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    })
  },

  _onHandleDrag: function() {
    var overlay = this._handled;

    overlay._updateCorner(this._corner, this.getLatLng());

    overlay.fire("update");
    overlay.editing._updateToolbarPos();
  },

  updateHandle: function() {
    this.setLatLng(this._handled.getCorner(this._corner));
	},

});
