import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder ,FormsModule} from '@angular/forms';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  
  title = "apache-atlas";

  slectedCategory: string;
  categories: string[] = ["Terms", "Category"];

  autoRenew = new FormControl();
  onChange() {
    console.log(this.autoRenew.value);
  }

  data = {
    "guid": "2f341934-f18c-48b3-aa12-eaa0a2bfce85",
    "qualifiedName": "SampleBank",
    "displayName": "Banking",
    "shortDescription": "Glossary of bank",
    "longDescription": "Glossary of bank - long description",
    "language": "English",
    "usage": "N/A",
    "terms": [
    {
      "termGuid": "502d34f1-b85f-4ad9-9d9f-fe7020ff0acb",
      "relationGuid": "6bb803e4-3af6-4924-aad6-6ad9f95ecd14",
      "displayText": "A savings account"
    }, {
      "termGuid": "e441a540-ee55-4fc8-8eaf-4b9943d8929c",
      "relationGuid": "dbc46795-76ff-4f68-9043-be0eff0bc0f3",
      "displayText": "15-30 yr mortgage"
    }, {
      "termGuid": "998e3692-51a8-47fe-b3a0-0d9f794437eb",
      "relationGuid": "0dcd31b9-a81c-4185-ad4b-9209a97c305b",
      "displayText": "A checking account"
    }, {
      "termGuid": "c4e2b956-2589-4648-8596-240d3bea5e44",
      "relationGuid": "e71c4a5d-694b-47a5-a41e-126ade857279",
      "displayText": "ARM loans"
    }],
    "categories": [{
      "categoryGuid": "dd94859e-7453-4bc9-b634-a17fc14590f8",
      "parentCategoryGuid": "e6a3df1f-5670-4f9e-84da-91f77d008ce3",
      "relationGuid": "a0b7da02-1ccd-4415-bc54-3d0cdb8857e7",
      "displayText": "Accounts"
    }, {
      "categoryGuid": "e6a3df1f-5670-4f9e-84da-91f77d008ce3",
      "relationGuid": "0e84a358-a4aa-4bd3-b806-497a6962ae1d",
      "displayText": "Customer"
    }, {
      "categoryGuid": "7f041401-de8c-443f-a3b7-7bf5a910ff6f",
      "parentCategoryGuid": "e6a3df1f-5670-4f9e-84da-91f77d008ce3",
      "relationGuid": "7757b031-4e25-43a8-bf77-946f7f06c67a",
      "displayText": "Loans"
    }]
  }


  

  /**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */





  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  ngOnInit(){}

}










interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

