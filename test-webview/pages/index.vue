
<template>
  <div>
    <div id="map" style="width:90vw; height: 90vh"></div>
    <div id="clickLatlng"></div>
  </div>
</template>

/*global kakao*/
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
        level: 5, 
      };
      var map = new kakao.maps.Map(container, options); 
      this.map = map;
      const marker = new kakao.maps.Marker({ 
        position: map.getCenter() });
        marker.setMap(map); 
      kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
      var latlng = mouseEvent.latLng; 
      window.ReactNativeWebView.postMessage(latlng)
      var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
      message += '경도는 ' + latlng.getLng() + ' 입니다';
      var resultDiv = document.getElementById('clickLatlng'); 
      resultDiv.innerHTML = message;
      marker.setPosition(latlng);
    })
    },

    },

};
</script>
