import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  // Must be declared as "any", not as "DataTables.Settings"
  dtOptions: any = {};

  dtUsers = [
    { "id": 101, "firstName": "Anil", "lastName": "Singh" },
    { "id": 102, "firstName": "Reena", "lastName": "Singh" },
    { "id": 103, "firstName": "Aradhay", "lastName": "Simgh" },
  { "id": 104, "firstName": "Dilip", "lastName": "Singh" },
    { "id": 105, "firstName": "Alok", "lastName": "Singh" },
    { "id": 106, "firstName": "Sunil", "lastName": "Singh" },
    { "id": 107, "firstName": "Sushil", "lastName": "Singh" },
    { "id": 108, "firstName": "Sheo", "lastName": "Shan" },
    { "id": 109, "firstName": "Niranjan", "lastName": "R" },
    { "id": 110, "firstName": "Lopa", "lastName": "Mudra" },
    { "id": 111, "firstName": "Paramanand", "lastName": "Tripathi" }
  ];
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      // Declare the use of the extension in the dom parameter
      dom: '<"html5buttons"B>lTfgitp',
      data: this.dtUsers,
      columns: [
        { title: 'ID', data: 'id' },
        { title: 'FirstName', data: 'firstName' },
        { title: 'LastName', data: 'lastName' }
      ],
      // Configure the buttons
      buttons: [
        { extend: 'colvis' },
        { extend: 'copy' },
        { extend: 'csv' },
        { extend: 'excel', title: 'ExampleFile' },
        { extend: 'pdf', title: 'ExampleFile' },
        {
          extend: 'print',
          customize: function (win) {
            $(win.document.body).addClass('white-bg');
            $(win.document.body).css('font-size', '10px');

            $(win.document.body).find('table')
              .addClass('compact')
              .css('font-size', 'inherit');
          }
        }      
      ]
    };
  }

}
