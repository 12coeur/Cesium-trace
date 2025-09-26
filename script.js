const viewer = new Cesium.Viewer("map", {
  terrainProvider: Cesium.createWorldTerrain(),
  timeline: false,
  animation: false,
  baseLayerPicker: false
});
const viewer = new Cesium.Viewer("map", {
  imageryProvider: new Cesium.UrlTemplateImageryProvider({
    url : 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
  }),
  baseLayerPicker: false
});
