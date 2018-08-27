import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FolderServiceService {
  currentSelectedFolder: any;
  constructor() { }

  setSelectedFolder(folderObj) {
    this.currentSelectedFolder = folderObj;
    document.getElementById('refreshView').click();
  }
  getSelectedFolder() {
    return this.currentSelectedFolder;
  }
  getArrayFromObject(fileFolderObj): any {
    // console.log('rcvd->', fileFolderObj);
    let result = [];
    if (Array.isArray(fileFolderObj)) { // return file list
        result = fileFolderObj;
    } else { // return folder list
        const keys = Object.keys(fileFolderObj);
        keys.forEach(key => {
            result.push({
                folderName: key,
                folderContent: fileFolderObj[key]
            });
        });
    }
    // console.log('piped->', result);
    return result;
  }

}
