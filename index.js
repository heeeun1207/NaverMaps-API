const http = require('http');
const { type } = require('os');
const port = process.env.PORT || 3000;

const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <title>지도</title>
    <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ClientID"></script>
</head>
<body>
<div id="map" style="width:100%;height:700px;"></div>

<script>
var mapOptions = {
    center: new naver.maps.LatLng(36.35230, 127.37848),
    zoom: 20,
    indoor: true
};

var map = new naver.maps.Map('map', mapOptions);
map.requestIndoorView(true); // 실내지도 활성화
</script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'html' });
  res.end(html);
});

server.listen(port, () => console.log('서버 작동됨'));