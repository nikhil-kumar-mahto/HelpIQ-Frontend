const testimonials = [
  {
    img: "/assets/user-image.png",
    text: "“Fames gravid nulam lectus vivera placerat utricies. Lorem ipsum dolor sit amet consectetur. Vel est ac sit amet tincidunt vel turpis penabus. Fusce eleifend suscipit”",
    name: "John Doe",
    role: "Business Specialist",
  },
  {
    img: "/assets/user-image.png",
    text: "“Mauris commodo, sapien nec ullamcorper laoreet, mi velit sodales dui, sed dictum tortor nulla nec urna. Etiam sed dictum magna.”",
    name: "Jane Smith",
    role: "Product Manager",
  },
  {
    img: "/assets/user-image.png",
    text: "“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer blandit, sapien facilisis tempus.”",
    name: "Carlos Rivera",
    role: "UX Designer",
  },
];

let current = 0;

function showTestimonial(idx) {
  const card = document.getElementById('testimonialCard');
  const t = testimonials[idx];
  card.innerHTML = `
    <div class="testimonial-image-bg">
      <img class="testimonial-img" src="${t.img}" alt="Customer Photo">
    </div>
    <div class="testimonial-content">
      <div class="testimonial-quote-icon">&#10077;</div>
      <div class="testimonial-stars">
        <span>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
      </div>
      <p class="testimonial-text">
        ${t.text}
      </p>
      <div class="testimonial-author">
        <div class="testimonial-author-name">${t.name}</div>
        <div class="testimonial-author-role">${t.role}</div>
      </div>
    </div>
  `;
}

document.getElementById('prevBtn').addEventListener('click', () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

// initialize
showTestimonial(current);