const chart = echarts.init(document.getElementById('chart'));

const names = ["UAM", "ECOEMS", "IPN", "CENEVAL", "UNAM"];

const values = [85, 80, 75, 60, 90];

// UNAM seleccionada inicialmente
let selectedIndex = 4;

const info = [
  {
    title: "UAM",
    text: "El porcentaje de rechazo ronda entre el -- y el -- de los aspirantes..."
  },
  {
    title: "ECOEMS",
    text: "El porcentaje de rechazo ronda entre el -- y el -- de los aspirantes..."
  },
  {
    title: "IPN",
    text: "El porcentaje de rechazo ronda entre el -- y el -- de los aspirantes..."
  },
  {
    title: "CENEVAL",
    text: "El porcentaje de rechazo ronda entre el -- y el -- de los aspirantes..."
  },
  {
    title: "UNAM (Universidad Nacional Autónoma de México)",
    text: "El porcentaje de rechazo ronda entre el <span>90%</span> y el <span>92%</span> de los aspirantes que realizan el examen de selección. Es decir, de cada <span>100 estudiantes</span> que presentan la prueba, solo logran entrar entre <span>8 y 10</span>. En las carreras de alta demanda (como Medicina, Psicología o Derecho), el rechazo puede superar el <span>98%</span>."
  }
];

const colors = [
  '#ffffff',
  '#fffff1',
  '#fffff2',
  '#fffff3',
  '#fffff4'
];

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },

  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },

  xAxis: {
    type: 'value',
    max: 100,

    axisLabel: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'normal',
  }
  },

  yAxis: {
    type: 'category',
    data: names,

    axisLabel: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'normal',
  }
  },

  series: [{
    type: 'bar',
    barWidth: 50,

    data: values,

    itemStyle: {
      borderRadius: [0, 10, 10, 0],

      color: function(params) {

        if (params.dataIndex === selectedIndex) {
          return '#8f8f8f';
        }

        return colors[params.dataIndex];
      }
    }
  }]
};

// Dibujar gráfica
chart.setOption(option);

// Información inicial (UNAM)
document.getElementById("infoTitle").innerText =
  info[selectedIndex].title;

document.getElementById("infoText").innerHTML =
  info[selectedIndex].text;

// Click en barras
chart.on('click', function (params) {

  selectedIndex = params.dataIndex;

  chart.setOption({
    series: [{
      itemStyle: {
        borderRadius: [0, 10, 10, 0],

        color: function(p) {

          if (p.dataIndex === selectedIndex) {
            return '#8f8f8f';
          }

          return colors[p.dataIndex];
        }
      }
    }]
  });

  document.getElementById("infoTitle").innerText =
    info[selectedIndex].title;

  document.getElementById("infoText").innerHTML =
    info[selectedIndex].text;
});