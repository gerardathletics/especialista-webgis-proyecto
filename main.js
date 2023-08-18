// Mapas base de MAPA 1
var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution:
            'Data &copy; <a href="http://osm.org/copyright" target="blanck">OpenStreetMap contributors</a> (<a href="http://www.openstreetmap.org/copyright" target="blanck">ODbL</a>) | Tiles <a href="https://github.com/gravitystorm/openstreetmap-carto" target="blanck">OSM Carto</a> &copy; Randy Allan and others (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)',
    }),
    googleHybrid = L.tileLayer('http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {
        attribution: 'Data \u00a9 <a href="http://maps.google.com/">' + 'Google Ink</a> (<a href="www.google.com">ODbL</a>)',
    }),
    cartoDark = L.tileLayer('http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    }),
    stamenTerrain = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg', {
        attribution:
            'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>',
    });

var mapasBase = {
    OSM: osm,
    'Google Hybrid': googleHybrid,
    'Carto Dark': cartoDark,
    'Stamen Terrain': stamenTerrain,
};

// Mapas base de MAPA 2 y 3
var osm2 = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution:
            'Data &copy; <a href="http://osm.org/copyright" target="blanck">OpenStreetMap contributors</a> (<a href="http://www.openstreetmap.org/copyright" target="blanck">ODbL</a>) | Tiles <a href="https://github.com/gravitystorm/openstreetmap-carto" target="blanck">OSM Carto</a> &copy; Randy Allan and others (<a href="https://creativecommons.org/licenses/by-sa/2.0/deed.es" target="blanck">CC BY-SA 2.0</a>)',
    }),
    googleHybrid2 = L.tileLayer('http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}', {
        attribution: 'Data \u00a9 <a href="http://maps.google.com/">' + 'Google Ink</a> (<a href="www.google.com">ODbL</a>)',
    }),
    cartoDark2 = L.tileLayer('http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    }),
    stamenTerrain2 = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>',
    });

var mapasBase2 = {
    OSM: osm2,
    'Google Hybrid': googleHybrid2,
    'Carto Dark': cartoDark2,
};

// Creamos los mapas, definimos una vista inicial
var map = L.map('map', {
    center: [-21.4, -44.64],
    zoom: 7,
    layers: [osm],
});

var map2 = L.map('map2', {
    center: [-16, -51.07],
    zoom: 4,
    layers: [osm2],
});

var map3 = L.map('map3', {
    center: [-16, -51.07],
    zoom: 4,
    layers: [stamenTerrain2],
});

// Funcion para cambiar de mapa en onclick de los botones
function changeMap(mapNumber) {
    var maps = document.getElementsByClassName('map');
    var buttons = document.getElementsByClassName('map-button');
    var selectContainer = document.getElementById('select-container');

    for (var i = 0; i < maps.length; i++) {
        maps[i].classList.add('hidden');
        if (buttons[i]) {
            buttons[i].classList.remove('active');
        }
    }

    if (mapNumber == 1) {
        var mapContainer = document.getElementById('map');
        mapContainer.classList.remove('hidden');
        selectContainer.classList.remove('hidden');
        if (buttons[0]) {
            buttons[0].classList.add('active');
        }
        map.invalidateSize(); // para que el mapa se ajuste al contenedor
    } else if (mapNumber == 2) {
        var mapContainer = document.getElementById('map2');
        mapContainer.classList.remove('hidden');
        selectContainer.classList.add('hidden');
        if (buttons[1]) {
            buttons[1].classList.add('active');
        }
        map2.invalidateSize();
    } else if (mapNumber == 3) {
        var mapContainer = document.getElementById('map3');
        mapContainer.classList.remove('hidden');
        selectContainer.classList.add('hidden');
        if (buttons[2]) {
            buttons[2].classList.add('active');
        }
        map3.invalidateSize();
    }
}
window.onload = function () {
    changeMap(1); // definimos mapa inicial
};

// -------------------------MAPA 1----------------------------- //

// definimos un limite de movimiento
map.setMaxBounds([
    [-30, -55],
    [-17, -34],
]);

// opciones del popup
var customOptions = {
    maxWidth: '500',
    className: 'custom-popup',
};

// definimos las capas
var munis_rmbh = L.geoJson(munis_rmbh, {
    style: munis_style,
    onEachFeature: function (feature, layer) {
        layer.bindPopup('Municipio: ' + '<strong>' + feature.properties.NM_MUNICIP + '</strong>', customOptions);
    },
});

var munis_rmrj = L.geoJson(munis_rmrj, {
    style: munis_style,
    onEachFeature: function (feature, layer) {
        layer.bindPopup('Municipio: ' + '<strong>' + feature.properties.NM_MUNICIP + '</strong>', customOptions);
    },
});

