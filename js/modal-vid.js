        const button1 = document.querySelectorAll('.btn-mod-vid');

        button1.forEach(btn => {
            btn.addEventListener('click', e => {
            e.stopPropagation();

            const targetId = btn.dataset.target;
            const modal = document.getElementById(targetId);

                if (modal) {
                    modal.classList.add('show');

                    // Opcional: evitar scroll en el body mientras el modal está abierto
                    document.body.style.overflow = 'hidden'; 
                }
            });
        });

        const modals = document.querySelectorAll('.modalvid');

        modals.forEach(modal => {
            modal.addEventListener('click', e => {
                if (e.target.classList.contains('modalvid') || e.target.classList.contains('close')) {
                    
                    // Detener el video
                    const video = modal.querySelector('video');
                    if (video) {
                        video.pause();
                        video.currentTime = 0; // opcional: regresar al inicio
                    }

                    modal.classList.remove('show');
                    document.body.style.overflow = 'auto';
                }
            });
        });
