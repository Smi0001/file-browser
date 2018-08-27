import { Component, OnInit, Input } from '@angular/core';
import { FolderServiceService } from '../folder-service.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

    @Input() folderObj: any;
    childFolderObj: any;
    folderContentArray: any;
    selectedFolder: any;

  constructor(
      private folderService: FolderServiceService
  ) { }

  ngOnInit() {
    // console.log('app-folder', this.folderObj);
    this.childFolderObj = this.folderObj;
    this.folderContentArray = this.folderService.getArrayFromObject(this.childFolderObj.folderContent);
  }

  toggleFolder(_event) {
      _event.stopPropagation();
      const element: HTMLElement = _event.target;
      const folderNode: HTMLElement = element.parentElement.parentElement.parentElement;
    if (element.classList.contains('collapse')) {
        element.classList.remove('collapse');
        element.classList.add('expand');
        folderNode.classList.add('show');
        folderNode.classList.remove('hide');
    } else {
        element.classList.remove('expand');
        element.classList.add('collapse');
        folderNode.classList.add('hide');
        folderNode.classList.remove('show');
    }
  }

  selectFolder(_event, folderObj) {
    _event.stopPropagation();
    const element: HTMLElement = _event.target;
    console.log(folderObj);
    const selectedItem = document.querySelector('.folder.active');
    if (selectedItem) {
      selectedItem.classList.remove('active');
    // } else {
    //   selectedItem = document.querySelector('.file.active');
    //   if (selectedItem) {
    //     selectedItem.classList.remove('active');
    //   }
    }
    element.classList.add('active');
    // const rootNode: HTMLElement = element.parentElement.parentElement.parentElement;
    // this.selectedFolder = folderObj;
    this.folderService.setSelectedFolder(folderObj);
  }

}
