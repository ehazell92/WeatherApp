import { MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule, MatButtonToggleModule, MatIconModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatIconModule
    ],
})
export class MaterModule {}