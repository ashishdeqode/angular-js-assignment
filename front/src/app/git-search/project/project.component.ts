import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  // to handle error messages
  loading: boolean = false;
  noDataError: boolean = false;
  serverError: boolean = false;

  // to store search string
  searchText: string = '';

  // for pagination
  currentPage: number = 1;
  perPageLimit: number = 10;
  totalRecords: number = 0;

  // to store api response data
  projectData: Array<any> = [];

  constructor(
    private gitService: ApiService
  ) { }

  // to search project
  searchProject() {
    if (this.searchText.trim().length == 0) {
      return;
    }

    this.projectData = [];
    this.loading = true;
    this.noDataError = false;
    this.serverError = false;

    const params = {
      repo: this.searchText,
      page: this.currentPage,
      limit: this.perPageLimit
    };

    this.gitService.searchGitProject(params).subscribe((resp: any) => {
      if (resp.statusCode == 200) {
        this.totalRecords = resp.data.total_count;
        this.projectData = resp.data.items;
        this.loading = false;
        if (this.projectData.length == 0) {
          this.noDataError = true;
        }
      } else {
        this.loading = false;
        this.serverError = true;
      }
    })
  }

  // to clear search
  clearSearch() {
    this.loading = false;
    this.noDataError = false;
    this.serverError = false;
    this.projectData = [];
    this.currentPage = 1;
    this.totalRecords = 0;
  }

  pageChange(event: any) {
    // store new page
    const newPage = event.pageIndex + 1;

    // call on next or previous page event
    if (newPage > this.currentPage && event.pageSize === this.perPageLimit) {
      this.currentPage = newPage;
      this.searchProject();
    } else if (newPage < this.currentPage && event.pageSize === this.perPageLimit) {
      this.currentPage = newPage;
      this.searchProject();
    }

    // call when page size is changed
    if (event.pageSize !== this.perPageLimit) {
      this.currentPage = 0;
      this.perPageLimit = event.pageSize;
      this.searchProject();
    }
  }

}
