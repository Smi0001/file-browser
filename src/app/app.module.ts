import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectoryComponent } from './directory/directory.component';
import { TrashBinComponent } from './trash-bin/trash-bin.component';
import { FolderComponent } from './folder/folder.component';
import { FileComponent } from './file/file.component';
import { RootFolderComponent } from './root-folder/root-folder.component';
import { FileFolderPipe } from './file-folder.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryComponent,
    TrashBinComponent,
    FolderComponent,
    FileComponent,
    RootFolderComponent,
    FileFolderPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
