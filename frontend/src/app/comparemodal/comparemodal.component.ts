import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-comparemodal',
  templateUrl: './comparemodal.component.html',
  styleUrls: ['./comparemodal.component.css']
})
export class ComparemodalComponent implements OnInit {
  //@Input() my_modal_title;
  //@Input() my_modal_content;
  @Input() compareImageObj : [];
  my_modal_title = 'Result Image Comparison';
  my_modal_content = 'Compare color of Images';
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log('On Init inside Compare Modal')
    console.log(this.compareImageObj)
    //Set feature vals for image 1 and image 2

    //Code for triggering horizontal bar chart
    HighCharts.chart('barChart', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'bar'
    },
    title: {
      text: 'Feature Contribution'
    },
    xAxis: {
          categories: ['Image1', 'Image2'],
          title: {
              text: null
          }
      },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    /*plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },*/
    plotOptions: {
          pie: {
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
          shadow: true
      },
    series: [{
      name: 'color',
      data: [107, 31]
    }, {
      name: 'foreground color',
      data: [133, 156]
    }, {
      name: 'background color',
      data: [814, 841]
    }, {
      name: 'texture',
      data: [1216, 1001]
  }]
  });
  }
  

}
