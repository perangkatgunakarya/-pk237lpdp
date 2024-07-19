(async () => {
    const topology = await fetch(
        "https://code.highcharts.com/mapdata/countries/id/id-all.topo.json",
    ).then((response) => response.json());

    const data = [
        ["id-3700", 0],
        ["id-ac", 2],
        ["id-ba", 4],
        ["id-bt", 14],
        ["id-be", 1],
        ["id-yo", 24],
        ["id-jk", 33],
        ["id-go", 3],
        ["id-ja", 3],
        ["id-jr", 49],
        ["id-jt", 31],
        ["id-ji", 45],
        ["id-kb", 3],
        ["id-ks", 1],
        ["id-kt", 3],
        ["id-ki", 1],
        ["id-kr", 2],
        ["id-1024", 5],
        ["id-ma", 10],
        ["id-la", 2],
        ["id-nb", 2],
        ["id-nt", 9],
        ["id-pa", 7],
        ["id-ib", 2],
        ["id-ri", 4],
        ["id-sr", 1],
        ["id-se", 15],
        ["id-st", 1],
        ["id-sg", 2],
        ["id-sw", 3],
        ["id-sb", 6],
        ["id-sl", 7],
        ["id-su", 7],
    ];

    // Create the chart
    Highcharts.mapChart("demografi", {
        exporting: { enabled: false },
        chart: {
            map: topology,
            backgroundColor: "transparent",
        },
        credits: {
            enabled: false,
        },
        legend: {
            enabled: false,
        },
        title: {
            text: "",
        },
        subtitle: {
            text: "",
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: "bottom",
            },
        },
        colorAxis: {
            min: 0,
            max: 3,
            stops: [
                [0, "#FFFFFF"],
                [1, "#F0A834"],
                // [1, '#D17A00']
            ],
        },
        series: [
            {
                data: data,
                name: "Domisili",
                // states: {
                // 	hover: {
                // 		color: '#ffcf82'
                // 	}
                // },
                dataLabels: {
                    enabled: true,
                    format: "{point.name}",
                },
            },
        ],
    });
})();