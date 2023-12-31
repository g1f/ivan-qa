//gallery
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

const images = ['ISTQB-certificate.png' 
                ,`java-script-certificate-introdution.jpeg`
                , `php-certificate.jpeg`
                , `SQL-certificate-intermediate.jpeg`
                , `web-dev-certificate.jpeg`
                , `codeless-test-automation-with-Selenium-IDE.png`
                , `exploring-service-APIs-through-test-automation.png`];
const alts = {
  'ISTQB.png' : 'ISTQB Foundation Level Certificate',
  'java-script-certificate-introdution.jpeg' : 'Sololearn Java Script Certificate Introdution',
  'php-certificate.jpeg' : 'Sololearn PHP Certificate',
  'SQL-certificate-intermediate.jpeg' : 'Sololearn SQL Certificate Intermediate',
  'web-dev-certificate.jpeg' : 'Sololearn Web development Certificate',
  'codeless-test-automation-with-Selenium-IDE.png' : 'Codeless Test Automation With Selenium IDE',
  'exploring-service-APIs-through-test-automation.png' : 'Exploring Service APIs Through Test Automation'
}

/* Looping through images */
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/gallery/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}