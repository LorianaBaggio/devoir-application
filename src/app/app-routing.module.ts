import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'angular',
    loadChildren: () => import('./pages/angular/angular.module').then( m => m.AngularPageModule)
  },
  {
    path: 'ionic',
    loadChildren: () => import('./pages/ionic/ionic.module').then( m => m.IonicPageModule)
  },
  {
    path: 'angular-introduction',
    loadChildren: () => import('./pages/angular-introduction/angular-introduction.module').then( m => m.AngularIntroductionPageModule)
  },
  {
    path: 'angular-directives',
    loadChildren: () => import('./pages/angular-directives/angular-directives.module').then( m => m.AngularDirectivesPageModule)
  },
  {
    path: 'html',
    loadChildren: () => import('./pages/html/html.module').then( m => m.HtmlPageModule)
  },
  {
    path: 'css',
    loadChildren: () => import('./pages/css/css.module').then( m => m.CssPageModule)
  },
  {
    path: 'html-introduction',
    loadChildren: () => import('./pages/html-introduction/html-introduction.module').then( m => m.HtmlIntroductionPageModule)
  },
  {
    path: 'html-syntaxe',
    loadChildren: () => import('./pages/html-syntaxe/html-syntaxe.module').then( m => m.HtmlSyntaxePageModule)
  },
  {
    path: 'css-introduction',
    loadChildren: () => import('./pages/css-introduction/css-introduction.module').then( m => m.CssIntroductionPageModule)
  },
  {
    path: 'css-selecteurs',
    loadChildren: () => import('./pages/css-selecteurs/css-selecteurs.module').then( m => m.CssSelecteursPageModule)
  },
  {
    path: 'sass',
    loadChildren: () => import('./pages/sass/sass.module').then( m => m.SassPageModule)
  },
  {
    path: 'sass-introduction',
    loadChildren: () => import('./pages/sass-introduction/sass-introduction.module').then( m => m.SassIntroductionPageModule)
  },
  {
    path: 'sass-installation',
    loadChildren: () => import('./pages/sass-installation/sass-installation.module').then( m => m.SassInstallationPageModule)
  },
  {
    path: 'ionic-partie-une',
    loadChildren: () => import('./pages/ionic-partie-une/ionic-partie-une.module').then( m => m.IonicPartieUnePageModule)
  },
  {
    path: 'ionic-partie-deux',
    loadChildren: () => import('./pages/ionic-partie-deux/ionic-partie-deux.module').then( m => m.IonicPartieDeuxPageModule)
  },
  {
    path: 'wordpress',
    loadChildren: () => import('./pages/wordpress/wordpress.module').then( m => m.WordpressPageModule)
  },
  {
    path: 'wordpress-introduction',
    loadChildren: () => import('./pages/wordpress-introduction/wordpress-introduction.module').then( m => m.WordpressIntroductionPageModule)
  },
  {
    path: 'wordpress-installation',
    loadChildren: () => import('./pages/wordpress-installation/wordpress-installation.module').then( m => m.WordpressInstallationPageModule)
  },
  {
    path: 'html-editeur-linux',
    loadChildren: () => import('./pages/html-editeur-linux/html-editeur-linux.module').then( m => m.HtmlEditeurLinuxPageModule)
  },
  {
    path: 'html-editeur-windows',
    loadChildren: () => import('./pages/html-editeur-windows/html-editeur-windows.module').then( m => m.HtmlEditeurWindowsPageModule)
  },
  {
    path: 'html-editeur-mac',
    loadChildren: () => import('./pages/html-editeur-mac/html-editeur-mac.module').then( m => m.HtmlEditeurMacPageModule)
  },
  {
    path: 'html-head',
    loadChildren: () => import('./pages/html-head/html-head.module').then( m => m.HtmlHeadPageModule)
  },
  {
    path: 'html-encodage',
    loadChildren: () => import('./pages/html-encodage/html-encodage.module').then( m => m.HtmlEncodagePageModule)
  },
  {
    path: 'html-body',
    loadChildren: () => import('./pages/html-body/html-body.module').then( m => m.HtmlBodyPageModule)
  },
  {
    path: 'html-liens',
    loadChildren: () => import('./pages/html-liens/html-liens.module').then( m => m.HtmlLiensPageModule)
  },
  {
    path: 'html-images',
    loadChildren: () => import('./pages/html-images/html-images.module').then( m => m.HtmlImagesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
