import { NgModule } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form';
import { FakeWorldComponent } from './fake-world/fake-world';
import { LeftMenuComponent } from './left-menu/left-menu';
import { ModEditorComponent } from './mod-editor/mod-editor';
import { RightMenuComponent } from './right-menu/right-menu';
import { ToolbarComponent } from './toolbar/toolbar';
import { OrdermodalComponent } from './ordermodal/ordermodal';

@NgModule({
	declarations: [
    FakeWorldComponent,
    LeftMenuComponent,
    ModEditorComponent,
    RightMenuComponent,
    ToolbarComponent,
    ContactFormComponent,
    OrdermodalComponent],
	imports: [],
	exports: [
    FakeWorldComponent,
    LeftMenuComponent,
    ModEditorComponent,
    RightMenuComponent,
    ToolbarComponent,
    ContactFormComponent,
    OrdermodalComponent]

})

export class ComponentsModule {}
