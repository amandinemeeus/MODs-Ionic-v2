import { Injectable } from '@angular/core';


@Injectable()
export class TabsEnablor {


  isEnabled: boolean;

  constructor() {
    this.isEnabled = true;
  }

  setEnableState(bool: boolean) {
  	this.isEnabled = bool;
    console.log('ALL YOUR BASES ARE BELONG TO US');
  }

  getEnableState() {
    return this.isEnabled;
  }

}
