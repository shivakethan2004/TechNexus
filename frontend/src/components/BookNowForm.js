import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const BookNowForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: "",
    budget: "",
    description: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.budget) newErrors.budget = "Please select a budget";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call - Replace with actual backend integration later
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        service: "",
        budget: "",
        description: ""
      });
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
        data-testid="book-now-modal-overlay"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          data-testid="book-now-modal"
        >
          <div className="sticky top-0 bg-white border-b border-[#D3D3D3] p-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-[#363636]" data-testid="book-now-heading">Book a Project</h2>
            <button 
              onClick={onClose} 
              className="text-[#5E5E5E] hover:text-[#363636] transition-colors"
              data-testid="book-now-close-btn"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="p-8 text-center" data-testid="book-now-success-message">
              <div className="w-16 h-16 bg-[#363636] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#363636] mb-2">Thank You!</h3>
              <p className="text-[#5E5E5E]">We've received your request and will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-[#363636] mb-2 block">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`bg-[#F5F5F5] border-[#D3D3D3] focus:border-[#363636] ${errors.fullName ? 'border-red-500' : ''}`}
                    placeholder="John Doe"
                    data-testid="book-now-full-name-input"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-[#363636] mb-2 block">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`bg-[#F5F5F5] border-[#D3D3D3] focus:border-[#363636] ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="john@example.com"
                    data-testid="book-now-email-input"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-[#363636] mb-2 block">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`bg-[#F5F5F5] border-[#D3D3D3] focus:border-[#363636] ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="+91 98765 43210"
                    data-testid="book-now-phone-input"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Label htmlFor="companyName" className="text-[#363636] mb-2 block">Company Name (Optional)</Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="bg-[#F5F5F5] border-[#D3D3D3] focus:border-[#363636]"
                    placeholder="Your Company"
                    data-testid="book-now-company-input"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="service" className="text-[#363636] mb-2 block">Choose Service *</Label>
                  <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className={`bg-[#F5F5F5] border-[#D3D3D3] ${errors.service ? 'border-red-500' : ''}`} data-testid="book-now-service-select">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="app-dev">App Development</SelectItem>
                      <SelectItem value="web-dev">Web Development</SelectItem>
                      <SelectItem value="digital-assist">Digital Assistance</SelectItem>
                      <SelectItem value="marketing">Marketing Services</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                </div>

                <div>
                  <Label htmlFor="budget" className="text-[#363636] mb-2 block">Project Budget *</Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                    <SelectTrigger className={`bg-[#F5F5F5] border-[#D3D3D3] ${errors.budget ? 'border-red-500' : ''}`} data-testid="book-now-budget-select">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                      <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                      <SelectItem value="1l-3l">₹1,00,000 - ₹3,00,000</SelectItem>
                      <SelectItem value="3l-5l">₹3,00,000 - ₹5,00,000</SelectItem>
                      <SelectItem value="above-5l">Above ₹5,00,000</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="text-[#363636] mb-2 block">Project Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-[#F5F5F5] border-[#D3D3D3] focus:border-[#363636] min-h-[120px]"
                  placeholder="Tell us about your project requirements..."
                  data-testid="book-now-description-textarea"
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#363636] text-white hover:bg-[#5E5E5E] rounded-full py-6"
                  data-testid="book-now-submit-btn"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
                <Button
                  type="button"
                  onClick={onClose}
                  variant="outline"
                  className="border-[#363636] text-[#363636] hover:bg-[#F5F5F5] rounded-full px-8"
                  data-testid="book-now-cancel-btn"
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookNowForm;