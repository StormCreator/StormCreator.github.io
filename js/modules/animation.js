function animation(){
    const titles = document.querySelectorAll('.title'),
            subtitles = document.querySelectorAll('.subtitle'),
            services = document.querySelectorAll('.service');



    titles.forEach(item => {
        item.classList.add('wow', 'animate__animated', 'animate__fadeInUp');
        item.style.setProperty('--animate-duration', '1.2s');
        item.style.setProperty('data-wow-offset', '300');

    });
    subtitles.forEach(item => {
        item.classList.add('wow', 'animate__animated', 'animate__fadeInUp');
        item.style.setProperty('--animate-delay', '.5s');
        item.style.setProperty('--animate-duration', '1.2s');
        item.style.setProperty('data-wow-offset', '300');
    });
    {
        let duration = 1.2;
        services.forEach(service => {
            service.classList.add('wow', 'animate__animated', 'animate__fadeInUp');
            service.style.setProperty('--animate-duration', `${duration}s`);
            service.style.setProperty('data-wow-offset', '300');
            duration += 0.3;
        });
    }
  
}

export default animation;