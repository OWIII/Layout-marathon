document.addEventListener('mousemove', (event) => {
  document.querySelectorAll('.image').forEach(elem => {
    const speed = elem.getAttribute('data-speed');
    const x = (window.innerWidth - event.pageX * speed)/100;
    const y = (window.innerHeight - event.pageY * speed)/100;

    elem.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});
