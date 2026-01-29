var config = {
    style: 'mapbox://styles/marahf/cmkr706oq002u01se643w1xb0',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibWFyYWhmIiwiYSI6ImNtaWhzbW9oYTBsOTgzY3M4YjQ5cHdseHEifQ.GPDh80eqURGrq1VOGLCj3A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Los humedales de España y la cerceta pardilla',
    subtitle: 'Uno de los ecosistemas más frágiles en peligro. Una especie que depende ellos para sobrevivir.',
    byline: 'Por Mara Hernández',
    footer: 'Referencias: <br> - Foto de la cerceta pardilla: By Lucas Benaiche - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=91303892 <br> - El resto de fotos de las cercetas pardillas han sido obtenidas de la página web del Proyecto Life Cerceta Pardilla. <br> - Fotos de los humedales realizadas por la autora. <br> - Datos obtenidos de GBIF.org (23 January 2026) GBIF Occurrence Download https://doi.org/10.15468/dl.geqt99, el Inventario Español de Zonas Húmedas y el Inventario de humedales catalanes, así como de los censos realizados por SEO Birdlife. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        //CAPITULO 1 - ESPAÑA, PAIS DE HUMEDALES
        {
            id: 'intro-humedales',
            alignment: 'left',
            hidden: false,
            title: 'España, país de humedales',
            image: './assets/humedal.jpg',
            description: 'España cuenta con una gran diversidad de humedales que son clave para la biodiversidad, especialmente para aves acuáticas como la cerceta pardilla. España cuenta actualmente con 76 humedales incluidos en la Lista Ramsar de Humedales de Importancia Internacional. Estos sitios abarcan una superficie significativa y representan ecosistemas clave protegidos a nivel mundial, situando a España como uno de los países con mayor número de estas zonas protegidas. ',
            location: {
                center: [-3.7, 40.3],
                zoom: 5.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'humedales', opacity: 1 },
                { layer: 'cerceta antes 1990', opacity: 0 },
                { layer: 'cerceta 2000', opacity: 0 },
                { layer: 'cerceta 2000-2010', opacity: 0 },
                { layer: 'cerceta 2010-2015', opacity: 0 },
                { layer: 'cerceta 2015-2020', opacity: 0 },
                { layer: 'cerceta 2020-2025', opacity: 0 }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        // CAPITULO 2 - LA CERCETA PARDILLA
        {
            id: 'cereceta-intro',
            alignment: 'left',
            hidden: false,
            title: 'La cerceta pardilla',
            image: './assets/cerceta.jpg',
            description: 'Las observaciones recientes de la cerceta pardilla muestran su distribución en los humedales más importantes de España.',
            location: {
                center: [-2.5, 39.5],
                zoom: 6.2,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'humedales', opacity: 0.6 },
                { layer: 'cerceta antes 1990', opacity: 1 },
                { layer: 'cerceta 2000', opacity: 1 },
                { layer: 'cerceta 2000-2010', opacity: 1 },
                { layer: 'cerceta 2010-2015', opacity: 1 },
                { layer: 'cerceta 2015-2020', opacity: 1 },
                { layer: 'cerceta 2020-2025', opacity: 1 }
            ],
            onChapterExit: []
        },
        // CAPITUL0 3 - DONDE ESTABA ANTES
        {
            id: 'historico',
            alignment: 'right',
            hidden: false,
            title: 'Distribución histórica de la cerceta',
            image: './assets/cercetas.jpg',
            description: 'La cerceta pardilla estuvo mucho más extendida en el pasado, pero el colapso de humedales ha reducido sus poblaciones, así como el de otras especies acuáticas.',
            location: {
                center: [-1.5, 38.5],
                zoom: 6,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'humedales', opacity: 1 },
                { layer: 'cerceta antes 1990', opacity: 1 },
                { layer: 'cerceta 2000', opacity: 0 },
                { layer: 'cerceta 2000-2010', opacity: 0 },
                { layer: 'cerceta 2010-2015', opacity: 0 },
                { layer: 'cerceta 2015-2020', opacity: 0 },
                { layer: 'cerceta 2020-2025', opacity: 0 }
            ],
            onChapterExit: []
        },
        // CAPÍTULO 4 - EL COLAPSO DE LOS HUMEDALES
        {
            id: 'perdida-humedales',
            alignment: 'left',
            hidden: false,
            title: 'El colapso de los humedales',
            image: './assets/humedalvacio.jpg',
            description: 'Muchos humedales han perdido extensión y calidad debido al impacto de la sequía, la contaminación, la proliferación de barreras artificiales y otras amenazas causadas por actividades humanas.',
            location: {
                center: [-3.7, 40.3],
                zoom: 6,
                pitch: 60.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'humedales', opacity: 0.4 },
                { layer: 'cerceta antes 1990', opacity: 0 },
                { layer: 'cerceta 2000', opacity: 0 },
                { layer: 'cerceta 2000-2010', opacity: 0 },
                { layer: 'cerceta 2010-2015', opacity: 0 },
                { layer: 'cerceta 2015-2020', opacity: 0 },
                { layer: 'cerceta 2020-2025', opacity: 0 }
            ],
            onChapterExit: [
                { layer: 'cerceta 2000', opacity: 1 },
            ]
        },
        // CAPITULO 5 - MINIMO HISTORICO (1994-2005)
        {
            id: 'minimo',
            alignment: 'left',
            hidden: false,
            title: 'Mínimo histórico de la población (2005-2015)',
            image: './assets/chart.png',
            description: 'Durante este periodo, los censos reflejaron el menor número de cercetas pardillas en España, concentradas sobre todo en Andalucía.',
            location: {
                center: [-4.5, 37.5],
                zoom: 6.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            { layer: 'cerceta 2000', opacity: 1 },
            ],
            onChapterExit: []
        },
        // CAPITULO 6 - RESTAURAR FUNCIONA
        {
            id: 'recuperacion-humedales',
            alignment: 'left',
            hidden: false,
            title: 'Recuperación de los humedales',
            image: './assets/recuperacionhumedales.jpg',
            description: 'Los esfuerzos de restauración han permitido que algunas poblaciones se recuperen desde 2011. El Proyecto Life Cerceta Pardilla se ha centrado en la recuperación de esta especie, protegiendo su ecosistema y haciendo programas de cría en cautividad.',
            location: {
                center: [-4.5, 37.5],
                zoom: 6.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'cerceta 2000', opacity: 0 },
                { layer: 'cerceta 2000-2010', opacity: 1, speed: 2 },
                { layer: 'cerceta 2010-2015', opacity: 1, speed: 2  },
                { layer: 'cerceta 2015-2020', opacity: 1, speed: 2  }
            ],
            onChapterExit: [
                { layer: 'cerceta 2000-2010', opacity: 0 },
                { layer: 'cerceta 2010-2015', opacity: 0 },
                { layer: 'cerceta 2015-2020', opacity: 0 }
            ]
        },
        // CAPITULO 7 - RECUPERACION FRAGIL
        {
            id: 'recuperacion-fragil',
            alignment: 'left',
            hidden: false,
            title: 'La frágil recuperación',
            image: './assets/cercetaslife.jpeg',
            description: 'Desde 2021, las poblaciones se han ido recuperando poco a poco, pero dependen de la conservación continua de los humedales.',
            location: {
                center: [-3.7, 39],
                zoom: 6.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'cerceta antes 1990', opacity: 0 },
                { layer: 'cerceta 2000', opacity: 0 },
                { layer: 'cerceta 2000-2010', opacity: 0 },
                { layer: 'cerceta 2010-2015', opacity: 0 },
                { layer: 'cerceta 2015-2020', opacity: 0 },
                { layer: 'cerceta 2020-2025', opacity: 1 }
            ],
            onChapterExit: []
        },
        // CAPITULO 8 - PROTEGER HUMEDALES ES PROTEGER VIDA
        {
            id: 'proteger-humedales',
            alignment: 'left',
            hidden: false,
            title: 'La protección de los humedales',
            image: './assets/cercetacrias.jpg',
            description: 'La conservación de los humedales es clave para la biodiversidad y para mantener especies como la cerceta pardilla. De nosotros depende que este ecosistema tan frágil siga existiendo y que nuestro país conserve su gran biodiversidad.',
            location: {
                center: [-3.7, 40.3],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
