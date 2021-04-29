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
  {
    path: 'css-boite',
    loadChildren: () => import('./pages/css-boite/css-boite.module').then( m => m.CssBoitePageModule)
  },
  {
    path: 'css-textes',
    loadChildren: () => import('./pages/css-textes/css-textes.module').then( m => m.CssTextesPageModule)
  },
  {
    path: 'css-couleurs',
    loadChildren: () => import('./pages/css-couleurs/css-couleurs.module').then( m => m.CssCouleursPageModule)
  },
  {
    path: 'css-mesures',
    loadChildren: () => import('./pages/css-mesures/css-mesures.module').then( m => m.CssMesuresPageModule)
  },
  {
    path: 'css-positionnement',
    loadChildren: () => import('./pages/css-positionnement/css-positionnement.module').then( m => m.CssPositionnementPageModule)
  },
  {
    path: 'css-float',
    loadChildren: () => import('./pages/css-float/css-float.module').then( m => m.CssFloatPageModule)
  },
  {
    path: 'css-background',
    loadChildren: () => import('./pages/css-background/css-background.module').then( m => m.CssBackgroundPageModule)
  },
  {
    path: 'css-box-sizing',
    loadChildren: () => import('./pages/css-box-sizing/css-box-sizing.module').then( m => m.CssBoxSizingPageModule)
  },
  {
    path: 'sass-imbrication',
    loadChildren: () => import('./pages/sass-imbrication/sass-imbrication.module').then( m => m.SassImbricationPageModule)
  },
  {
    path: 'sass-heritage',
    loadChildren: () => import('./pages/sass-heritage/sass-heritage.module').then( m => m.SassHeritagePageModule)
  },
  {
    path: 'sass-variables',
    loadChildren: () => import('./pages/sass-variables/sass-variables.module').then( m => m.SassVariablesPageModule)
  },
  {
    path: 'sass-mixins',
    loadChildren: () => import('./pages/sass-mixins/sass-mixins.module').then( m => m.SassMixinsPageModule)
  },
  {
    path: 'sass-conditions',
    loadChildren: () => import('./pages/sass-conditions/sass-conditions.module').then( m => m.SassConditionsPageModule)
  },
  {
    path: 'sass-boucles',
    loadChildren: () => import('./pages/sass-boucles/sass-boucles.module').then( m => m.SassBouclesPageModule)
  },
  {
    path: 'sass-syntaxe',
    loadChildren: () => import('./pages/sass-syntaxe/sass-syntaxe.module').then( m => m.SassSyntaxePageModule)
  },
  {
    path: 'sass-commande',
    loadChildren: () => import('./pages/sass-commande/sass-commande.module').then( m => m.SassCommandePageModule)
  },
  {
    path: 'sass-bootstrap',
    loadChildren: () => import('./pages/sass-bootstrap/sass-bootstrap.module').then( m => m.SassBootstrapPageModule)
  },
  {
    path: 'angular-controllers-scope',
    loadChildren: () => import('./pages/angular-controllers-scope/angular-controllers-scope.module').then( m => m.AngularControllersScopePageModule)
  },
  {
    path: 'angular-modules',
    loadChildren: () => import('./pages/angular-modules/angular-modules.module').then( m => m.AngularModulesPageModule)
  },
  {
    path: 'angular-routes',
    loadChildren: () => import('./pages/angular-routes/angular-routes.module').then( m => m.AngularRoutesPageModule)
  },
  {
    path: 'angular-services',
    loadChildren: () => import('./pages/angular-services/angular-services.module').then( m => m.AngularServicesPageModule)
  },
  {
    path: 'angular-promesses',
    loadChildren: () => import('./pages/angular-promesses/angular-promesses.module').then( m => m.AngularPromessesPageModule)
  },
  {
    path: 'angular-filtres',
    loadChildren: () => import('./pages/angular-filtres/angular-filtres.module').then( m => m.AngularFiltresPageModule)
  },
  {
    path: 'angular-directives-deux',
    loadChildren: () => import('./pages/angular-directives-deux/angular-directives-deux.module').then( m => m.AngularDirectivesDeuxPageModule)
  },
  {
    path: 'angular-ressources',
    loadChildren: () => import('./pages/angular-ressources/angular-ressources.module').then( m => m.AngularRessourcesPageModule)
  },
  {
    path: 'angular-apply-watch-digest',
    loadChildren: () => import('./pages/angular-apply-watch-digest/angular-apply-watch-digest.module').then( m => m.AngularApplyWatchDigestPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
