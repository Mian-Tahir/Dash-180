
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import MuiPhoneNumber from 'mui-phone-number';



interface ContactSectionProps {
  sectionRef?: React.RefObject<HTMLElement>;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  hotelName: string;
  businessInfo: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  hotelName?: string;
  businessInfo?: string;
}

export const ContactSection = ({ sectionRef }: ContactSectionProps): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    hotelName: "",
    businessInfo: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('sa'); // default

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    const phoneRegex = /^\+\d{1,4}[-\s]?\d{4,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.trim().replace(/[\s-]/g, ""))) {
      newErrors.phone = "Please enter a valid phone number including country code";
    }

    // Hotel name validation
    if (!formData.hotelName.trim()) {
      newErrors.hotelName = "Hotel name is required";
    }

    // Business info validation
    if (!formData.businessInfo.trim()) {
      newErrors.businessInfo = "Please tell us about your business";
    } else if (formData.businessInfo.trim().length < 10) {
      newErrors.businessInfo = "Please provide more details (at least 10 characters)";
    } else if (formData.businessInfo.length > 500) {
      newErrors.businessInfo = "Message must be less than 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (field: keyof FormData, value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: typeof value === 'string' ? value : value.target.value
    }));

    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors below");
      return;
    }

    setIsLoading(true);

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        phone: formData.phone,
        hotel_name: formData.hotelName,
        message: formData.businessInfo,
        submission_date: new Date().toLocaleString(),
        country: selectedCountry,
        country_code: formData.phone.split(' ')[0],
      };

      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      // Success notification
      toast.success("Thank you! Your message has been sent successfully. We'll get back to you soon!");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        hotelName: "",
        businessInfo: ""
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error("Sorry, there was an error sending your message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={sectionRef as any} className="w-full min-h-[712px] bg-[#00358e] flex items-center justify-center py-8 lg:py-0">
      <div className="w-full max-w-[1041px] flex flex-col lg:flex-row items-center justify-between min-h-[536px] gap-8 lg:gap-0 px-4 lg:px-0">
        {/* Left Side: Heading and Subtext */}
        <div className="flex flex-col justify-center w-full lg:w-[415px] text-center lg:text-left">
          <h2 className="font-['Inter_Tight',Helvetica] font-normal text-white text-3xl lg:text-5xl leading-[normal] mb-4">
            Ready to elevate your hotel&apos;s performance?
          </h2>
          <div className="text-white text-base font-normal [font-family:'Inter',Helvetica] font-inter mb-2">
            Let&apos;s discuss how DASH180 can revolutionize your business.
          </div>
        </div>

        {/* Right Side: Form Card */}
        <Card className="w-full max-w-[600px] lg:w-[600px] min-h-[536px] rounded-[13px] border bg-white shadow-[0px_3px_20px_#080f340f] flex flex-col justify-center">
          <CardContent className="p-0 h-full flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between px-6 lg:px-[30px] pt-6 lg:pt-[25px] pb-6 lg:pb-[29px]">
              {/* Name and Email Fields */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-[22px] mb-6">
                <div className="flex flex-col w-full sm:w-1/2">
                  <label className="font-medium text-[#222530] [font-family:'Inter',Helvetica] text-base leading-6 mb-2">
                    Full name *
                  </label>
                  <Input
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`h-12 bg-white rounded-lg border [font-family:'Inter',Helvetica] pl-[17px] text-[#75798a] placeholder-[#75798a] text-base ${
                      errors.fullName ? 'border-red-500' : 'border-[#00358e]'
                    }`}
                    placeholder="Enter your full name"
                    disabled={isLoading}
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-sm mt-1">{errors.fullName}</span>
                  )}
                </div>
                <div className="flex flex-col w-full sm:w-1/2">
                  <label className="font-medium text-[#222530] [font-family:'Inter',Helvetica] text-base leading-6 mb-2">
                    Email address *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`h-12 bg-[#f5f7fa] rounded-lg border [font-family:'Inter',Helvetica] pl-3.5 text-[#75798a] placeholder-[#bdbdbd] text-base ${
                      errors.email ? 'border-red-500' : 'border-[#e1e4ea]'
                    }`}
                    placeholder="e.g. example@email.com"
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-1">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Phone and Hotel Name Fields */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-[22px] mb-6">
                <div className="flex flex-col w-full sm:w-1/2">
                  <label className="font-medium text-[#222530] [font-family:'Inter',Helvetica] text-base leading-6 mb-2">
                    Phone *
                  </label>
                  <MuiPhoneNumber
                    defaultCountry="sa"
                    onlyCountries={['sa', 'ae', 'pk', 'cn', 'in', 'bd']}
                    value={formData.phone}
                    onChange={
                      ((value: string, countryData: any) => {
                        handleInputChange('phone', value || '');
                        setSelectedCountry(countryData?.countryCode);
                      }) as any
                    }
                    disabled={isLoading}
                    fullWidth
                    variant="outlined"
                    margin="none"
                    InputProps={{
                      style: {
                        height: '48px',
                        background: '#f5f7fa',
                        borderRadius: '0.5rem',
                        fontFamily: 'Inter, Helvetica',
                        color: '#75798a',
                        fontSize: '1rem',
                        paddingLeft: '0.75rem',
                      },
                    }}
                    countryCodeEditable={false}
                    placeholder="e.g. 5xxxxxxxx"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm mt-1">{errors.phone}</span>
                  )}
                </div>
                <div className="flex flex-col w-full sm:w-1/2">
                  <label className="font-medium text-[#222530] [font-family:'Inter',Helvetica] text-base leading-6 mb-2">
                    Hotel name *
                  </label>
                  <Input
                    value={formData.hotelName}
                    onChange={(e) => handleInputChange('hotelName', e.target.value)}
                    className={`h-12 bg-[#f5f7fa] [font-family:'Inter',Helvetica] rounded-lg border pl-4 text-[#75798a] placeholder-[#bdbdbd] text-base ${
                      errors.hotelName ? 'border-red-500' : 'border-[#e1e4ea]'
                    }`}
                    placeholder="e.g. Marriott"
                    disabled={isLoading}
                  />
                  {errors.hotelName && (
                    <span className="text-red-500 text-sm mt-1">{errors.hotelName}</span>
                  )}
                </div>
              </div>

              {/* Business Information Field */}
              <div className="mb-6">
                <label className="font-medium text-[#222530] [font-family:'Inter',Helvetica] text-base leading-6 mb-2 block">
                  Tell us a little about your business *
                </label>
                <Textarea
                  value={formData.businessInfo}
                  onChange={(e) => handleInputChange('businessInfo', e.target.value)}
                  className={`w-full h-[120px] [font-family:'Inter',Helvetica] bg-[#f5f7fa] rounded-lg border p-5 text-[#75798a] placeholder-[#bdbdbd] text-base resize-none ${
                    errors.businessInfo ? 'border-red-500' : 'border-[#e1e4ea]'
                  }`}
                  placeholder="Please tell us about your hotel, current challenges, and how DASH180 can help you..."
                  maxLength={500}
                  disabled={isLoading}
                />
                <div className="flex justify-between items-start mt-1">
                  {errors.businessInfo && (
                    <span className="text-red-500 text-sm">{errors.businessInfo}</span>
                  )}
                  <span className="text-[#75798a] text-sm ml-auto">
                    {formData.businessInfo.length}/500
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-[120px] h-[46px] [font-family:'Inter',Helvetica] text-base bg-[#05c168] rounded-[58.07px] shadow-[0px_0.59px_2.34px_#0000001f] hover:bg-[#04a056] disabled:opacity-50 disabled:cursor-not-allowed text-white"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};