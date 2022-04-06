import { Component, Input, OnInit } from '@angular/core';
import { coreData, skillName } from 'src/app/data/job_core';
import { jobNames } from 'src/app/data/job_data';

@Component({
  selector: 'app-core-table',
  templateUrl: './core-table.component.html',
  styleUrls: ['./core-table.component.scss']
})
export class CoreTableComponent implements OnInit {

  @Input() core_data : Record<jobNames,number[]> = coreData['나이트로드'];
  @Input() core_skill_name : string[] = skillName['나이트로드'];
  @Input() core_table :number[] = [];

  constructor() { }

  ngOnInit(): void {
  }



}
