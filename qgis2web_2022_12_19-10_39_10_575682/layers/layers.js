var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Batas_Administrasi_Kecamatan_Kaligesing_AR_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_Kecamatan_Kaligesing_AR_1 = format_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.readFeatures(json_Batas_Administrasi_Kecamatan_Kaligesing_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.addFeatures(features_Batas_Administrasi_Kecamatan_Kaligesing_AR_1);
var lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_1, 
                style: style_Batas_Administrasi_Kecamatan_Kaligesing_AR_1,
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_Kecamatan_Kaligesing_AR_1.png" /> Batas_Administrasi_Kecamatan_Kaligesing_AR'
            });
var format_Batas_Administrasi_Kecamatan_Kaligesing_AR_2 = new ol.format.GeoJSON();
var features_Batas_Administrasi_Kecamatan_Kaligesing_AR_2 = format_Batas_Administrasi_Kecamatan_Kaligesing_AR_2.readFeatures(json_Batas_Administrasi_Kecamatan_Kaligesing_AR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_2.addFeatures(features_Batas_Administrasi_Kecamatan_Kaligesing_AR_2);
var lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_2, 
                style: style_Batas_Administrasi_Kecamatan_Kaligesing_AR_2,
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_Kecamatan_Kaligesing_AR_2.png" /> Batas_Administrasi_Kecamatan_Kaligesing_AR'
            });
var format_Batas_Administrasi_Kecamatan_Kaligesing_AR_3 = new ol.format.GeoJSON();
var features_Batas_Administrasi_Kecamatan_Kaligesing_AR_3 = format_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.readFeatures(json_Batas_Administrasi_Kecamatan_Kaligesing_AR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.addFeatures(features_Batas_Administrasi_Kecamatan_Kaligesing_AR_3);
var lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Administrasi_Kecamatan_Kaligesing_AR_3, 
                style: style_Batas_Administrasi_Kecamatan_Kaligesing_AR_3,
                interactive: true,
                title: '<img src="styles/legend/Batas_Administrasi_Kecamatan_Kaligesing_AR_3.png" /> Batas_Administrasi_Kecamatan_Kaligesing_AR'
            });
var format_building_4 = new ol.format.GeoJSON();
var features_building_4 = format_building_4.readFeatures(json_building_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_4.addFeatures(features_building_4);
var lyr_building_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_4, 
                style: style_building_4,
                interactive: true,
                title: '<img src="styles/legend/building_4.png" /> building'
            });
var format_building_5 = new ol.format.GeoJSON();
var features_building_5 = format_building_5.readFeatures(json_building_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_5.addFeatures(features_building_5);
var lyr_building_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_5, 
                style: style_building_5,
                interactive: true,
                title: '<img src="styles/legend/building_5.png" /> building'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.setVisible(true);lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_2.setVisible(true);lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.setVisible(true);lyr_building_4.setVisible(true);lyr_building_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1,lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_2,lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3,lyr_building_4,lyr_building_5];
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.set('fieldAliases', {'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'LAB_DESA': 'LAB_DESA', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_2.set('fieldAliases', {'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'LAB_DESA': 'LAB_DESA', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.set('fieldAliases', {'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'LAB_DESA': 'LAB_DESA', });
lyr_building_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'is_in:country': 'is_in:country', 'is_in:county': 'is_in:county', 'is_in:region': 'is_in:region', 'is_in:state': 'is_in:state', 'name': 'name', 'place': 'place', 'addr:city': 'addr:city', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'building': 'building', 'building:levels': 'building:levels', 'height': 'height', });
lyr_building_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'type': 'type', 'amenity': 'amenity', 'name': 'name', 'religion': 'religion', 'addr:city': 'addr:city', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'height': 'height', 'url': 'url', 'building:levels': 'building:levels', 'is_in': 'is_in', 'operator': 'operator', 'brand': 'brand', 'brand:wikidata': 'brand:wikidata', 'brand:wikipedia': 'brand:wikipedia', 'shop': 'shop', 'office': 'office', 'layer': 'layer', 'description': 'description', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.set('fieldImages', {'KDEBPS': '', 'KDEPUM': '', 'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'DESA': '', 'SUMBER': '', 'LAB_DESA': '', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_2.set('fieldImages', {'KDEBPS': '', 'KDEPUM': '', 'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'DESA': '', 'SUMBER': '', 'LAB_DESA': '', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.set('fieldImages', {'KDEBPS': '', 'KDEPUM': '', 'PROVINSI': '', 'KABUPATEN': '', 'KECAMATAN': '', 'DESA': '', 'SUMBER': '', 'LAB_DESA': '', });
lyr_building_4.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'is_in:country': '', 'is_in:county': '', 'is_in:region': '', 'is_in:state': '', 'name': '', 'place': '', 'addr:city': '', 'addr:postcode': '', 'addr:street': '', 'building': '', 'building:levels': '', 'height': '', });
lyr_building_5.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'type': '', 'amenity': '', 'name': '', 'religion': '', 'addr:city': '', 'addr:postcode': '', 'addr:street': '', 'height': '', 'url': '', 'building:levels': '', 'is_in': '', 'operator': '', 'brand': '', 'brand:wikidata': '', 'brand:wikipedia': '', 'shop': '', 'office': '', 'layer': '', 'description': '', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_1.set('fieldLabels', {'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'LAB_DESA': 'no label', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_2.set('fieldLabels', {'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'LAB_DESA': 'no label', });
lyr_Batas_Administrasi_Kecamatan_Kaligesing_AR_3.set('fieldLabels', {'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', 'LAB_DESA': 'no label', });
lyr_building_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'is_in:country': 'no label', 'is_in:county': 'no label', 'is_in:region': 'no label', 'is_in:state': 'no label', 'name': 'no label', 'place': 'no label', 'addr:city': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'building': 'no label', 'building:levels': 'no label', 'height': 'no label', });
lyr_building_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'type': 'no label', 'amenity': 'no label', 'name': 'no label', 'religion': 'no label', 'addr:city': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'height': 'no label', 'url': 'no label', 'building:levels': 'no label', 'is_in': 'no label', 'operator': 'no label', 'brand': 'no label', 'brand:wikidata': 'no label', 'brand:wikipedia': 'no label', 'shop': 'no label', 'office': 'no label', 'layer': 'no label', 'description': 'no label', });
lyr_building_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});