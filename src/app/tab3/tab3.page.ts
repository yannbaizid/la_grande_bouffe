import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
import { Event } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements AfterViewInit {
  @ViewChild('imageCanvas', { static: false }) canvas: any;
  canvasElement: any;
  saveX: number;
  saveY: number;

  selectedColor = '#9e2956';
  colors = ['#9e2956', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3'];

  drawing = false;
  lineWidth = 5;

  constructor(private plt: Platform, private toastCtrl: ToastController) { }

  ngAfterViewInit() {
    // Set the Canvas Element and its size
    this.canvasElement = this.canvas.nativeElement;
    this.canvasElement.width = 300 + '';
    this.canvasElement.height = 300 + '';
  }

  startDrawing(ev) {
    console.log('startdrawing' + this.drawing);
    this.drawing = true;
    const canvasPosition = this.canvasElement.getBoundingClientRect();

    this.saveX = ev.pageX - canvasPosition.x;
    this.saveY = ev.pageY - canvasPosition.y;
  }

  endDrawing() {
    console.log('enddrawing' + this.drawing);
    this.drawing = false;
  }

  selectColor(color) {
    this.selectedColor = color;
  }

  setBackground() {
    const background = new Image();
    background.src = '../assets/img/frites.png';
    const ctx = this.canvasElement.getContext('2d');

    background.onload = () => {
      ctx.drawImage(background, 0, 0, this.canvasElement.width, this.canvasElement.height);
    };
  }
  moved(ev) {
    console.log('moved' + this.drawing);
    if (this.drawing) {

      const canvasPosition = this.canvasElement.getBoundingClientRect();
      const ctx = this.canvasElement.getContext('2d');

      const currentX = ev.pageX - canvasPosition.x;
      const currentY = ev.pageY - canvasPosition.y;

      ctx.lineJoin = 'round';
      ctx.strokeStyle = this.selectedColor;
      ctx.lineWidth = this.lineWidth;

      ctx.beginPath();
      ctx.moveTo(this.saveX, this.saveY);
      ctx.lineTo(currentX, currentY);
      ctx.closePath();

      ctx.stroke();

      this.saveX = currentX;
      this.saveY = currentY;
    }
  }
}
