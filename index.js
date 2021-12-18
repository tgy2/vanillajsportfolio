/* Mobile Menu */
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.link-wrap');
const hambgOne = document.querySelector('.btoggleone');
const hambgTwo = document.querySelector('.btoggletwo');
const hambgThree = document.querySelector('.btogglethree');

const homeAnc = document.querySelector('.home-anc');
const aboutAnc = document.querySelector('.about-anc');
const projectsAnc = document.querySelector('.projects-anc');
const foooterAnc = document.querySelector('.footer-anc');

//Mobile menu

const mobileMenu = () => {
  menu.classList.toggle('is.active');
  menuLinks.classList.toggle('active');
  hambgOne.classList.toggle('onetoggled');
  hambgTwo.classList.toggle('twotoggled');
  hambgThree.classList.toggle('threetoggled');
};

const ancRemover = () => {
  hambgOne.classList.toggle('onetoggled');
  hambgTwo.classList.toggle('twotoggled');
  hambgThree.classList.toggle('threetoggled');
};

menu.addEventListener('click', mobileMenu);

homeAnc.addEventListener('click', ancRemover);

aboutAnc.addEventListener('click', ancRemover);

projectsAnc.addEventListener('click', ancRemover);

foooterAnc.addEventListener('click', ancRemover);

/* Mobile Menu */

