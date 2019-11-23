import { Component, OnInit } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-constancia',
  templateUrl: './constancia.page.html',
  styleUrls: ['./constancia.page.scss'],
})
export class ConstanciaPage implements OnInit {

  constructor(
    private platform: Platform,
    private file: File,
    private ft: FileTransfer, 
    private fileOpener: FileOpener,
    private document: DocumentViewer  ) { }

  ngOnInit() {
  }
  openLocalPdf(){

  }
  downloadAndOpenPdf(){

  }
}
