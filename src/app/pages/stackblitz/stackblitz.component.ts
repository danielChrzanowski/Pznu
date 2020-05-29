import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { NavigationEnd, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import { UserSingleton } from 'src/app/models/user-singleton/user-singleton.service';
import { OrderService } from 'src/app/services/order-service/order.service';

@Component({
  selector: 'app-stackblitz',
  templateUrl: './stackblitz.component.html',
  styleUrls: ['./stackblitz.component.scss']
})
export class StackblitzComponent implements OnInit {

  displayedColumns: string[] = ['zamowienie_id', 'data', 'suma_cen', 'stan'];
  interval;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('pdfDiv') pdfDiv: ElementRef;

  constructor(
      private loggedUserService: UserSingleton) { }

  ngOnInit(): void {

  }


  //pobierz widok jako pdf
  exportAsPDF() {
    let data = this.pdfDiv.nativeElement;
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/jpeg')

      //Generates PDF in landscape mode
      //let pdf = new jsPDF('l', 'cm', 'a4');

      //Generates PDF in portrait mode
      let pdf = new jsPDF('p', 'cm', 'a4');

      //var width = pdf.internal.pageSize.getWidth();
      //var height = pdf.internal.pageSize.getHeight();

      pdf.addImage(contentDataURL, 'PNG', -0.6, 0);
      pdf.save('orders.pdf');
    });
  }

  //pobierz pdf bez polskich znakow
  exportAsPDF2() {
    let doc = new jsPDF('1', 'pt', 'a4');

    let specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    let pdfDiv = this.pdfDiv.nativeElement;

    doc.fromHTML(pdfDiv.innerHTML, 15, 15, {
      width: 1900,
      'elementHandlers': specialElementHandlers
    });

    doc.save('orders.pdf');
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
