import { Injectable } from '@angular/core';


@Injectable()
export class TabsEnablor {


  isEnabled: boolean;

  constructor() {
    this.isEnabled = false;
  }

  setEnableState(bool: boolean) {
  	this.isEnabled = bool;
    console.log('ALL YOUR BASES ARE BELONG TO US', bool);
  }

  getEnableState() {
    return this.isEnabled;
  }

}