/* SCroll pos */

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const home = document.querySelector('#home-link');
  const about = document.querySelector('#about-link');
  const projects = document.querySelector('#projects-link');
  const footer = document.querySelector('#footer-link');

  const aboutTitle = document.querySelector('.about-title');
  const projectsTitle = document.querySelector('.projects-title');
  const footerTitle = document.querySelector('.footer-title');
  let scrollPos = window.scrollY;
  //console.log(scrollPos)

  if (window.innerWidth > 960 && scrollPos < 560) {
    home.classList.add('highlight');
    about.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1900) {
    about.classList.add('highlight');
    home.classList.remove('highlight');
    projects.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2750) {
    projects.classList.add('highlight');
    about.classList.remove('highlight');
    footer.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3000) {
    projects.classList.remove('highlight');
    about.classList.remove('highlight');
    footer.classList.add('highlight');
    return;
  }
  if ((elem && window.innerWidth < 1200) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

document.querySelector('.home-anc').addEventListener('click', event => {
  if (window.innerWidth <= 960) {
    menuLinks.classList.remove('active');
  }
});

document.querySelector('.about-anc').addEventListener('click', event => {
  if (window.innerWidth <= 960) {
    menuLinks.classList.remove('active');
  }
});

document.querySelector('.projects-anc').addEventListener('click', event => {
  if (window.innerWidth <= 960) {
    menuLinks.classList.remove('active');
  }
});

document.querySelector('.footer-anc').addEventListener('click', event => {
  if (window.innerWidth <= 960) {
    menuLinks.classList.remove('active');
  }
});

const btnAll = document.getElementById('btn-all');
const btnReact = document.getElementById('btn-react');
const btnNode = document.getElementById('btn-node');
const btnOther = document.getElementById('btn-other');

const slider = document.getElementById('gallery-slider-id');

const slideAll = document.getElementById('gallery-slide-all');
const slideReact = document.getElementById('gallery-slide-react');
const slideNode = document.getElementById('gallery-slide-node');
const slideOther = document.getElementById('gallery-slide-other');

// const spotifyImage = document.getElementById('spotify-img');
// const webshopImage = document.getElementById('webshop-img');
// const dashboardImage = document.getElementById('dashboard-img');
// const klarnaImage = document.getElementById('klarna-img');
// const countdownImage = document.getElementById('countdown-img');

btnAll.addEventListener('click', () => {
  slider.style.transform = 'translateX(0%)';
  slider.style.height = slideAll.clientHeight + 'px';

  btnAll.classList.add('highlighted-btn');
  btnReact.classList.remove('highlighted-btn');
  btnNode.classList.remove('highlighted-btn');
  btnOther.classList.remove('highlighted-btn');
});

btnReact.addEventListener('click', () => {
  slider.style.transform = 'translateX(-25%)';
  slider.style.height = slideReact.clientHeight + 'px';

  btnAll.classList.remove('highlighted-btn');
  btnReact.classList.add('highlighted-btn');
  btnNode.classList.remove('highlighted-btn');
  btnOther.classList.remove('highlighted-btn');
});

btnNode.addEventListener('click', () => {
  slider.style.transform = 'translateX(-50%)';
  slider.style.height = slideNode.clientHeight + 'px';

  btnAll.classList.remove('highlighted-btn');
  btnReact.classList.remove('highlighted-btn');
  btnNode.classList.add('highlighted-btn');
  btnOther.classList.remove('highlighted-btn');
});

btnOther.addEventListener('click', () => {
  slider.style.transform = 'translateX(-75%)';
  slider.style.height = slideOther.clientHeight + 'px';

  btnAll.classList.remove('highlighted-btn');
  btnReact.classList.remove('highlighted-btn');
  btnNode.classList.remove('highlighted-btn');
  btnOther.classList.add('highlighted-btn');
});

/* The four buttons */

const motivation = document.querySelector('.motivation');
const worketh = document.querySelector('.worketh');
const innovation = document.querySelector('.innovation');
const interests = document.querySelector('.interests');

motivation.addEventListener('click', () => {
  motivation.classList.toggle('hey');
  if (motivation.classList.contains('hey')) {
    motivation.innerHTML = '"Just work like hell" - Elon Musk';
  } else if (!motivation.classList.contains('hey')) {
    motivation.innerHTML = 'Staying motivated ? Tap me.';
  }
});

worketh.addEventListener('click', () => {
  worketh.classList.toggle('hey');
  if (worketh.classList.contains('hey')) {
    worketh.innerHTML = 'Respect, productivty & discipline';
  } else if (!worketh.classList.contains('hey')) {
    worketh.innerHTML = 'My work ethic ? Tap me.';
  }
});

innovation.addEventListener('click', () => {
  innovation.classList.toggle('hey');
  if (innovation.classList.contains('hey')) {
    innovation.innerHTML =
      'Following trends, staying creative, thinking scalable';
  } else if (!innovation.classList.contains('hey')) {
    innovation.innerHTML = ' Staying innovative ? Tap me.';
  }
});

interests.addEventListener('click', () => {
  interests.classList.toggle('hey');
  if (interests.classList.contains('hey')) {
    interests.innerHTML = 'Finance, data analytics & video games. ';
  } else if (!interests.classList.contains('hey')) {
    interests.innerHTML = 'My interests ?  Tap me.';
  }
});

// const express = require('express');
// const path = require('path');
// const dotenv = require('dotenv');
// const livereload = require('livereload');
// const connectLivereload = require('connect-livereload');

// const app = express();
// const router = express.Router();

// app.use(connectLivereload());

// // Allow clients to reach the following folder contents:
// app.use('/style', express.static(__dirname + '/style'));
// app.use('/img', express.static(__dirname + '/img'));
// app.use('/fonts', express.static(__dirname + '/fonts'));
// app.use('/scripts', express.static(__dirname + '/scripts'));
// app.use('/cv', express.static(__dirname + '/cv'));
// dotenv.config(express.static(__dirname + '../.env'));

// const liveReloadServer = livereload.createServer();
// liveReloadServer.watch(path.join(__dirname, '/style'));
// liveReloadServer.watch(path.join(__dirname, '/img'));
// liveReloadServer.watch(path.join(__dirname, '/fonts'));
// liveReloadServer.watch(path.join(__dirname, '/scripts'));
// liveReloadServer.watch(path.join(__dirname, '/cv'));

// router.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

// //add the router
// app.use('/', router);
// const PORT = process.env.PORT || 3000;
// const HOST = process.env.HOST || '0.0.0.0';
// app.listen(PORT, HOST, function () {
//   console.log(`App listening on port ${HOST}:${PORT}`);
//   liveReloadServer.server.once('connection', () => {
//     setTimeout(() => {
//       liveReloadServer.refresh('/');
//     }, 100);
//   });
// });