var munis_rmsp = L.geoJson(munis_rmsp, {
    style: munis_style,
    onEachFeature: function (feature, layer) {
        layer.bindPopup('Municipio: ' + '<strong>' + feature.properties.NM_MUNICIP + '</strong>', customOptions);
    },
});

var RM_BeloHorizonte = L.geoJson(RM_BeloHorizonte, {
    style: style,
}).addTo(map);

var slums_bh = L.geoJson(slums_bh, {
    style: slums_style,
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            '<strong>' +
                feature.properties.NM_AGSN +
                '</strong>' +
                '<br/>' +
                'Municipio: ' +
                '<strong>' +
                feature.properties.UH_NO_MUNI +
                '</strong><br/>' +
                'Area: ' +
                '<strong>' +
                feature.properties.Areakm2 +
                ' Km2',
            customOptions
        );
    },
});

var RM_SaoPaulo = L.geoJson(RM_SaoPaulo, {
    style: style,
}).addTo(map);

var slums_sp = L.geoJson(slums_sp, {
    style: slums_style,
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            '<strong>' +
                feature.properties.NM_AGSN +
                '</strong>' +
                '<br/>' +
                'Municipio: ' +
                '<strong>' +
                feature.properties.UH_NO_MUNI +
                '</strong><br/>' +
                'Area: ' +
                '<strong>' +
                feature.properties.Areakm2 +
                ' Km2',
            customOptions
        );
    },
});

var RM_RioJaneiro = L.geoJson(RM_RioJaneiro, {
    style: style,
}).addTo(map);

var slums_rj = L.geoJson(slums_rj, {
    style: slums_style,
    onEachFeature: function (feature, layer) {
        layer.bindPopup(
            '<strong>' +
                feature.properties.NM_AGSN +
                '</strong>' +
                '<br/>' +
                'Municipio: ' +
                '<strong>' +
                feature.properties.UH_NO_MUNI +
                '</strong><br/>' +
                'Area: ' +
                '<strong>' +
                feature.properties.Areakm2 +
                ' Km2',
            customOptions
        );
    },
});

// Juntamos algunas capas en grupos
var regionsGroup = L.layerGroup([RM_BeloHorizonte, RM_SaoPaulo, RM_RioJaneiro]);
var munisGroup = L.layerGroup([munis_rmbh, munis_rmrj, munis_rmsp]);

// Creamos estilos para las capas
function style(feature) {
    return {
        fillColor: '#FFEDA0',
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '3',
        fillOpacity: 0.4,
        className: 'metro-regions',
    };
}
function munis_style(feature) {
    return {
        weight: 1,
        opacity: 1,
        color: '#444444',
        dashArray: '3',
        fillOpacity: 0,
    };
}
function slums_style(feature) {
    return {
        fillColor: '#FF0000',
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '10, 5',
        fillOpacity: 0.2,
    };
}

// Cambio de estilo al hacer zoom
map.on('zoomend', function () {
    var currentZoom = map.getZoom();
    var newOpacity = currentZoom > 8 ? 0 : 0.4;

    RM_BeloHorizonte.setStyle({
        fillOpacity: newOpacity,
    });
    RM_SaoPaulo.setStyle({
        fillOpacity: newOpacity,
    });
    RM_RioJaneiro.setStyle({
        fillOpacity: newOpacity,
    });
});

map.on('zoomend', function () {
    var currentZoom = map.getZoom();

    var newStyle =
        currentZoom >= 9 && currentZoom < 14
            ? {
                  fillColor: 'red',
                  weight: 0.5,
                  opacity: 1,
                  color: 'black',
                  dashArray: '1',
                  fillOpacity: 0.4,
              }
            : {
                  fillColor: 'red',
                  weight: 3,
                  opacity: 1,
                  color: 'red',
                  dashArray: '3',
                  fillOpacity: 0.1,
              };

    slums_bh.setStyle(newStyle);
    slums_rj.setStyle(newStyle);
    slums_sp.setStyle(newStyle);
});

var overlayMaps = { Municipios: munisGroup };

// Creamos el control de capas donde cambiaremos el mapa base y anadiremos capas
L.control.layers(mapasBase, overlayMaps, { position: 'topright', collapsed: true }).addTo(map);

// Creamos la barra lateral
var sidebar = L.control
    .sidebar('sidebar', {
        position: 'left',
    })
    .addTo(map);

