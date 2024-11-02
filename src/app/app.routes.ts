import { Routes } from '@angular/router';
import { AlunosComponent } from './pages/alunos/alunos.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { HelloworldComponent } from './components/helloworld/helloworld.component';

export const routes: Routes = [
    { path: '', component: AlunosComponent },
    { path: 'configuracoes', component: ConfiguracoesComponent },
    { path: 'admin', component: HelloworldComponent },
];