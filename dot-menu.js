(function(){
            const menu = document.getElementById('dotMenu');
            const toggle = document.getElementById('dotToggle');
            if(!menu || !toggle) return;
            function setActive(active){
                if(active){
                    menu.classList.add('active');
                    menu.querySelector('.dropdown').setAttribute('aria-hidden','false');
                } else {
                    menu.classList.remove('active');
                    menu.querySelector('.dropdown').setAttribute('aria-hidden','true');
                }
            }
            toggle.addEventListener('click', () => setActive(!menu.classList.contains('active')));
            toggle.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(!menu.classList.contains('active')); }});
            // close when clicking outside
            document.addEventListener('click', (e) => { if(menu.classList.contains('active') && !menu.contains(e.target)) setActive(false); });
        })();