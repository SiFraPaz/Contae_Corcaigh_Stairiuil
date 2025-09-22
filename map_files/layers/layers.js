var wms_layers = [];

var lyr_DEM_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM<br />\
    <img src="styles/legend/DEM_0_0.png" /> -1,4000<br />\
    <img src="styles/legend/DEM_0_1.png" /> 165,1000<br />\
    <img src="styles/legend/DEM_0_2.png" /> 331,6000<br />\
    <img src="styles/legend/DEM_0_3.png" /> 498,1000<br />\
    <img src="styles/legend/DEM_0_4.png" /> 664,6000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1173586.667672, 6672920.719437, -860960.120619, 6893593.288793]
        })
    });
var lyr_DEM_isohypses_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM_isohypses<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_isohypses_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1173586.667672, 6672920.719437, -860960.120619, 6893593.288793]
        })
    });
var format_Waterbodies_2 = new ol.format.GeoJSON();
var features_Waterbodies_2 = format_Waterbodies_2.readFeatures(json_Waterbodies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waterbodies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterbodies_2.addFeatures(features_Waterbodies_2);
var lyr_Waterbodies_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterbodies_2, 
                style: style_Waterbodies_2,
                popuplayertitle: 'Waterbodies',
                interactive: true,
                title: '<img src="styles/legend/Waterbodies_2.png" /> Waterbodies'
            });
var lyr_Ireland_1882_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Ireland_1882<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Ireland_1882_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1288598.483025, 6662804.364121, -495482.205403, 7103825.494801]
        })
    });
var format_Cork_4 = new ol.format.GeoJSON();
var features_Cork_4 = format_Cork_4.readFeatures(json_Cork_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cork_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cork_4.addFeatures(features_Cork_4);
var lyr_Cork_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cork_4, 
                style: style_Cork_4,
                popuplayertitle: 'Cork',
                interactive: true,
                title: '<img src="styles/legend/Cork_4.png" /> Cork'
            });
var format_Buildings_5 = new ol.format.GeoJSON();
var features_Buildings_5 = format_Buildings_5.readFeatures(json_Buildings_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_5.addFeatures(features_Buildings_5);
var lyr_Buildings_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_5, 
                style: style_Buildings_5,
                popuplayertitle: 'Buildings',
                interactive: true,
                title: '<img src="styles/legend/Buildings_5.png" /> Buildings'
            });
var format_Nature_6 = new ol.format.GeoJSON();
var features_Nature_6 = format_Nature_6.readFeatures(json_Nature_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nature_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nature_6.addFeatures(features_Nature_6);
var lyr_Nature_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nature_6, 
                style: style_Nature_6,
                popuplayertitle: 'Nature',
                interactive: true,
                title: '<img src="styles/legend/Nature_6.png" /> Nature'
            });
var format_Harbours_7 = new ol.format.GeoJSON();
var features_Harbours_7 = format_Harbours_7.readFeatures(json_Harbours_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Harbours_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Harbours_7.addFeatures(features_Harbours_7);
var lyr_Harbours_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Harbours_7, 
                style: style_Harbours_7,
                popuplayertitle: 'Harbours',
                interactive: true,
                title: '<img src="styles/legend/Harbours_7.png" /> Harbours'
            });
var format_Historical_Buildings_8 = new ol.format.GeoJSON();
var features_Historical_Buildings_8 = format_Historical_Buildings_8.readFeatures(json_Historical_Buildings_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Historical_Buildings_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Historical_Buildings_8.addFeatures(features_Historical_Buildings_8);
var lyr_Historical_Buildings_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Historical_Buildings_8, 
                style: style_Historical_Buildings_8,
                popuplayertitle: 'Historical_Buildings',
                interactive: true,
                title: '<img src="styles/legend/Historical_Buildings_8.png" /> Historical_Buildings'
            });
var format_Mountains_9 = new ol.format.GeoJSON();
var features_Mountains_9 = format_Mountains_9.readFeatures(json_Mountains_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mountains_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mountains_9.addFeatures(features_Mountains_9);
var lyr_Mountains_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mountains_9, 
                style: style_Mountains_9,
                popuplayertitle: 'Mountains',
                interactive: true,
                title: '<img src="styles/legend/Mountains_9.png" /> Mountains'
            });
var format_Settlements_10 = new ol.format.GeoJSON();
var features_Settlements_10 = format_Settlements_10.readFeatures(json_Settlements_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Settlements_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Settlements_10.addFeatures(features_Settlements_10);
var lyr_Settlements_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Settlements_10, 
                style: style_Settlements_10,
                popuplayertitle: 'Settlements',
                interactive: true,
                title: '<img src="styles/legend/Settlements_10.png" /> Settlements'
            });
