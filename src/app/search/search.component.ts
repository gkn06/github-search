import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private searchService: SearchService) {}

  searchTerm = '';
  user: any = {};
  searchHistories: any = [];
  ngOnInit(): void {
    const histories = localStorage.getItem('history');
    this.searchHistories = histories ? JSON.parse(histories) : [];
  }

  assign(searchext: string) {
    this.searchTerm = searchext;
  }

  searchUser(): void {
    this.searchService.getUser(this.searchTerm).subscribe((user) => {
      this.user = user;
      const result = {
        searchTerm: this.searchTerm,
        result: this.user,
      };
      this.searchHistories.push(result);
      localStorage.setItem('history', JSON.stringify(this.searchHistories));
    });
  }
}
