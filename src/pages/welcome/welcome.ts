import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  signin(){
    // login api web servive call triggers
    console.log('Tabs Page');
    this.navCtrl.push(TabsPage);
  }

  signup(){
    console.log('Signup Page');
    this.navCtrl.push(SignupPage);
  }

  forgotpassword(){
    console.log('Forgot password Page');
    this.navCtrl.push(ForgotpasswordPage);
  }
}
