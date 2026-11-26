
import './App.css'




const products = [

{
  name: 'Small',
  image: 'https://i.etsystatic.com/62325459/r/il/cd34d8/7375858620/il_fullxfull.7375858620_m63y.jpg',
},

  {
    name: 'Extra Small',
    image: 'https://cdn.shopify.com/s/files/1/0523/7781/3176/products/20201010_172419_1370x.jpg?v=1616101345',
  },
  {
    name: 'Medium',
    image: 'https://favyafricanmarket.com/cdn/shop/files/B0869069-D272-42CF-A0CF-BAFACFDC5139.jpg?v=1724607680',
  },
  {
    name: 'Large',
    image: 'https://rave-services.f4b-flutterwave.com/v1/services/filestack/download/RUEtfSTWbwxGbI5RTAFY',
  },
]


const whatsappLink =
  'https://wa.me/2348068309289?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20dried%20ponmo.'

function App() {
  return (
    <div className="website">
      <nav className="navbar">
        <a href="#home" className="logo">PONMO<span> CORNER</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#products">Our Products</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        <a href={whatsappLink} className="nav-button" target="_blank" rel="noreferrer">
          Order on WhatsApp
        </a>
      </nav>

      <header className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO PONMO CORNER</p>
          <h1>Quality Dried Ponmo, Made Easy.</h1>
          <p>
            Explore our different ponmo sizes and contact us
            directly to make your enquiries and orders.
          </p>
          <a href="#products" className="main-button">Explore Our Products</a>
        </div>
      </header>

      <section className="products-section" id="products">
        <div className="section-heading">
          <p className="eyebrow">OUR COLLECTION</p>
          <h2>Explore Our Ponmo Sizes</h2>
          <p>Choose the size that works best for you.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.name}>
              <img
                src={product.image}
                alt={`${product.name} dried ponmo`}
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="enquire-button"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div>
          <p className="eyebrow">ABOUT US</p>
          <h2>Welcome to Ponmo Corner</h2>
          <p>
            We make it easy for you to explore our dried ponmo
            sizes and contact us directly for your enquiries.
            We look forward to hearing from you!
          </p>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>Ready to Make an Enquiry?</h2>
        <p>Contact us through WhatsApp, phone or email.</p>

        <a href={whatsappLink} target="_blank" rel="noreferrer" className="main-button">
          Chat with Us on WhatsApp
        </a>

        <div className="contact-details">
          <p>Phone: <a href="tel:08068309289">08068309289</a></p>
          <p>Email: <a href="mailto:aliumarymercyperfectpeace@gmail.com">
            aliumarymercyperfectpeace@gmail.com
          </a></p>
        </div>
      </section>

      <footer>
        <h3>PONMO CORNER</h3>
        <p>Quality Dried Ponmo, Made Easy.</p>
        <p>© {new Date().getFullYear()} Ponmo Corner. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
