<template>
  <div>
    <div id="map" style="width:100vw; height: 100vh"></div>
    <div id="clickLatlng"></div>
  </div>
</template>

/*gloabl kakao*/
<script>
export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    kakao.maps.load(this.initMap);

  },
  methods: {
    initMap() {
      const container = document.getElementById("map"); 
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), 
        level: 2, 
      };
      var map = new kakao.maps.Map(container, options); 
      var mapTypeControl = new kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)
      
      this.map = map;
      const marker = new kakao.maps.Marker({ 
        position: map.getCenter() });
        marker.setMap(map); 
      kakao.maps.event.addListener(map, 'click', function(mouseEvent) {    
            
      var latlng = mouseEvent.latLng; 
      window.ReactNativeWebView.postMessage(latlng)
      marker.setPosition(latlng);
    })
    },

    },

};
</script>