var lyr_Title_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Title<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Title_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1167463.172885, 6796534.385515, -1068643.337615, 6853994.798895]
        })
    });

lyr_DEM_0.setVisible(true);lyr_DEM_isohypses_1.setVisible(true);lyr_Waterbodies_2.setVisible(true);lyr_Ireland_1882_3.setVisible(true);lyr_Cork_4.setVisible(true);lyr_Buildings_5.setVisible(true);lyr_Nature_6.setVisible(true);lyr_Harbours_7.setVisible(true);lyr_Historical_Buildings_8.setVisible(true);lyr_Mountains_9.setVisible(true);lyr_Settlements_10.setVisible(true);lyr_Title_11.setVisible(true);
var layersList = [lyr_DEM_0,lyr_DEM_isohypses_1,lyr_Waterbodies_2,lyr_Ireland_1882_3,lyr_Cork_4,lyr_Buildings_5,lyr_Nature_6,lyr_Harbours_7,lyr_Historical_Buildings_8,lyr_Mountains_9,lyr_Settlements_10,lyr_Title_11];
lyr_Waterbodies_2.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'waterway': 'waterway', 'covered': 'covered', 'width': 'width', 'depth': 'depth', 'layer': 'layer', 'blockage': 'blockage', 'tunnel': 'tunnel', 'natural': 'natural', 'water': 'water', 'source': 'source', 'name_ga': 'name_ga', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_Cork_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Buildings_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Link': 'Link', });
lyr_Nature_6.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Link': 'Link', });
lyr_Harbours_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Link': 'Link', });
lyr_Historical_Buildings_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Link': 'Link', });
lyr_Mountains_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Settlements_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Waterbodies_2.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'waterway': 'TextEdit', 'covered': 'TextEdit', 'width': 'TextEdit', 'depth': 'TextEdit', 'layer': 'TextEdit', 'blockage': 'TextEdit', 'tunnel': 'TextEdit', 'natural': 'TextEdit', 'water': 'TextEdit', 'source': 'TextEdit', 'name_ga': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_Cork_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Buildings_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Link': 'TextEdit', });
lyr_Nature_6.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Link': 'TextEdit', });
lyr_Harbours_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Link': 'TextEdit', });
lyr_Historical_Buildings_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Link': 'TextEdit', });
lyr_Mountains_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Settlements_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Waterbodies_2.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'waterway': 'no label', 'covered': 'no label', 'width': 'no label', 'depth': 'no label', 'layer': 'no label', 'blockage': 'no label', 'tunnel': 'no label', 'natural': 'no label', 'water': 'no label', 'source': 'no label', 'name_ga': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_Cork_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Buildings_5.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Link': 'no label', });
lyr_Nature_6.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Link': 'no label', });
lyr_Harbours_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Link': 'no label', });
lyr_Historical_Buildings_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Link': 'no label', });
lyr_Mountains_9.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'no label', });
lyr_Settlements_10.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Settlements_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
// Pop-up Element erstellen
var popupElement = document.createElement('div');
popupElement.id = 'popup';
popupElement.className = 'ol-popup';
document.body.appendChild(popupElement);
// Pop-up Inhalt
var popupContent = document.createElement('div');
popupContent.id = 'popup-content';
popupElement.appendChild(popupContent);
// Pop-up Schließen-Button
var popupCloser = document.createElement('a');
popupCloser.id = 'popup-closer';
popupCloser.className = 'ol-popup-closer';
popupCloser.href = '#';
popupElement.appendChild(popupCloser);
// OpenLayers Overlay für das Pop-up
var popup = new ol.Overlay({
    element: popupElement,
    positioning: 'bottom-center',
    stopEvent: true,
    offset: [0, -10]
});
map.addOverlay(popup);
// Pop-up schließen
popupCloser.onclick = function () {
    popup.setPosition(undefined);
    popupCloser.blur();
    return false;
};
// Event: Pop-up bei Klick anzeigen
map.on('singleclick', function (evt) {
    var coordinate = evt.coordinate;
    var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        return feature;
    });
    if (feature) {
        // Pop-up-Inhalt basierend auf Feature-Attributen
        var content = '<h3>' + feature.get('Name') + '</h3>';
        if (feature.get('Link')) {
            content += '<p><a href="' + feature.get('Link') + '" target="_blank">More Info</a></p>';
        }
        popupContent.innerHTML = content;
        popup.setPosition(coordinate);
    } else {
        popup.setPosition(undefined);
    }
});