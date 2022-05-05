import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  
  assignments: Assignments[]=[{
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

  constructor() {

   }
   getAssignments():Assignment[]{
     return this.assignments();
   }
}
