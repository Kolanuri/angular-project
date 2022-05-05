import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {
  title='My assignments Application';
  assignments=[{
    name: 'One',
    duedate: '10-2-1999',
    submitted: true
  },
    { 
      name: 'Two',
      duedate:'11-2-1998',
      submitted:false
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