// Funcionalidad para el zoom a las regiones metropolitanas al seleccionarlas en el menu
function zoomToRegion() {
    var region = document.getElementById('region').value;

    map.eachLayer(function (layer) {
        map.removeLayer(layer);
    });

    map.addLayer(osm);

    switch (region) {
        case 'belo_horizonte':
            map.setView([-19.67, -43.9345], 9);
            map.addLayer(RM_BeloHorizonte);
            map.addLayer(slums_bh);
            break;
        case 'sao_paulo':
            map.setView([-23.6505, -46.6333], 9);
            map.addLayer(RM_SaoPaulo);
            map.addLayer(slums_sp);
            break;
        case 'rio':
            map.setView([-22.65, -43.1729], 10);
            map.addLayer(RM_RioJaneiro);
            map.addLayer(slums_rj);
            break;
        default:
            map.setView([-21.4, -44.64], 7);
            map.addLayer(regionsGroup).setStyle(style);
            break;
    }
}

// MAPA 2
// Anadimos la capa
var br_uf = L.geoJson(br_uf, {
    style: br_uf_style,
    onEachFeature: onEachFeature,
}).addTo(map2);

// Estilo y funciones que se aplica cuando se pasa el mouse por encima de un estado
function br_uf_style(feature) {
    return {
        fillColor: '#009c3b',
        weight: 2,
        opacity: 1,
        color: '#ffdf00',
        dashArray: '3',
        fillOpacity: 0.7,
        className: 'neonStroke',
    };
}

function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        weight: 5,
        color: '#ffdf00',
        dashArray: '',
        fillOpacity: 0,
    });
}

function zoomToFeature(e) {
    map2.fitBounds(e.target.getBounds());
}

function resetHighlight(e) {
    br_uf.resetStyle(e.target);
}

// Funcion para el zoom a los estados cuand le das click
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature,
    });
}

// Anadimos la capa y estilo de las capitales con un tooltip en hover
var br_uf_capitales = L.geoJson(br_uf_capitals, {
    pointToLayer: function (feature, latlng) {
        var capitalMarker = L.circleMarker(latlng, br_capital_style(feature));
        capitalMarker.bindTooltip('<strong>' + feature.properties.NOME + '</strong><br>Población en barrios marginales: ' + feature.properties.Per_slums + '%');
        return capitalMarker;
    },
}).addTo(map2);

function br_capital_style(feature) {
    var radiusValue = feature.properties.Per_slums ? feature.properties.Per_slums : 6;
    return {
        radius: radiusValue,
        fillColor: '#FFFFFF',
        color: '#0000FF',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8,
    };
}

// MAPA 3
// anadimos capas wms
var ind_11_1_1 = L.tileLayer.wms('https://geoservicos.ibge.gov.br/geoserver/ODS/ows', {
    layers: 'ODS_11_11_2010',
    format: 'image/png',
    transparent: true,
    attribution: 'IBGE',
    version: '1.3.0',
});

var ind_7_1_1 = L.tileLayer.wms('https://geoservicos.ibge.gov.br/geoserver/ODS/ows', {
    layers: 'ODS7_1_1_2016_proporcao_populacao_com_acesso_energia_eletrica_unidade_federacao',
    format: 'image/png',
    transparent: true,
    attribution: 'IBGE',
    version: '1.3.0',
});

var overlayMaps3 = { '11.1.1 - % BM': ind_11_1_1, '7.1.1 - % acceso a energía': ind_7_1_1 };

// Control de capas
layersControl3 = L.control.layers({}, overlayMaps3, { position: 'topright', collapsed: true }).addTo(map3);

map3.on('overlayadd', function (e) {
    for (var layerName in overlayMaps3) {
        if (layerName !== e.name) {
            map3.removeLayer(overlayMaps3[layerName]);
        }
    }
});

// Leyendas
var legend = L.control({ position: 'bottomright' });
var legend2 = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML =
        '<img src="https://geoservicos.ibge.gov.br/geoserver/ODS/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=ODS_11_11_2010" alt="Legend">';
    return div;
};
legend2.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML =
        '<img src="https://geoservicos.ibge.gov.br/geoserver/ODS/ows?service=WMS&request=GetLegendGraphic&format=image%2Fpng&width=20&height=20&layer=ODS7_1_1_2016_proporcao_populacao_com_acesso_energia_eletrica_unidade_federacao" alt="Legend">';
    return div;
};

// Elimina la leyenda de la otra capa cuando se agrega una y se anade la correspondiente
map3.on('overlayadd', function (eventLayer) {
    if (eventLayer.name === '11.1.1 - % BM') {
        legend.addTo(map3);
    }
});

map3.on('overlayadd', function (eventLayer) {
    if (eventLayer.name === '7.1.1 - % acceso a energía') {
        legend2.addTo(map3);
    }
});

map3.on('overlayremove', function (eventLayer) {
    if (eventLayer.name === '7.1.1 - % acceso a energía') {
        map3.removeControl(legend2);
    }
});
map3.on('overlayremove', function (eventLayer) {
    if (eventLayer.name === '11.1.1 - % BM') {
        map3.removeControl(legend);
    }
});
