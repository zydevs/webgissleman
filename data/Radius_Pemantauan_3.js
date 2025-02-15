var suhu_dht22_titik1 = "";
var suhu_dht22_titik2 = "";
var suhu_dht22_titik3 = "";
var suhu_dht22_titik4 = "";
var suhu_dht22_titik5 = "";
var suhu_dht22_titik6 = "";
var suhu_dht22_titik7 = "";

var kelembaban_dht22_titik1 = "...";
var kelembaban_dht22_titik2 = "...";
var kelembaban_dht22_titik3 = "...";
var kelembaban_dht22_titik4 = "...";
var kelembaban_dht22_titik5 = "...";
var kelembaban_dht22_titik6 = "...";
var kelembaban_dht22_titik7 = "...";

function fetchData() {
  var apiUrl =
    "https://api.thingspeak.com/channels/2799236/feeds/last.json?timezone=Asia%2FJakarta&api_key=MHM4KUDJL89HL1VD";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Response JSON:", data);

      suhu_dht22_titik1 = parseFloat(data.field4).toFixed(2);
      kelembaban_dht22_titik1 = parseFloat(data.field3).toFixed(2);

    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl2 =
    "https://api.thingspeak.com/channels/2799238/feeds/last.json?timezone=Asia%2FJakarta&api_key=EF0MSMXOCUFX6CQQ";

  fetch(apiUrl2)
    .then((response2) => response2.json())
    .then((data2) => {
      console.log("Response JSON:", data2);

      suhu_dht22_titik2 = parseFloat(data2.field4).toFixed(2);
      kelembaban_dht22_titik2 = parseFloat(data2.field3).toFixed(2);

    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl3 =
    "https://api.thingspeak.com/channels/2799243/feeds/last.json?timezone=Asia%2FJakarta&api_key=6NO96ERJD5YGSU9O";

  fetch(apiUrl3)
    .then((response3) => response3.json())
    .then((data3) => {
      console.log("Response JSON:", data3);

      suhu_dht22_titik3 = parseFloat(data3.field4).toFixed(2);
      kelembaban_dht22_titik3 = parseFloat(data3.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl4 =
     "https://api.thingspeak.com/channels/2799237/feeds/last.json?timezone=Asia%2FJakarta&api_key=FT4LXEI9VS5QXJG2";

  fetch(apiUrl4)
    .then((response4) => response4.json())
    .then((data4) => {
      console.log("Response JSON:", data4);

      suhu_dht22_titik4 = parseFloat(data4.field4).toFixed(2);
      kelembaban_dht22_titik4 = parseFloat(data4.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl5 =
     "https://api.thingspeak.com/channels/2799239/feeds/last.json?timezone=Asia%2FJakarta&api_key=T8ZA66K8FGF94D4Q";

  fetch(apiUrl5)
    .then((response5) => response5.json())
    .then((data5) => {
      console.log("Response JSON:", data5);

      suhu_dht22_titik5 = parseFloat(data5.field4).toFixed(2);
      kelembaban_dht22_titik5 = parseFloat(data5.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl6 =
     "https://api.thingspeak.com/channels/2799242/feeds/last.json?timezone=Asia%2FJakarta&api_key=0EIYQ2711B98M9GK";

  fetch(apiUrl6)
    .then((response6) => response6.json())
    .then((data6) => {
      console.log("Response JSON:", data6);

      suhu_dht22_titik6 = parseFloat(data6.field4).toFixed(2);
      kelembaban_dht22_titik6 = parseFloat(data6.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));

  var apiUrl7 =
     "https://api.thingspeak.com/channels/2799244/feeds/last.json?timezone=Asia%2FJakarta&api_key=JCIS7EQ8XJQCKQ5M";

  fetch(apiUrl7)
    .then((response7) => response7.json())
    .then((data7) => {
      console.log("Response JSON:", data7);

      suhu_dht22_titik7 = parseFloat(data7.field4).toFixed(2);
      kelembaban_dht22_titik7 = parseFloat(data7.field3).toFixed(2);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

setInterval(fetchData, 5000);

var json_Radius_Pemantauan_3 = {
    type: "FeatureCollection",
    name: "Radius_Pemantauan_3",
    crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    features: [
      {
        type: "Feature",
        properties: {
          NAMOBJ: "Titik 1",
          HubDist: 0.92283,
          path: "../assets/Result/Titik 1.shp",
          Suhu: suhu_dht22_titik1,
          Kelembaban: kelembaban_dht22_titik1,
          xcoord: 110.49294,
          ycoord: -7.81269,
          Foto: "titik1.jpg",
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [110.501970774192401, -7.812570468857735],
                [110.501565432307473, -7.815358533905651],
                [110.500316006257648, -7.817885232327531],
                [110.498344778698922, -7.819903233776639],
                [110.495844694789639, -7.821214994055372],
                [110.493060480091813, -7.821692095238413],
                [110.490264685153846, -7.821287821350912],
                [110.487731001688559, -7.820041736600126],
                [110.485707464138841, -7.818075815965672],
                [110.48439216275294, -7.815582505613364],
                [110.483913848442214, -7.812805881801935],
                [110.484319329737801, -7.810017753777983],
                [110.48556889551341, -7.807491051867026],
                [110.487540209742562, -7.805473107748524],
                [110.490040294161759, -7.804161443721723],
                [110.492824423014198, -7.80368444094698],
                [110.495620078541521, -7.804088777810524],
                [110.498153622281009, -7.805334866050383],
                [110.500177073160316, -7.807300729354231],
                [110.501492374036303, -7.809793943454604],
                [110.501970774192401, -7.812570468857735],
              ],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          NAMOBJ: "Titik 2",
          HubDist: 1.2986,
          path: "../Result/Titik 2.shp",
          Suhu: suhu_dht22_titik2,
          Kelembaban: kelembaban_dht22_titik2,
          xcoord: 110.49525,
          ycoord: -7.78276,
          Foto: "titik2.jpg",
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [110.504282154658327, -7.782642231703791],
                [110.503876719490023, -7.785430270216695],
                [110.502627275615083, -7.787956905613147],
                [110.500656107472167, -7.789974813743975],
                [110.498156154401912, -7.791286459578016],
                [110.495372129118309, -7.791763436415845],
                [110.49257656356464, -7.79135904046019],
                [110.490043126937067, -7.790112847853352],
                [110.488019829478461, -7.78814684410444],
                [110.486704737937004, -7.78565348348329],
                [110.486226582723603, -7.782876847146055],
                [110.486632156859784, -7.780088745559649],
                [110.487881740194254, -7.777562106475537],
                [110.489852995019589, -7.775544255451463],
                [110.492352948885426, -7.77423270570574],
                [110.495136888773828, -7.773755827235332],
                [110.497932315359648, -7.774160286264492],
                [110.500465612527663, -7.775406482558989],
                [110.50248882330385, -7.777372429201146],
                [110.50380391404974, -7.779865693733976],
                [110.504282154658327, -7.782642231703791],
              ],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          NAMOBJ: "Titik 3",
          HubDist: 3.22826,
          path: "../Result/Titik 3.shp",
          Suhu: suhu_dht22_titik3,
          Kelembaban: kelembaban_dht22_titik3,
          xcoord: 110.34649,
          ycoord: -7.76535,
          Foto: "titik3.jpg",
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [110.355517140868827, -7.765234422511591],
                [110.355110552668819, -7.768022987086805],
                [110.353859885272698, -7.77054976193297],
                [110.351887543166868, -7.772567409065703],
                [110.349386580938926, -7.773878419008254],
                [110.346601810341454, -7.774354447501446],
                [110.343805836355713, -7.773948883887649],
                [110.341272368034737, -7.772701418912972],
                [110.33924941844279, -7.770734162819644],
                [110.337935019945078, -7.768239692459574],
                [110.337457834857403, -7.765462197423082],
                [110.337864561157204, -7.762673571923458],
                [110.339115366034761, -7.760146794691193],
                [110.341087792490484, -7.758129204622066],
                [110.343588753717952, -7.756818289396476],
                [110.346373438346745, -7.756342357094938],
                [110.349169274232722, -7.756747981633137],
                [110.351702605072234, -7.757995448993926],
                [110.353725470314288, -7.759962648023643],
                [110.355039869812472, -7.762457023666752],
                [110.355517140868827, -7.765234422511591],
              ],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          NAMOBJ: "Titik 4",
          HubDist: 3.82916,
          path: "../Result/Titik 4.shp",
          Suhu: suhu_dht22_titik4,
          Kelembaban: kelembaban_dht22_titik4,
          xcoord: 110.30963,
          ycoord: -7.76331,
          Foto: "titik4.jpg",
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [110.318655422082415, -7.763194586204218],
                [110.318248557315528, -7.765983279628346],
                [110.316997591154177, -7.768510091099857],
                [110.315024957396446, -7.770527679001527],
                [110.312523739260769, -7.771838539653717],
                [110.309738773615706, -7.772314343457191],
                [110.306942684559999, -7.771908501824353],
                [110.30440919238481, -7.77066073279211],
                [110.30238631242284, -7.768693176413677],
                [110.301072070141529, -7.766198438935782],
                [110.300595112499209, -7.76342073604973],
                [110.301002115184517, -7.760631982238736],
                [110.30225321835897, -7.75810516871693],
                [110.304225935890145, -7.756087637884683],
                [110.306727152560995, -7.754776871623055],
                [110.309512032062472, -7.754301163477297],
                [110.312307983199744, -7.754707065497005],
                [110.31484133836183, -7.755954836579545],
                [110.316864134550357, -7.757922335888549],
                [110.318178378296508, -7.76041697897588],
                [110.318655422082415, -7.763194586204218],
              ],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          NAMOBJ: "Titik 5",
          HubDist: 4.08712,
          path: "../Result/Titik 5.shp",
          Suhu: suhu_dht22_titik5,
          Kelembaban: kelembaban_dht22_titik5,
          xcoord: 110.33717,
          ycoord: -7.77146,
          Foto: "titik5.jpg",
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [110.34620309657376, -7.77134189503242],
                [110.34579646199893, -7.774130496134484],
                [110.344545726422425, -7.776657293255714],
                [110.342573301012123, -7.77867494621368],
                [110.340072248530021, -7.779985944954191],
                [110.337287389588113, -7.78046194632056],
                [110.334491337835473, -7.780056342327346],
                [110.331957809945237, -7.778808827694575],
                [110.32993482480515, -7.776841517542986],
                [110.328620418240135, -7.774346994023298],
                [110.328143253330978, -7.771569451923512],
                [110.328550026059844, -7.768780790046972],
                [110.329800899064523, -7.766253990663685],
                [110.331773408684214, -7.764236394820117],
                [110.334274459991818, -7.762925490754693],
                [110.337059232823947, -7.762449585461444],
                [110.339855146422522, -7.762855250229134],
                [110.342388536884584, -7.764102767123961],
                [110.344411437815282, -7.766070020161153],
                [110.34572584555481, -7.768564449005751],
                [110.34620309657376, -7.77134189503242],
              ],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          NAMOBJ: "Titik 6",
          HubDist: 4.40041,
          path: "../Result/Titik 6.shp",
          Suhu: suhu_dht22_titik6,
          Kelembaban: kelembaban_dht22_titik6,
          xcoord: 110.3191,
          ycoord: -7.75104,
          Foto: "titik6.jpg",
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [110.328134437499486, -7.750926697590289],
                [110.327727598547042, -7.753715350558411],
                [110.326476695043908, -7.756242127824447],
                [110.324504154655486, -7.758259691142466],
                [110.322003051440888, -7.759570539252985],
                [110.319218210986875, -7.760046343783649],
                [110.31642224510469, -7.759640516060662],
                [110.313888862007516, -7.758392772735827],
                [110.311866066350049, -7.756425251322917],
                [110.310551875367082, -7.753930554632253],
                [110.310074931027998, -7.751152894363387],
                [110.310481907752234, -7.748364180842889],
                [110.311732948263355, -7.745837401364486],
                [110.313705572563592, -7.743819895019165],
                [110.316206674542329, -7.742509141304768],
                [110.318991429084875, -7.742033432537549],
                [110.321787257195268, -7.742439320812914],
                [110.324320503284454, -7.743687066350115],
                [110.326343215030121, -7.745654530790327],
                [110.32765740724895, -7.748149133084864],
                [110.328134437499486, -7.750926697590289],
              ],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {
          NAMOBJ: "Titik 7",
          HubDist: 6.04921,
          path: "../Result/Titik 7.shp",
          Suhu: suhu_dht22_titik7,
          Kelembaban: kelembaban_dht22_titik7,
          xcoord: 110.37428,
          ycoord: -7.61366,
          Foto: "titik7.jpg",
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [110.383307322558835, -7.613547501455899],
                [110.382900392281428, -7.616335877809016],
                [110.381649771033963, -7.618862322879904],
                [110.379677858948739, -7.620879531129551],
                [110.377177668475198, -7.622190036204682],
                [110.374393935585289, -7.6226655433644],
                [110.371599163345422, -7.622259492979401],
                [110.369066942864265, -7.621011623340433],
                [110.367045164895458, -7.619044084136409],
                [110.365731747162471, -7.616549479769522],
                [110.365255256212961, -7.613772012849272],
                [110.365662322414138, -7.61098357484021],
                [110.366913079993452, -7.608457126223862],
                [110.368885076744434, -7.606439973893484],
                [110.371385267878239, -7.605129562843099],
                [110.374168917170678, -7.604654151899337],
                [110.37696355348676, -7.605060263940285],
                [110.379495637636083, -7.606308137124712],
                [110.381517330939133, -7.608275620409459],
                [110.38283074801187, -7.610770130751602],
                [110.383307322558835, -7.613547501455899],
              ],
            ],
          ],
        },
      },
    ],
};

function updateGeoJSON() {
json_Radius_Pemantauan_3.features[0].properties.Suhu = suhu_dht22_titik1;
json_Radius_Pemantauan_3.features[1].properties.Suhu = suhu_dht22_titik2;
json_Radius_Pemantauan_3.features[2].properties.Suhu = suhu_dht22_titik3;
json_Radius_Pemantauan_3.features[3].properties.Suhu = suhu_dht22_titik4;
json_Radius_Pemantauan_3.features[4].properties.Suhu = suhu_dht22_titik5;
json_Radius_Pemantauan_3.features[5].properties.Suhu = suhu_dht22_titik6;
json_Radius_Pemantauan_3.features[6].properties.Suhu = suhu_dht22_titik7;

json_Radius_Pemantauan_3.features[0].properties.Kelembaban = kelembaban_dht22_titik1;
json_Radius_Pemantauan_3.features[1].properties.Kelembaban = kelembaban_dht22_titik2;
json_Radius_Pemantauan_3.features[2].properties.Kelembaban = kelembaban_dht22_titik3;
json_Radius_Pemantauan_3.features[3].properties.Kelembaban = kelembaban_dht22_titik4;
json_Radius_Pemantauan_3.features[4].properties.Kelembaban = kelembaban_dht22_titik5;
json_Radius_Pemantauan_3.features[5].properties.Kelembaban = kelembaban_dht22_titik6;
json_Radius_Pemantauan_3.features[6].properties.Kelembaban = kelembaban_dht22_titik7;
}

function logJson() {
updateGeoJSON();
console.log("===============d=================");
console.log(json_Radius_Pemantauan_3.features[0].properties.Suhu);
console.log("===========================a=====");
}

setInterval(logJson, 5000);
  