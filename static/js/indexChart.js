function createChart(listId){
    var charted = {
        bindto: listId,
        data:{
            x: '',
            columns:cData,
            type:type,
            labels:false,
            groups: [],
            colors:{}
        },
        axis:{
            rotated:false,
            x:{
                show:false,
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
                show:false,
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
            show: false,
            position: ''
        },
        tooltip: {
            show: false
        },
        regions: [],
        point: {
            show: true
        }
    };
    return charted;
}