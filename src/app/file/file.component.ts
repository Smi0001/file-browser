import { Component, OnInit, Input } from '@angular/core';
import { FolderServiceService } from '../folder-service.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  @Input() fileObj: any;
  constructor(
    private folderService: FolderServiceService
  ) { }

  ngOnInit() {
    // console.log('file->', this.fileObj);
  }

  // selectFile(_event, fileObj) {
  //   _event.stopPropagation();
  //   const element: HTMLElement = _event.target;
  //   console.log(fileObj, element);
  //   const selectedItem = document.querySelector('.folder.active');
  //   if (selectedItem) {
  //     selectedItem.classList.remove('active');
  //   // } else {
  //   //   selectedItem = document.querySelector('.file.active');
  //   //   if (selectedItem) {
  //   //     selectedItem.classList.remove('active');
  //   //   }
  //   }
  //   element.classList.add('active');
  //   // const rootNode: HTMLElement = element.parentElement.parentElement.parentElement;
  //   // this.selectedItem = fileObj;
  //   this.folderService.setSelectedFolder(fileObj);
  // }

}
