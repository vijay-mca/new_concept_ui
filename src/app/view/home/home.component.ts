import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './home.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
interface GitHubUsersInterface {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean
};

const GITHUB_USERS_DATA: GitHubUsersInterface[] = [];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort, { static: true }) private matSort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) private matPaginator!: MatSort;

  dataSource = new MatTableDataSource<GitHubUsersInterface>(GITHUB_USERS_DATA);

  githubUsers: GitHubUsersInterface[] = [];
  constructor(private readonly homeService: HomeService) { }

  ngOnInit(): void {
    this.getGithubAPI();
  }

  ngAfterViewInit(): void {
  }


  getGithubAPI() {
    try {
      this.homeService.httpGetGithubAPI().subscribe((res: any) => {
        this.githubUsers = res;
        console.log('run');
      });
    } catch (error) {

    }
  }
}
