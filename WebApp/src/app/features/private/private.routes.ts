import { Routes } from '@angular/router';
import { AuthGuard } from '../../core/auth/auth.guard';
import { RoleGuard } from '../../core/auth/role.guard';

export const PRIVATE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./private.component').then(m => m.PrivateComponent),
    canActivate: [AuthGuard],
    children: [
      { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
      {
        path: 'sellers', loadComponent: () => import('./sellers/sellers.component').then(m => m.SellersComponent),
        canActivate: [RoleGuard],
        data: { roles: ['DIRECTOR_VENTAS', 'ADMINISTRADOR'] }
      },
      {
        path: 'sales', loadComponent: () => import('./sales/sales.component').then(m => m.SalesComponent),
        canActivate: [RoleGuard],
        data: { roles: ['DIRECTOR_VENTAS', 'ADMINISTRADOR'] }
      },
      {
        path: 'sales/create',
        loadComponent: () => import('./sales/create/create.component').then(m => m.CreateComponent),
        canActivate: [RoleGuard],
        data: { roles: ['DIRECTOR_VENTAS', 'ADMINISTRADOR'] }
      },
      {
        path: 'fabricantes',
        loadComponent: () => import('./fabricantes/fabricantes.component').then(m => m.FabricantesComponent),
        canActivate: [RoleGuard],
        data: { roles: ['ADMINISTRADOR'] }
      },
      {
        path: 'fabricantes/create',
        loadComponent: () => import('./fabricantes/create-fabricante/create-fabricante.component').then(c => c.CreateFabricanteComponent),
        canActivate: [RoleGuard],
        data: { roles: ['ADMINISTRADOR'] }
      },/*
        { path: 'add-product/:manufacturerId', loadComponent: () => import('./products/add-product/add-product.component').then(m => m.AddProductComponent),
          canActivate: [RoleGuard],
          data: { roles: ['ADMINISTRADOR'] }
        },*/
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];
