import { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    rating: '5',
    productService: '',
    satisfactionLevel: 'satisfied',
    improvements: '',
    complaintType: '',
    incidentDate: '',
    suggestionCategory: '',
    expectedOutcome: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${activeTab} submitted:`, formData);
    alert(`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} submitted successfully!`);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      rating: '5',
      productService: '',
      satisfactionLevel: 'satisfied',
      improvements: '',
      complaintType: '',
      incidentDate: '',
      suggestionCategory: '',
      expectedOutcome: ''
    });
  };

  const getTabTitle = () => {
    switch(activeTab) {
      case 'contact': return 'Contact Us';
      case 'feedback': return 'Share Your Feedback';
      case 'survey': return 'Customer Survey';
      case 'complaint': return 'File a Complaint';
      case 'suggestion': return 'Submit a Suggestion';
      default: return 'Contact Us';
    }
  };

  const renderForm = () => {
    switch(activeTab) {
      case 'contact':
        return (
          <>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 000-0000"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us more about your inquiry..."
                rows="6"
                required
              ></textarea>
            </div>
          </>
        );

      case 'feedback':
        return (
          <>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="John Doe"
          required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="john@example.com"
          required
              />
            </div>

            <div className="form-group">
              <label htmlFor="productService">Product/Service</label>
              <input
          type="text"
          id="productService"
          name="productService"
          value={formData.productService}
          onChange={handleInputChange}
          placeholder="Which product or service?"
          required
              />
            </div>

            <div className="form-group">
              <label htmlFor="rating">Rating (1-5)</label>
              <select
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
          required
          style={{ color: '#000' }}
              >
          <option value="5" style={{ color: '#000' }}>5 - Excellent</option>
          <option value="4" style={{ color: '#000' }}>4 - Good</option>
          <option value="3" style={{ color: '#000' }}>3 - Average</option>
          <option value="2" style={{ color: '#000' }}>2 - Poor</option>
          <option value="1" style={{ color: '#000' }}>1 - Very Poor</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="satisfactionLevel">Overall Satisfaction</label>
              <select
          id="satisfactionLevel"
          name="satisfactionLevel"
          value={formData.satisfactionLevel}
          onChange={handleInputChange}
          required
          style={{ color: '#000' }}
              >
          <option value="very-satisfied" style={{ color: '#000' }}>Very Satisfied</option>
          <option value="satisfied" style={{ color: '#000' }}>Satisfied</option>
          <option value="neutral" style={{ color: '#000' }}>Neutral</option>
          <option value="dissatisfied" style={{ color: '#000' }}>Dissatisfied</option>
          <option value="very-dissatisfied" style={{ color: '#000' }}>Very Dissatisfied</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Feedback</label>
              <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Share your experience with us..."
          rows="6"
          required
              ></textarea>
            </div>
          </>
        );

      case 'survey':
        return (
          <>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="John Doe"
          required
          style={{ color: '#000' }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="john@example.com"
          required
          style={{ color: '#000' }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="satisfactionLevel">How satisfied are you with our services?</label>
              <select
          id="satisfactionLevel"
          name="satisfactionLevel"
          value={formData.satisfactionLevel}
          onChange={handleInputChange}
          required
          style={{ color: '#000' }}
              >
          <option value="very-satisfied">Very Satisfied</option>
          <option value="satisfied">Satisfied</option>
          <option value="neutral">Neutral</option>
          <option value="dissatisfied">Dissatisfied</option>
          <option value="very-dissatisfied">Very Dissatisfied</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="rating">Would you recommend us to others? (1-10)</label>
              <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
          min="1"
          max="10"
          placeholder="Rate from 1 to 10"
          required
          style={{ color: '#000' }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="improvements">What can we improve?</label>
              <textarea
          id="improvements"
          name="improvements"
          value={formData.improvements}
          onChange={handleInputChange}
          placeholder="Please share your suggestions for improvement..."
          rows="5"
          required
          style={{ color: '#000' }}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Comments</label>
              <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Any other feedback you'd like to share..."
          rows="4"
          style={{ color: '#000' }}
              ></textarea>
            </div>
          </>
        );

      case 'complaint':
        return (
          <>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="John Doe"
          required
          style={{ color: '#000' }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="john@example.com"
          required
          style={{ color: '#000' }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+1 (555) 000-0000"
          required
          style={{ color: '#000' }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="complaintType">Complaint Type</label>
              <select
          id="complaintType"
          name="complaintType"
          value={formData.complaintType}
          onChange={handleInputChange}
          required
          style={{ color: '#000' }}
              >
          <option value="">Select complaint type</option>
          <option value="product-quality">Product Quality</option>
          <option value="service-issue">Service Issue</option>
          <option value="billing">Billing/Payment</option>
          <option value="delivery">Delivery</option>
          <option value="customer-support">Customer Support</option>
          <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="incidentDate">Date of Incident</label>
              <input
          type="date"
          id="incidentDate"
          name="incidentDate"
          value={formData.incidentDate}
          onChange={handleInputChange}
          required
          style={{ color: '#000' }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Complaint Details</label>
              <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Please describe your complaint in detail..."
          rows="6"
          required
          style={{ color: '#000' }}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="expectedOutcome">Expected Resolution</label>
              <textarea
          id="expectedOutcome"
          name="expectedOutcome"
          value={formData.expectedOutcome}
          onChange={handleInputChange}
          placeholder="What outcome would you like?"
          rows="3"
          required
          style={{ color: '#000' }}
              ></textarea>
            </div>
          </>
        );

      case 'suggestion':
        return (
          <>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="John Doe"
          required
          style={{ color: '#000' }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="john@example.com"
          required
          style={{ color: '#000' }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="suggestionCategory">Suggestion Category</label>
              <select
          id="suggestionCategory"
          name="suggestionCategory"
          value={formData.suggestionCategory}
          onChange={handleInputChange}
          required
          style={{ color: '#000' }}
              >
          <option value="">Select category</option>
          <option value="new-feature">New Feature</option>
          <option value="improvement">Improvement</option>
          <option value="user-experience">User Experience</option>
          <option value="product">Product</option>
          <option value="service">Service</option>
          <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Suggestion Title</label>
              <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          placeholder="Brief title for your suggestion"
          required
          style={{ color: '#000' }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Detailed Suggestion</label>
              <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Please describe your suggestion in detail..."
          rows="6"
          required
          style={{ color: '#000' }}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="expectedOutcome">Expected Benefits</label>
              <textarea
          id="expectedOutcome"
          name="expectedOutcome"
          value={formData.expectedOutcome}
          onChange={handleInputChange}
          placeholder="How would this suggestion benefit users?"
          rows="3"
          required
          style={{ color: '#000' }}
              ></textarea>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app">
      <div className="header">
        <h1 className="main-title">Customer Engagement Portal</h1>
        <h2 className="company-name">Next Gen Software Hub Pvt. Ltd.</h2>
        <p className="tagline">We value your input and are here to help ✨</p>
      </div>

      <div className="portal-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Contact
          </button>
          <button 
            className={`tab ${activeTab === 'feedback' ? 'active' : ''}`}
            onClick={() => setActiveTab('feedback')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="9"></line>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
            Feedback
          </button>
          <button 
            className={`tab ${activeTab === 'survey' ? 'active' : ''}`}
            onClick={() => setActiveTab('survey')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
            Survey
          </button>
          <button 
            className={`tab ${activeTab === 'complaint' ? 'active' : ''}`}
            onClick={() => setActiveTab('complaint')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            Complaint
          </button>
          <button 
            className={`tab ${activeTab === 'suggestion' ? 'active' : ''}`}
            onClick={() => setActiveTab('suggestion')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            Suggestion
          </button>
        </div>

        <div className="content">
          <h2 className="section-title">{getTabTitle()}</h2>
          
          <form onSubmit={handleSubmit}>
            {renderForm()}

            <button type="submit" className="submit-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
