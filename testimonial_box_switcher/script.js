const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Joanna Doe',
    position: 'Sales',
    photo: 'https://randomuser.me/api/portraits/women/45.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quos ab nostrum dolore odit nesciunt ea consectetur ad provident temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laudantium doloribus placeat sit incidunt id magni odio nobis officia quasi.'
  },
  {
    name: 'Sara Smith',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/women/87.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet maiores reiciendis adipisci, iusto ipsam in laborum aspernatur quam dicta a modi quasi velit aliquam vero tempore sequi corrupti dolores veritatis accusantium consequuntur dolor sunt. Laborum, nemo illum exercitationem aliquam odio voluptates iure incidunt praesentium voluptatibus explicabo sit vel voluptas.'
  },
  {
    name: 'John Doe',
    position: 'Engineering',
    photo: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure eligendi esse tempore eos atque ut natus rerum. Magnam, dolores aspernatur cum saepe aliquid quisquam asperiores ab voluptate esse, a exercitationem. Quasi molestias eos modi a obcaecati perferendis eum dicta.'
  },
  {
    name: 'Jonathan Michaels',
    position: 'Business Development',
    photo: 'https://randomuser.me/api/portraits/men/55.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet maiores reiciendis adipisci, iusto ipsam in laborum aspernatur quam dicta a modi quasi velit aliquam vero tempore sequi corrupti dolores veritatis accusantium consequuntur dolor sunt. Laborum, nemo illum exercitationem aliquam odio voluptates iure incidunt praesentium voluptatibus explicabo sit vel voluptas.'
  },
  {
    name: 'Lauren Johnson',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure eligendi esse tempore eos atque ut natus rerum. Magnam, dolores aspernatur cum saepe aliquid quisquam asperiores ab voluptate esse, a exercitationem. Quasi molestias eos modi a obcaecati perferendis eum dicta.'
  },
  {
    name: 'Bobby Christi',
    position: 'Operations',
    photo: 'https://randomuser.me/api/portraits/men/68.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet maiores reiciendis adipisci, iusto ipsam in laborum aspernatur quam dicta a modi quasi velit aliquam vero tempore sequi corrupti dolores veritatis accusantium consequuntur dolor sunt. Laborum, nemo illum exercitationem aliquam odio voluptates iure incidunt praesentium voluptatibus explicabo sit vel voluptas.'
  },
  {
    name: 'Federico Schumacker',
    position: 'Sales',
    photo: 'https://randomuser.me/api/portraits/men/71.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure eligendi esse tempore eos atque ut natus rerum. Magnam, dolores aspernatur cum saepe aliquid quisquam asperiores ab voluptate esse, a exercitationem. Quasi molestias eos modi a obcaecati perferendis eum dicta.'
  },
  {
    name: 'Holly Field',
    position: 'Customer Service',
    photo: 'https://randomuser.me/api/portraits/women/18.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eveniet maiores reiciendis adipisci, iusto ipsam in laborum aspernatur quam dicta a modi quasi velit aliquam vero tempore sequi corrupti dolores veritatis accusantium consequuntur dolor sunt. Laborum, nemo illum exercitationem aliquam odio voluptates iure incidunt praesentium voluptatibus explicabo sit vel voluptas.'
  },
  {
    name: 'Michael Tyson',
    position: 'Marketing',
    photo: 'https://randomuser.me/api/portraits/men/95.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iure eligendi esse tempore eos atque ut natus rerum. Magnam, dolores aspernatur cum saepe aliquid quisquam asperiores ab voluptate esse, a exercitationem. Quasi molestias eos modi a obcaecati perferendis eum dicta.'
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  idx = idx > testimonials.length - 1 ? 0 : idx;
}

setInterval(() => {
  updateTestimonial()
}, 10000)