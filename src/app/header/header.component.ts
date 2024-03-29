import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public collapsed = true;

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  public onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  public onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

}
