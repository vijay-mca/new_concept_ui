import { AfterContentChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent implements OnInit, AfterContentChecked {
  @Input() githubUsers: any[] = [];
  user: any;
  constructor(private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {

  }

  ngAfterContentChecked(): void {
    // console.log(this.githubUsers)
    // this.cdr.detectChanges();
  }

  getUser(idx: number) {
    this.user = undefined;
    this.cdr.detectChanges();
    const user = this.githubUsers[idx];
    this.user = user;
  }
}
