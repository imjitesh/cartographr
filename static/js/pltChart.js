var charted = {
    bindto: '#chart',
    data:{
        x: '',
        columns:[],
        type:"",
        labels:true,
        groups: [],
        colors:{}
    },
    axis:{
        rotated:false,
        x:{
            show:true,
            type:'category',
            tick: {
                fit: true,
                outer: true,
                rotate: 0
            },
            label: {
                position: 'outer-center'
            },
            max:undefined,
            min:undefined
        },
        y:{
            show:true,
            tick: {
                format: d3.format(''),
                outer: true
            },
            label: {
                position: 'outer-middle'
            }
        },
        y2:{
            show:false,
            tick: {
                //format: d3.format('$,'),
                outer: true
            },
            label: {
                position: 'outer-middle'
            }
        }
    },
    grid:{
        x:{
            show:false,
            
        },
        y:{
            show:false,
            lines: []
        }
    },
    legend: {
        show: true,
        position: ''
    },
    tooltip: {
        show: true
    },
    regions: [],
    point: {
        show: true
    }
};
