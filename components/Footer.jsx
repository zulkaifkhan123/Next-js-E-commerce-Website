import Link from 'next/link';
import '@/components/components.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
            VogueBay
            </Link>
            <p className="footer-tagline">Your one-stop online shopping destination</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="social-icon">
              <i class="ri-facebook-line"></i>
              </a>
              <a href="#" aria-label="Twitter" className="social-icon">
              <i class="ri-twitter-x-line"></i>
              </a>
              <a href="#" aria-label="Instagram" className="social-icon">
              <i class="ri-linkedin-line"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h3 className="link-header">Quick Links</h3>
              <Link href="/" className="footer-link">Home</Link>
              <Link href="/Products" className="footer-link">Products</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </div>

            <div className="link-group">
              <h3 className="link-header">Categories</h3>
              <Link href="/Products" className="footer-link">Electronics</Link>
              <Link href="/Products" className="footer-link">Bags</Link>
              <Link href="/Products" className="footer-link">Shirts</Link>
              <Link href="/Products" className="footer-link">Cups</Link>
              <Link href="/Products" className="footer-link">Hoodies</Link>
            </div>

          </div>

          <div className="footer-newsletter">
            <h3 className="link-header">Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest products and deals.</p>
            <div className="subscribe-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="email-input" 
              />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {currentYear} BuyNest. All rights reserved.</p>
          <div className="payment-methods">
            <span className="payment-icon">Visa</span>
            <span className="payment-icon">Mastercard</span>
            <span className="payment-icon">PayPal</span>
            <span className="payment-icon">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;