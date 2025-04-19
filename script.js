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


 // Contact Form Submission
 const contactForm = document.getElementById('contactForm');
        
 contactForm.addEventListener('submit', (e) => {
     e.preventDefault();
     
     // Get form values
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const phone = document.getElementById('phone').value;
     const subject = document.getElementById('subject').value;
     const message = document.getElementById('message').value;
     
     // Here you would typically send the form data to a server
     // For this example, we'll just show an alert
     alert(`Thank you, ${name}! Your message has been received. We will contact you soon.`);
     
     // Reset the form
     contactForm.reset();
 });