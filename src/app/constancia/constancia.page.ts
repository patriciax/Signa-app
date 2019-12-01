import { Component, OnInit } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

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

    let filePath = this.file.applicationDirectory + 'www/assets';

    if(this.platform.is('android')){
        let fakeName = Date.now();
        this.file.copyFile(filePath, '5-ols.pdf' , this.file.dataDirectory, `${fakeName}.pdf` ).then (result => {
            this.fileOpener.open(result.nativeURL,'application/pdf' );
        });
    }

    else {
        const options: DocumentViewerOptions = {
            title: 'My PDF'
        }
        this.document.viewDocument(`${filePath}/5-tools.pdf` , 'application/pdf', options);
    }

  }
  downloadAndOpenPdf(){
    let downloadUrl = 'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
    let path = this.file.dataDirectory;
    const transfer = this.ft.create();

    transfer.download(downloadUrl, `${path}myfile.pdf`).then(entry => {
        let url = entry.toURL();
        if(this.platform.is('ios')) {
            this.document.viewDocument(url , 'application/pdf', {});
        }
        else{
            this.fileOpener.open(url,'application/pdf' );

        }
    });
 }
}
