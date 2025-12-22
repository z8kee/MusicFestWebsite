(function(){
            // Get the menu container element
            const menu = document.getElementById('dotMenu');
            // Get the toggle container element (toggle button)
            const toggle = document.getElementById('dotToggle');
            // If either of them do not exist, stop the script
            if(!menu || !toggle) return;
            // Function to open or close dropdown bar menu, active means open
            function setActive(active){
                if(active){
                    menu.classList.add('active');
                    menu.querySelector('.dropdown').setAttribute('aria-hidden','false');
                } else {
                    menu.classList.remove('active');
                    menu.querySelector('.dropdown').setAttribute('aria-hidden','true');
                }
            }
            // Listens for click or keydown
            toggle.addEventListener('click', () => setActive(!menu.classList.contains('active')));
            toggle.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(!menu.classList.contains('active')); }});
            // close when clicking outside
            document.addEventListener('click', (e) => { if(menu.classList.contains('active') && !menu.contains(e.target)) setActive(false); });
        })();