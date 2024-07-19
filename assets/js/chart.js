var options = {
    plotOptions: {
        pie: {
            dataLabels: {
                offset: -30,
            },
        },
    },
    series: [147, 156],
    chart: {
        width: "100%",
        height: "100%",
        type: "pie",
    },
    colors: ["#4979a8", "#F0A834"],
    stroke: {
        show: true,
        width: 0,
        lineCap: "round",
    },
    dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
            return opts.w.globals.labels[opts.seriesIndex]; // Use label instead of value
        },
        style: {
            fontSize: "16px",
            colors: ["#fff"],
            fontWeight: "bold",
        },
    },
    labels: ["Laki-Laki", "Perempuan"],
    legend: {
        show: false,
        labels: {
            colors: ["#FFFFFF", "#FFFFFF"],
        },
        fontWeight: 600,
    },
};

var chart = new ApexCharts(document.querySelector("#gender"), options);
chart.render();




var options = {
    plotOptions: {
        pie: {
            dataLabels: {
                offset: -30,
            },
        },
    },
    series: [189, 53, 46, 13, 2],
    chart: {
        width: "100%",
        height: "100%",
        type: "pie",
    },
    colors: ["#30608F", "#fdd756", "#F0A834", "#38c6f3", "#369dd8"],
    stroke: {
        show: true,
        width: 0,
        lineCap: "round",
    },
    dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
            return opts.w.globals.labels[opts.seriesIndex]; // Use label instead of value
        },
        style: {
            fontSize: "14px",
            colors: ["#fff"],
            fontWeight: "bold",
        },
    },
    labels: [
        "Magister DN",
        "Doktor DN",
        "Magister LN",
        "Doktor LN",
        "Spesialis DN",
    ],
    legend: {
        show: false,
        labels: {
            colors: ["#FFFFFF", "#FFFFFF"],
        },
        fontWeight: 600,
    },
};

var chart = new ApexCharts(
    document.querySelector("#scholarship"),
    options,
);
chart.render();