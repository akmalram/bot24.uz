window.addEventListener('DOMContentLoaded', () => {
    let menuToggler = () => {
        let btn = document.querySelector('nav .btn-toggle');
        let menu = document.querySelector('nav .menu');

        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            menu.classList.toggle('active');
        });
        window.addEventListener('resize', (e) => {
            if(window.innerWidth > 720) {
                btn.classList.remove('active');
                menu.classList.remove('active');
            }
        })
    }

    let changeMaxHeight = (value, element) => {
        if(window.getComputedStyle(element).maxHeight > `${0}px`) {
            element.style.cssText = "max-height: 0px;";
        } else {
            element.style.cssText = `max-height: ${value}px;`;
        }
    }

    let worksListToggler = () => {
        let btn = document.querySelectorAll('.bot-can .list-btn');
        btn.forEach(one => {
            one.addEventListener('click', (e) => {
                let el = e.target;
                let elParent = el.parentNode;

                if(elParent.classList.contains('list-toggle')) {
                    let target = el.nextElementSibling;
                    changeMaxHeight(1000, target);
                } else if (elParent.parentNode.classList.contains('list-toggle')) {
                    let target = el.parentNode.nextElementSibling;
                    changeMaxHeight(1000, target);
                }
            });
        });
    }

    let onNavScroll = () => {
        let target = document.querySelector('header nav');

        window.addEventListener('scroll', () => {

            if(window.pageYOffset > 0) {
                target.classList.add('scrolled');
            } else if(window.pageYOffset == 0) {
                target.classList.remove('scrolled');
            }
        });
    }

    let scrollToAnchor = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    scrollToAnchor();
    onNavScroll();
    worksListToggler();
    menuToggler();
    sliderInit();
});