import { Component, OnInit, Input } from '@angular/core';
import { FolderServiceService } from '../folder-service.service';

@Component({
  selector: 'app-root-folder',
  templateUrl: './root-folder.component.html',
  styleUrls: ['./root-folder.component.css']
})
export class RootFolderComponent implements OnInit {

  @Input() folderJson: any;
  rootFolder: any = {};
  rootFolderName: String;
  currentFolderArray: any;
  folderObj: any = {};
  rootFolderContentArray: any;
  selectedFolder: any;
  constructor(
    private folderService: FolderServiceService
  ) { }

  ngOnInit() {
    this.currentFolderArray = Object.keys(this.folderJson);
    this.rootFolderName = this.folderJson[this.currentFolderArray[0]];
    this.folderObj[this.currentFolderArray[1]] = this.folderJson[this.currentFolderArray[1]];
    this.rootFolder = {
      folderName: this.rootFolderName,
      folderContent: this.folderJson[this.currentFolderArray[1]]
    };
    this.rootFolderContentArray = this.folderService.getArrayFromObject(this.folderObj);
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
    const selectedFolder = document.querySelector('.folder.active');
    if (selectedFolder) {
        selectedFolder.classList.remove('active');
    }
    element.classList.add('active');
    // const rootNode: HTMLElement = element.parentElement.parentElement.parentElement;
    // this.selectedFolder = folderObj;
    this.folderService.setSelectedFolder(folderObj);
  }

}
