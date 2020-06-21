import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as HighCharts from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-comparemodal',
  templateUrl: './comparemodal.component.html',
  styleUrls: ['./comparemodal.component.css']
})
export class ComparemodalComponent implements OnInit {
  @Input() name1;
  @Input() name2;
  @Input() compareImageObj : [];
  my_modal_title = 'Result Images Comparison';
  my_modal_content = 'Compare color of Images';
  imageUrl1 = '';
  imageUrl2 = '';
  public options: any = {
    chart: {
      type: 'bar'
  },
  title: {
      text: 'Selected Images against Uploaded Image comparison',
      align:'left',
      style:{
        fontSize: '15px',
        color:'#27346B'
      }
  },
  /*subtitle: {
      text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
  },*/
  xAxis: {
      categories: ['Image1', 'Image2'],
      title: {
          text: null
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Level (in percentage)',
          align: 'high'
      },
      labels: {
          overflow: 'justify'
      }
  },
  tooltip: {
      valueSuffix: ' %'
  },
  plotOptions: {
      bar: {
          dataLabels: {
              enabled: true
          }
      }
  },
  legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      x: -40,
      y: 80,
      floating: true,
      borderWidth: 1,
      backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
      shadow: true
  },
  credits: {
      enabled: false
  },
  series: [{
      name: 'Color',
      data: [35, 12]
  }, {
      name: 'Foreground',
      data: [20, 25]
  }, {
      name: 'Background',
      data: [25, 10]
  }, {
      name: 'Texture',
      data: [15, 45]
  }, {
      name: 'Shape',
      data: [5,8]
  }]
  }
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.imageUrl1 =`http://localhost:3000/static/${this.name1}`
    this.imageUrl2 =`http://localhost:3000/static/${this.name2}`
    console.log('On Init inside Compare Modal')
    console.log(this.compareImageObj)
    //Set the options defined as instance variable to the barChart and pass to constructor
    Highcharts.chart('barChart', this.options);  
  }
}
