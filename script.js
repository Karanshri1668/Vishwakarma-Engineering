 // Mobile Menu Toggle
 const mobileMenuBtn = document.getElementById('mobileMenuBtn');
 const mainNav = document.getElementById('mainNav');
 
 mobileMenuBtn.addEventListener('click', () => {
     mainNav.classList.toggle('show');
 });

 // Gallery Filter
 const filterBtns = document.querySelectorAll('.filter-btn');
 const galleryItems = document.querySelectorAll('.gallery-item');
 
 filterBtns.forEach(btn => {
     btn.addEventListener('click', () => {
         // Remove active class from all buttons
         filterBtns.forEach(btn => btn.classList.remove('active'));
         // Add active class to clicked button
         btn.classList.add('active');
         
         const filter = btn.dataset.filter;
         
         galleryItems.forEach(item => {
             if (filter === 'all' || item.dataset.category === filter) {
                 item.style.display = 'block';
             } else {
                 item.style.display = 'none';
             }
         });
     });
 });


 
