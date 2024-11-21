const elements = document.querySelectorAll('.hidden-left');

const myObserver = new IntersectionObserver(observer => {
    observer.forEach(observe => {
        if(observe.isIntersecting === true){
            observe.target.classList.add('show')
        }
    });
});

elements.forEach(element => myObserver.observe(element));


const elementsRight = document.querySelectorAll('.hidden-right');

const myObserverRight = new IntersectionObserver(observerRight => {
    observerRight.forEach(observeRight => {
        if(observeRight.isIntersecting === true){
            observeRight.target.classList.add('show')
        }
    });
});

elementsRight.forEach(elementRight => myObserverRight.observe(elementRight));