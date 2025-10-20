'use client'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        .card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
        .button {
          background: #667eea;
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .button:hover {
          background: #5568d3;
          transform: scale(1.05);
        }
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }
      `}</style>

      {/* Header */}
      <header style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '20px 0',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              fontSize: '32px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold'
            }}>✈️</div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              margin: 0
            }}>SFO Airport</h1>
          </div>
          <div style={{ display: 'flex', gap: '32px', fontSize: '14px', fontWeight: '500', color: '#333' }}>
            <a href="#flights" style={{ textDecoration: 'none', color: '#333' }}>Flights</a>
            <a href="#services" style={{ textDecoration: 'none', color: '#333' }}>Services</a>
            <a href="#parking" style={{ textDecoration: 'none', color: '#333' }}>Parking</a>
            <a href="#contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        padding: '80px 24px',
        textAlign: 'center',
        color: 'white'
      }} className="fade-in">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '56px',
            fontWeight: 'bold',
            marginBottom: '24px',
            textShadow: '0 2px 20px rgba(0,0,0,0.2)'
          }}>
            Welcome to San Francisco International Airport
          </h2>
          <p style={{
            fontSize: '24px',
            marginBottom: '40px',
            opacity: 0.95,
            maxWidth: '800px',
            margin: '0 auto 40px'
          }}>
            Your gateway to the world. Experience world-class service and seamless travel.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="button">Check Flight Status</button>
            <button className="button" style={{ background: 'white', color: '#667eea' }}>Book Parking</button>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section style={{
        padding: '80px 24px',
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '16px',
            color: 'white'
          }}>
            Airport Information
          </h3>
          <p style={{ textAlign: 'center', color: 'white', opacity: 0.9, marginBottom: '48px', fontSize: '18px' }}>
            Everything you need to know for a smooth journey
          </p>

          <div className="info-grid">
            <div className="card">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🛫</div>
              <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#333' }}>Flight Information</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Real-time arrivals and departures. Track your flight status and gate information.
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🅿️</div>
              <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#333' }}>Parking & Transportation</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Multiple parking options, BART access, and rental car services available 24/7.
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🍴</div>
              <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#333' }}>Dining & Shopping</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Award-winning restaurants, cafes, and retail stores throughout all terminals.
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🌐</div>
              <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#333' }}>Free WiFi</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Stay connected with complimentary high-speed WiFi throughout the airport.
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>♿</div>
              <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#333' }}>Accessibility Services</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Wheelchair assistance, accessible facilities, and dedicated support services.
              </p>
            </div>

            <div className="card">
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏨</div>
              <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px', color: '#333' }}>Hotels & Lounges</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                Premium lounges and nearby hotel accommodations for your comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '80px 24px',
        background: 'rgba(255,255,255,0.05)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            textAlign: 'center',
            color: 'white'
          }}>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '8px' }}>4</div>
              <div style={{ fontSize: '18px', opacity: 0.9 }}>Terminals</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '8px' }}>50M+</div>
              <div style={{ fontSize: '18px', opacity: 0.9 }}>Annual Passengers</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '8px' }}>100+</div>
              <div style={{ fontSize: '18px', opacity: 0.9 }}>Destinations</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '8px' }}>24/7</div>
              <div style={{ fontSize: '18px', opacity: 0.9 }}>Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0,0,0,0.2)',
        padding: '48px 24px',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ marginBottom: '16px', fontSize: '18px', fontWeight: '500' }}>
            San Francisco International Airport (SFO)
          </p>
          <p style={{ opacity: 0.8, marginBottom: '24px' }}>
            San Francisco, CA 94128 | Phone: (800) 435-9736
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', fontSize: '14px' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Terms of Use</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Accessibility</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a>
          </div>
          <p style={{ marginTop: '32px', opacity: 0.7, fontSize: '14px' }}>
            © 2025 San Francisco International Airport. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
