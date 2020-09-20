import { SnotifyPosition } from 'ng-snotify';

export const environment = {
  production: false,
  
  apiUrlHeaderGet: '/assets/json/header.json',
  apiUrlIntroGet: '/assets/json/intro.json',
  apiUrlAboutGet: '/assets/json/about.json',
  apiUrlExperienceGet: '/assets/json/experience.json',
  apiUrlSkillGet: '/assets/json/skills.json',
  apiUrlFooterGet: '/assets/json/footer.json',
  apiUrlEducationGet: '/assets/json/education.json',
  apiUrlProjectGet: '/assets/json/projects.json',

  snotifyConfig : {
    showProgressBar: true,
    position: SnotifyPosition.rightTop,
  },
};