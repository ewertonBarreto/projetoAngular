//PASTA SHARED - para componentes e módulos mais pesados

import { NgModule } from '@angular/core';
import { ReplacePipe } from './replace.pipe';

@NgModule({
    declarations: [
        ReplacePipe
    ], 
    exports: [
        ReplacePipe
    ]
})
export class AppPipeModule {

}