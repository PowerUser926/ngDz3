import { Component, OnInit } from '@angular/core';

import { RulesService } from '../data/rules.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css'],
})
export class RulesComponent implements OnInit {
  rules: string[] = [];

  constructor(private rulesService: RulesService) {}

  ngOnInit(): void {
    this.rules = this.rulesService.rules.slice();
  }
}
