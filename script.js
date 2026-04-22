        // ===== EFEITO LUZ ACENDENDO =====
        (function() {
            const home = document.getElementById('home');
            // começa escuro e clarea
            home.classList.add('home--dark');
            setTimeout(() => {
                home.classList.add('home--lit');
            }, 200);
        })();


        const btnMobile = document.getElementById('btn-mobile');
        function toggleMenu(event) {
            if (event.type === 'touchstart') event.preventDefault();
            document.getElementById('nav-menu').classList.toggle('active');
        }
        btnMobile.addEventListener('click', toggleMenu);
        btnMobile.addEventListener('touchstart', toggleMenu);
        document.querySelectorAll('#nav-menu a').forEach(link => {
            link.addEventListener('click', () => document.getElementById('nav-menu').classList.remove('active'));
        });

        // FAQ Accordion
        function toggleFaq(item) {
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        }

        // Header scroll
        window.addEventListener('scroll', () => {
            document.querySelector('header').classList.toggle('scrolled', window.scrollY > 50);
        });