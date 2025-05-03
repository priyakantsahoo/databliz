
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Cerebrum has revolutionized how our team shares documents. The AI-powered search feature has reduced our document retrieval time by 78%.",
    author: "Jane Doe",
    position: "Head of Marketing",
    company: "TechCorp Inc.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    quote: "Finding documents is faster than ever with Cerebrum's powerful search. We've eliminated at least 5 hours of weekly overhead searching for project files.",
    author: "John Smith",
    position: "IT Manager",
    company: "Global Solutions Ltd.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    quote: "The AI features have transformed our knowledge management strategy. Cerebrum identified patterns in our documentation that led to a 32% increase in team productivity.",
    author: "Emily Johnson",
    position: "Operations Director",
    company: "Innovative Systems",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

// Company logos for the "Trusted By" section
const companyLogos = [
  {
    name: "Acme Corporation",
    logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    altText: "Acme Corporation logo"
  },
  {
    name: "TechNova",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    altText: "TechNova logo"
  },
  {
    name: "Quantum Enterprises",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    altText: "Quantum Enterprises logo"
  },
  {
    name: "GlobalTech",
    logo: "https://images.unsplash.com/photo-1561070791-36c11767b26a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    altText: "GlobalTech logo"
  },
  {
    name: "Innovate Solutions",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    altText: "Innovate Solutions logo"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Businesses Like Yours</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers are saying about their experience with Cerebrum.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {companyLogos.map((company, index) => (
            <div key={index} className="h-12 w-28 bg-gray-50 rounded-md flex items-center justify-center border border-gray-100 shadow-soft overflow-hidden">
              {company.logo ? (
                <img 
                  src={company.logo} 
                  alt={company.altText} 
                  className="object-contain h-8 w-24 mix-blend-multiply"
                  loading="lazy"
                />
              ) : (
                <div className="text-gray-400 font-medium">{company.name}</div>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-border shadow-soft hover:shadow-md transition-shadow">
              <div className="mb-6">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10.5H7.5C6.67 10.5 6 11.17 6 12V18C6 18.83 6.67 19.5 7.5 19.5H13.5V22.5C13.5 24.15 12.15 25.5 10.5 25.5H9.75C9.33 25.5 9 25.83 9 26.25V28.5C9 28.92 9.33 29.25 9.75 29.25H10.5C14.25 29.25 17.25 26.25 17.25 22.5V12C17.25 11.17 16.58 10.5 15.75 10.5H15ZM28.5 10.5H21C20.17 10.5 19.5 11.17 19.5 12V18C19.5 18.83 20.17 19.5 21 19.5H27V22.5C27 24.15 25.65 25.5 24 25.5H23.25C22.83 25.5 22.5 25.83 22.5 26.25V28.5C22.5 28.92 22.83 29.25 23.25 29.25H24C27.75 29.25 30.75 26.25 30.75 22.5V12C30.75 11.17 30.08 10.5 29.25 10.5H28.5Z" fill="#9353FF"/>
                </svg>
              </div>
              <p className="text-lg mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <Avatar className="w-12 h-12 mr-4 border border-gray-100">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
