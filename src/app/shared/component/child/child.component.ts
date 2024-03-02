import { AfterViewChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit, AfterViewChecked {
  @Input() user: any;

  constructor(private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    console.log('this.user', this.user)
  }

  ngAfterViewChecked(): void {
    // this.cdr.detectChanges();
  }
}
