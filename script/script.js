if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        distance: '40px',
        duration: 2500,
        reset: true 
    });
  

    sr.reveal('.logo', { delay: 200, origin: 'left' });
    sr.reveal('.p-btn', { delay: 200, origin: 'left' });


    sr.reveal('.home-text span', { delay: 600, origin: 'top' });
    sr.reveal('.home-text h1', { delay: 680, origin: 'left' });
    sr.reveal('.home-text p', { delay: 750, origin: 'right' });
    sr.reveal('.main-btn', { delay: 860, origin: 'left' });

    sr.reveal('.share', { delay: 950, origin: 'bottom' });
} else {
    console.error("ScrollReveal is not loaded. Make sure to include the ScrollReveal library.");
}

