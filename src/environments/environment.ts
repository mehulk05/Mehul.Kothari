import { SnotifyPosition } from 'ng-snotify';

export const environment = {
  production: false,
  
  apiUrlHeaderGet: 'http://localhost:4200/assets/json/header.json',
  apiUrlIntroGet: 'http://localhost:4200/assets/json/intro.json',
  apiUrlAboutGet: 'http://localhost:4200/assets/json/about.json',
  apiUrlExperienceGet: 'http://localhost:4200/assets/json/experience.json',
  apiUrlSkillGet: 'http://localhost:4200/assets/json/skills.json',
  apiUrlFooterGet: 'http://localhost:4200/assets/json/footer.json',
  apiUrlEducationGet: 'http://localhost:4200/assets/json/education.json',

  snotifyConfig : {
    showProgressBar: true,
    position: SnotifyPosition.rightTop,
  },
};