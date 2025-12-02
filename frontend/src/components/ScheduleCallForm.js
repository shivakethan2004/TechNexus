import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const ScheduleCallForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM"
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.timeSlot) newErrors.timeSlot = "Please select a time slot";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call - Replace with actual backend integration later
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Call scheduled:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        timeSlot: ""
      });
      setIsSubmitted(false);
      onClose();
    }, 2000);
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
        data-testid="schedule-call-modal-overlay"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl shadow-2xl max-w-lg w-full"
          data-testid="schedule-call-modal"
        >
          <div className="bg-white border-b border-[#D3D3D3] p-6 flex items-center justify-between rounded-t-xl">
            <h2 className="text-2xl font-bold text-[#363636]" data-testid="schedule-call-heading">Schedule a Call</h2>
            <button 
              onClick={onClose} 
              className="text-[#5E5E5E] hover:text-[#363636] transition-colors"
              data-testid="schedule-call-close-btn"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="p-8 text-center" data-testid="schedule-call-success-message">
              <div className="w-16 h-16 bg-[#363636] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#363636] mb-2">Call Scheduled!</h3>
              <p className="text-[#5E5E5E]">We'll reach out to you at the scheduled time.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <p className="text-[#5E5E5E] text-center">Pick a time and we'll reach out immediately.</p>

              <div>
                <Label htmlFor="name" className="text-[#363636] mb-2 block">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`bg-[#F5F5F5] border-[#D3D3D3] focus:border-[#363636] ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="John Doe"
                  data-testid="schedule-call-name-input"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                  data-testid="schedule-call-email-input"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="phone" className="text-[#363636] mb-2 block">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`bg-[#F5F5F5] border-[#D3D3D3] focus:border-[#363636] ${errors.phone ? 'border-red-500' : ''}`}
                  placeholder="+91 98765 43210"
                  data-testid="schedule-call-phone-input"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <Label htmlFor="date" className="text-[#363636] mb-2 block flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Select Date *
                </Label>
                <Input
                  id="date"
                  type="date"
                  min={today}
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className={`bg-[#F5F5F5] border-[#D3D3D3] focus:border-[#363636] ${errors.date ? 'border-red-500' : ''}`}
                  data-testid="schedule-call-date-input"
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
              </div>

              <div>
                <Label htmlFor="timeSlot" className="text-[#363636] mb-2 block flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Select Time Slot *
                </Label>
                <Select value={formData.timeSlot} onValueChange={(value) => setFormData({ ...formData, timeSlot: value })}>
                  <SelectTrigger className={`bg-[#F5F5F5] border-[#D3D3D3] ${errors.timeSlot ? 'border-red-500' : ''}`} data-testid="schedule-call-timeslot-select">
                    <SelectValue placeholder="Choose a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.timeSlot && <p className="text-red-500 text-sm mt-1">{errors.timeSlot}</p>}
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-[#363636] text-white hover:bg-[#5E5E5E] rounded-full py-6"
                  data-testid="schedule-call-submit-btn"
                >
                  {isSubmitting ? "Scheduling..." : "Schedule Call"}
                </Button>
                <Button
                  type="button"
                  onClick={onClose}
                  variant="outline"
                  className="border-[#363636] text-[#363636] hover:bg-[#F5F5F5] rounded-full px-8"
                  data-testid="schedule-call-cancel-btn"
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

export default ScheduleCallForm;