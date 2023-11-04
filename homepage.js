const menuItem3 = document.getElementById('menu-item-3');
const subMenu =  document.querySelector('.sub-menu');
const homepageMain = document.querySelector('.homepage-main');

menuItem3.addEventListener('mouseover' , () => {
  if (subMenu) {
    subMenu.style.display ='block';
    homepageMain.style.filter = 'brightness(0.7)';
  }
});

menuItem3.addEventListener('mouseout', () => {
  if (subMenu) {
    subMenu.style.display = 'none';
    homepageMain.style.filter = 'brightness(1)';
  }
});

const readMoreButton = document.querySelector('.read-more');
const footer = document.getElementById('footer');
const websiteHeader = document.getElementById('website-header');

readMoreButton.addEventListener('click', ()=> {
  const newPageUrl = 'read-more.html';
  window.location.href = newPageUrl;
});

const animatedElements = new Set();

function animateOnScroll(entries, observer) {
  entries.forEach((entry) => {
    const element = entry.target;
    if(entry.isIntersecting) {
      if(!animatedElements.has(element)) {
        element.style.opacity = 1;
        element.style.transform = 'translateX(0)';
        animatedElements.add(element);
      }
    }else {
      element.style.opacity = 0;
      if (element.id === 'content-summary-1') {
        element.style.transform = 'translateX(-100%)';
      } else if (element.id === 'content-summary-3') {
        element.style.transform = 'translateX(100%)';
      }
      animatedElements.delete(element);
    }
  });
}

const observer = new IntersectionObserver(animateOnScroll, {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
});

const contentSummary1 = document.getElementById('content-summary-1');
const contentSummary3 = document.getElementById('content-summary-3');


if (contentSummary1) {
  observer.observe(contentSummary1);
}
if (contentSummary3) {
  observer.observe(contentSummary3);
}

const comments = document.getElementById('menu-item-1');
comments.addEventListener('click', ()=> {
  const commentUrl ='comments.html';
  window.location.href = commentUrl;
});

const women = document.getElementById('menu-item-2');
women.addEventListener('click', ()=> {
  const womenUrl = 'women.html';
  window.location.href = womenUrl;
});

const cumhuriyetcilik = document.querySelector('.cumhuriyetcilik');
cumhuriyetcilik.addEventListener('click', ()=> {
  const cumhuriyetcilikUrl ='cumhuriyetcilik.html';
  window.location.href = cumhuriyetcilikUrl;
});

const milliyetcilik = document.querySelector('.milliyetcilik');
milliyetcilik.addEventListener('click', ()=> {
  const milliyetcilikUrl ='milliyetcilik.html';
  window.location.href = milliyetcilikUrl;
});

const ieee = document.getElementById('menu-item-6');
ieee.addEventListener('click', ()=> {
  const ieeeUrl ='IEEE.html';
  window.location.href = ieeeUrl;
});

const onerı = document.getElementById('menu-item-4');
onerı.addEventListener('click', ()=> {
  const onerıUrl ='onerıler.html';
  window.location.href = onerıUrl;
});

