import { PipeTransform, Pipe } from '@angular/core';
@Pipe({ name: 'fileFolderPipe' })
export class FileFolderPipe implements PipeTransform {
    transform(fileFolderObj): any {
        console.log('rcvd->', fileFolderObj);
        let result = [];
        if (Array.isArray(fileFolderObj)) { // file list
           result = fileFolderObj;
        } else { // folder list
            const keys = Object.keys(fileFolderObj);
            keys.forEach(key => {
                result.push({
                    folderName: key,
                    folderContent: fileFolderObj[key]
                });
            });
        }
        console.log('piped->', result);
        return result;
    }
}
