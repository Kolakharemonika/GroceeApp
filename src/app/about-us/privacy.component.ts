import { Component } from '@angular/core';


@Component({
  selector: 'app-privacy',
  template: `
 <ion-header class="header">
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button defaultHref="/About-Us" size="large"></ion-back-button>
    </ion-buttons>
    <ion-title> Privacy & Policy </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content color="light">
  <ion-list lines="none" class="ion-padding">
    <ion-list-header> Introduction</ion-list-header>
    <ion-item>
      Thanks for using our products and services ("Services"). The Services are provided by Pixeel Ltd. ("Osahanin"), located at 153 Williamson Plaza, Maggieberg, MT 09514, England, United Kingdom.

      By using our Services, you are agreeing to these terms. Please read them carefully.

      Our Services are very diverse, so sometimes additional terms or product requirements (including age requirements) may apply. Additional terms will be available with the relevant Services, and those additional terms become part of your agreement with us if you use those Services.

    </ion-item>
    <ion-list-header> 1. Using our services </ion-list-header>
    <ion-item>
      You must follow any policies made available to you within the Services.

      Don't misuse our Services. For example, don't interfere with our Services or try to access them using a method other than the interface and the instructions that we provide. You may use our Services only as permitted by law, including applicable export and re-export control laws and regulations. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.

      Using our Services does not give you ownership of any intellectual property rights in our Services or the content you access. You may not use content from our Services unless you obtain permission from its owner or are otherwise permitted by law. These terms do not grant you the right to use any branding or logos used in our Services. Don't remove, obscure, or alter any legal notices displayed in or along with our Services.
    </ion-item>
    <ion-list-header> A. Personal Data that we collect about you. </ion-list-header>
    <ion-item>
      Personal Data is any information that relates to an identified or identifiable individual. The Personal Data that you provide directly to us through our Sites will be apparent from the context in which you provide the data. In particular:

      When you register for a Osahanin account we collect your full name, email address, and account log-in credentials.
      When you fill-in our online form to contact our sales team, we collect your full name, work email, country, and anything else you tell us about your project, needs and timeline.
      When you use the "Remember Me" feature of Osahanin Checkout, we collect your email address, payment card number, CVC code and expiration date.
      When you respond to Osahanin emails or surveys we collect your email address, name and any other information you choose to include in the body of your email or responses. If you contact us by phone, we will collect the phone number you use to call Osahanin. If you contact us by phone as a Osahanin User, we may collect additional information in order to verify your identity.
    </ion-item>
    <ion-list-header> B. Information that we collect automatically on our Sites. </ion-list-header>

    <ion-item>
      We also may collect information about your online activities on websites and connected devices over time and across third-party websites, devices, apps and other online features and services. We use Google Analytics on our Sites to help us analyze Your use of our Sites and diagnose technical issues.

      To learn more about the cookies that may be served through our Sites and how You can control our use of cookies and third-party analytics, please see our Cookie Policy.
    </ion-item>
    <ion-list-header>

      2. Privacy and copyright protection
    </ion-list-header>
    <ion-item>
      Osahanin's privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that Osahanin can use such data in accordance with our privacy policies.

      We respond to notices of alleged copyright infringement and terminate accounts of repeat infringers according to the process set out in the U.S. Digital Millennium Copyright Act.

      We provide information to help copyright holders manage their intellectual property online. If you think somebody is violating your copyrights and want to notify us, you can find information about submitting notices and Osahanin's policy about responding to notices in our Help Center.
    </ion-item>
    <ion-list-header>

      3. Your content in our services
    </ion-list-header>
    <ion-item>
      Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content. In short, what belongs to you stays yours.

      When you upload, submit, store, send or receive content to or through our Services, you give Osahanin (and those we work with) a worldwide license to use, host, store, reproduce, modify, create derivative works (such as those resulting from translations, adaptations or other changes we make so that your content works better with our Services), communicate, publish, publicly perform, publicly display and distribute such content. The rights you grant in this license are for the limited purpose of operating, promoting, and improving our Services, and to develop new ones. This license continues even if you stop using our Services (for example, for a business listing you have added to Osahanin Maps). Some Services may offer you ways to access and remove content that has been provided to that Service. Also, in some of our Services, there are terms or settings that narrow the scope of our use of the content submitted in those Services. Make sure you have the necessary rights to grant us this license for any content that you submit to our Services.
    </ion-item>

  </ion-list>
</ion-content>

  `
})

export class PrivacyComponent {

  constructor() { }

}
