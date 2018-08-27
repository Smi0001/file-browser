import { Component, OnInit } from '@angular/core';
// import * as json from '../../assets/long.json';
// import * as json from '../../assets/short.json';
import { FolderServiceService } from '../folder-service.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  fileJSONarray = [
  {
    'title': 'LittleBigPlanet PS Vita',
    'Game play resources':
      {
        'Installation':
          [
            { 'file_name': 'install.iso', 'type': 'iso image' },
            { 'file_name': 'archive_unbox.dat', 'type': 'dat file' }
          ],
        'Resource Dependency':
            [
              { 'file_name': 'profile.sav', 'type': 'sav file' },
              { 'file_name': 'snd0.AT3', 'type': 'AT3 file' }
            ]
      }
  },
  {
    'title': 'Marvel Super Hero Edition',
    'Game play resources':
      {
        'Installation':
          [
            { 'file_name': 'install.iso', 'type': 'iso image' },
            { 'file_name': 'archive_unbox.dat', 'type': 'dat file' }
          ],
        'Resource Dependency':
            [
              { 'file_name': 'profile.sav', 'type': 'sav file' },
              { 'file_name': 'snd0.AT3', 'type': 'AT3 file' }
            ]
      }
  },
  {
    'title': 'Splice: Tree of Life',
    'Game play resources':
      {
        'Installation':
          [
            { 'file_name': 'install.iso', 'type': 'iso image' },
            { 'file_name': 'archive_unbox.dat', 'type': 'dat file' }
          ],
        'Resource Dependency':
            [
              { 'file_name': 'profile.sav', 'type': 'sav file' },
              { 'file_name': 'snd0.AT3', 'type': 'AT3 file' }
            ]
      }
  }
];
  // fileJSONarray: any;
  selectedFolder: any;
  folderFileArray: any;
  currentDate = (new Date).toLocaleDateString();
  selectedFolderList = [];
  createNewFolder = false;
  createNewFile = false;
  constructor(
    private folderService: FolderServiceService
  ) { }

  ngOnInit() {
    // const jSON = (<any>json).default;
    // console.log('directory->', this, jSON);
    // this.fileJSONarray = jSON;
    localStorage.setItem('fileJSONarray', JSON.stringify(this.fileJSONarray));
    setTimeout(() => {
      const firstNode = <HTMLAnchorElement> document.getElementsByClassName('folder')[0];
      firstNode.click();
    }, 100);
  }

  updateFolder(_event) {
    const val = _event.target.value;
    if (_event.keyCode === 13  && val) {
      this.selectedFolder = this.folderService.getSelectedFolder();
      this.selectedFolder[val] = {folderContent: []};
      this.createNewFile = false;
    }
  }
  updateFile(_event) {
    const val = _event.target.value;
    if (_event.keyCode === 13 && val) {
      this.selectedFolder = this.folderService.getSelectedFolder();
      this.selectedFolder[val] = {file_name: val};
      this.createNewFile = false;
    }
  }
  addFolder() {
    this.createNewFolder = true;
    setTimeout(() => {
      document.getElementById('newFolder').focus();
    }, 100);
  }
  addFile() {
    this.createNewFile = true;
    setTimeout(() => {
      document.getElementById('newFile').focus();
    }, 100);
    this.selectedFolder = this.folderService.getSelectedFolder();
    console.log('selectedFolder', this.selectedFolder);
    // const matchElement = (array) => {
    //   array.forEach(element => {
    //     console.log(element, this.selectedFolder.folderName);
    //     if (element[this.selectedFolder.folderName]) {
    //       // matched, create new
    //     } else {
    //       matchElement([this.selectedFolder.folderContent]);
    //     }
    //   });
    // };
    // matchElement(this.fileJSONarray);
  }
  deleteSelected() {
    this.selectedFolder = this.folderService.getSelectedFolder();
    console.log('selectedFolder', this.selectedFolder);
  }
  renameSelected() {
    this.selectedFolder = this.folderService.getSelectedFolder();

  }
  refreshFolderFileArray() {
    this.selectedFolder = this.folderService.getSelectedFolder();
    console.log('selectedFolder', this.selectedFolder);
    // this.folderFileArray = this.getItemList(this.selectedFolder);
  }
  refreshView() {
    this.selectedFolder = this.folderService.getSelectedFolder();
  }

}
