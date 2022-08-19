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
        center: new kakao.maps.LatLng(35.173291008000476, 129.12795167073594), 
        level: 2, 
      };
      var map = new kakao.maps.Map(container, options); 
      var mapTypeControl = new kakao.maps.MapTypeControl();
      map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT)
      


      const marker = new kakao.maps.Marker({ 
        position: map.getCenter() });
        marker.setMap(map); 
      kakao.maps.event.addListener(map, 'click', function(mouseEvent) {    
            
      var latlng = mouseEvent.latLng; 
      window.ReactNativeWebView.postMessage(latlng)
      marker.setPosition(latlng);
    })
    var positions = [
    {
        title: "선윤이네 카페", 
        latlng: new kakao.maps.LatLng(35.168421228883, 129.12700166824078)
    },
    {
        title: "시립 미술관", 
        latlng: new kakao.maps.LatLng(35.166720261645146, 129.1369848990573)
    },
    {
        title: '부산 요트 투어', 
        latlng: new kakao.maps.LatLng(35.1610270711473, 129.13993037823744)
    },
    {
        title: '해성 막창집',
        latlng: new kakao.maps.LatLng(35.17527769714969, 129.12758640419952)
    }];
    var positions1 = [
      
    {
        
            title: "영화의 전당",
            latlng: new kakao.maps.LatLng(35.17098592807375, 129.12707671822628)
            
    },
    {
        
            title: "빕스 센텀시티 홈플러스점",
            latlng: new kakao.maps.LatLng(35.17091523644541, 129.1344223856703)
    
           
        }
    
    ]
    
    var positions2 = [
    {
        title: "선윤이네 카페", 
        latlng: new kakao.maps.LatLng(35.168421228883, 129.12700166824078)
    },
    {
        title: '해성 막창집',
        latlng: new kakao.maps.LatLng(35.17527769714969, 129.12758640419952)
    }];

   
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    for (var i = 0; i < positions.length; i ++) {
    
    var imageSize = new kakao.maps.Size(24, 35); 
    

    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

    var marker2 = new kakao.maps.Marker({
        map: map, 
        position: positions[i].latlng, 
        title : positions[i].title, 
        image : markerImage  
    });
   
     }
     
    for (var i = 0; i < positions1.length; i ++) {
    
  
    var marker1 = new kakao.maps.Marker({
        map: map, 
        position: positions[i].latlng, 
        title : positions[i].title, 
        
    })
     }
     var imageSrc2= "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png"; 
    for (var i = 0; i < positions2.length; i ++) {
    


    var markerImage1= new kakao.maps.MarkerImage(imageSrc2, imageSize); 

    var marker2 = new kakao.maps.Marker({
        map: map , 
        position: positions[i].latlng, 
        title : positions[i].title, 
        image : markerImage1 
    });
    }
    }}
};
</script>