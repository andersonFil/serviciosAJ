// Navegación responsive
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Datos de testimonios
const testimonials = [
  {
    name: "María González",
    text: "Excelente servicio. Repararon mi laptop en tiempo récord y a un precio justo.",
    rating: 5
  },
  {
    name: "Juan Pérez",
    text: "Muy profesionales y puntuales. Recomendado al 100%.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    text: "Gran atención al cliente y resultados garantizados.",
    rating: 4
  }
];

// Cargar testimonios
const testimonialsContainer = document.querySelector('.testimonials-slider');
testimonials.forEach(testimonial => {
  const testimonialElement = document.createElement('div');
  testimonialElement.classList.add('testimonial');
  testimonialElement.innerHTML = `
    <div class="testimonial-content">
      <p>"${testimonial.text}"</p>
      <div class="testimonial-author">
        <h4>${testimonial.name}</h4>
        <div class="rating">
          ${Array(testimonial.rating).fill('★').join('')}
        </div>
      </div>
    </div>
  `;
  testimonialsContainer.appendChild(testimonialElement);
});

// Datos de FAQ
const faqs = [
  {
    question: "¿Cuál es el tiempo promedio de reparación?",
    answer: "El tiempo de reparación varía según el dispositivo y el problema, pero generalmente es entre 24-48 horas."
  },
  {
    question: "¿Ofrecen garantía por las reparaciones?",
    answer: "Sí, todas nuestras reparaciones tienen una garantía de 3 meses."
  },
  {
    question: "¿Hacen reparaciones a domicilio?",
    answer: "Sí, ofrecemos servicio a domicilio en toda el área de Valencia edo.Carabobo(Dependiendo de la zona)."
  }
];

// Cargar FAQs
const faqContainer = document.querySelector('.faq-container');
faqs.forEach(faq => {
  const faqElement = document.createElement('div');
  faqElement.classList.add('faq-item');
  faqElement.innerHTML = `
    <h3>${faq.question}</h3>
    <p>${faq.answer}</p>
  `;
  faqContainer.appendChild(faqElement);
});

// Aquí iría la lógica para enviar el formulario
    const form = document.getElementById('serviceForm'); 
    const submitBtn = document.getElementById('submitBtn');
    
     form.addEventListener('submit', (event) => { event.preventDefault();
        
// Prevent default form submission       
          const name = document.getElementById('name').value;
           const email = document.getElementById('email').value;
           const phone = document.getElementById('phone').value;
            const device = document.getElementById('device').value;
             const problem = document.getElementById('problem').value;
             
// Create the mailto link with the form data
               const mailtoLink = `mailto:oficial.servicios.aj@gmail.com?subject=Nueva solicitud de servicio&body=${encodeURIComponent('Nombre: ' + name + '\nEmail: ' + email + '\nTeléfono: ' + phone + '\nDispositivo: ' + device + '\nProblema: ' + problem)}`;
// Create a temporary link element and click it to open the email client
                const link = document.createElement('a');
                 link.href = mailtoLink; link.click();
                 
// Display a success message
                   alert('¡Tu solicitud ha sido enviada con éxito!'); });
      
// Animaciones al hacer scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('section').forEach((section) => {
  observer.observe(section);
});