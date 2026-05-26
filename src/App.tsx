import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, MapPin, Star, Phone, MessageCircle, Menu, X, ArrowRight, 
  Map, Gift, Award, ShieldCheck, Heart, Sparkles, Send, Check
} from 'lucide-react';
import { navigationItems, TOUR_PACKAGES } from './data';
import { TimelineSection } from './components/TimelineSection';
import { ExperienceSection } from './components/ExperienceSection';
import { FoodTourSection } from './components/FoodTourSection';
import { FAQSection } from './components/FAQSection';
import { BookingForm } from './components/BookingForm';
import { FeedbackSection } from './components/FeedbackSection';
import { BrandLogo } from './components/BrandLogo';

export default function App() {
  const [selectedTourId, setSelectedTourId] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('intro');
  
  // Rapid consult state
  const [quickPhone, setQuickPhone] = useState<string>('');
  const [quickSubmitStatus, setQuickSubmitStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [quickError, setQuickError] = useState<string>('');

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Toggle Sticky Header styling
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section on scroll
      const sections = ['intro', 'journey', 'timeline', 'experience', 'food', 'faq', 'booking'];
      let currentSection = 'intro';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold based on viewport
          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  // Bridge action: click card -> prefill booking & scroll down
  const handleChooseTour = (tourId: string) => {
    setSelectedTourId(tourId);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      const headerOffset = 80;
      const elementPosition = bookingEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Submit rapid consult form (Floating Box)
  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = quickPhone.trim().replace(/\s+/g, '');
    const phoneRegex = /^(0|84)(3|5|7|8|9)[0-9]{8}$/;

    if (!cleanPhone) {
      setQuickError('Vui lòng nhập SDT.');
      return;
    }
    if (!phoneRegex.test(cleanPhone)) {
      setQuickError('Số điện thoại không hợp lệ.');
      return;
    }

    setQuickError('');
    setQuickSubmitStatus('loading');
    
    setTimeout(() => {
      setQuickSubmitStatus('success');
      setQuickPhone('');
      // Reset success status after a while
      setTimeout(() => setQuickSubmitStatus('idle'), 6000);
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen bg-nat-bg text-nat-text selection:bg-nat-sage/10 selection:text-nat-sage" id="master-wonder-tour-landing">
      
      {/* 1. Bar điều hướng sticky glassmorphism */}
      <header 
        id="navbar-header"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-nat-bg/85 backdrop-blur-md shadow-sm border-b border-nat-sand/40' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Tên thương hiệu */}
          <a 
            href="#intro" 
            onClick={(e) => handleScrollTo(e, 'intro')}
            className="flex items-center gap-2.5 group shrink-0 outline-none"
            id="brand-logo-id"
          >
            <BrandLogo 
              size={48} 
              showText={true} 
              className={isScrolled ? 'text-nat-text' : 'text-white'}
            />
          </a>

          {/* Navigation Links Desktop */}
          <nav className="hidden lg:flex items-center gap-1 bg-nat-sand/20 p-1 rounded-full border border-nat-sand/35" id="desktop-routing-links">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className={`px-4 py-2 rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-200 outline-none ${
                    isActive 
                      ? 'bg-nat-sage text-white shadow-sm shadow-nat-sage/10' 
                      : isScrolled
                        ? 'text-nat-text/80 hover:text-nat-sage hover:bg-nat-sand/30'
                        : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right action button CTA and Fanpage icon */}
          <div className="hidden sm:flex items-center gap-4 shrink-0" id="navbar-actions-desktop">
            <a 
              href="https://www.facebook.com/profile.php?id=61574364307884&mibextid=wwXIfr&rdid=WR3HTqXNqDSMvjwt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18dmx2FfPj%2F%3Fmibextid%3DwwXIfr#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 group ${
                isScrolled 
                  ? 'border-nat-sand text-nat-text/70 hover:bg-nat-sand/30 hover:text-nat-sage' 
                  : 'border-white/20 text-white/80 hover:bg-white/10 hover:text-white'
              }`}
              id="fanpage-icon-link"
              title="Ghé thăm Fanpage hỗ trợ"
            >
              <MessageCircle size={18} className="group-hover:scale-105 transition-transform" />
            </a>

            <a 
              href="#booking"
              onClick={(e) => handleScrollTo(e, 'booking')}
              className="px-5 py-2.5 bg-nat-earth hover:bg-nat-earth/90 active:scale-95 text-white text-xs font-bold font-sans uppercase tracking-wider rounded-xl shadow-md shadow-nat-earth/10 hover:shadow-lg hover:shadow-nat-earth/20 transition-all duration-200"
              id="cta-booking-exact"
            >
              Đặt ngay
            </a>
          </div>

          {/* Mobile Hamburguer button */}
          <button 
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`block lg:hidden p-2 rounded-xl transition-all outline-none ${
              isScrolled ? 'text-nat-text hover:bg-nat-sand/35' : 'text-white hover:bg-white/10'
            }`}
            id="mobile-menu-trigger"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      {/* Mobile Drawer (Menu điều hướng trên di động) */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        id="mobile-drawer-overlay"
      >
        {/* Dark Backdrop */}
        <div 
          className="absolute inset-0 bg-nat-text/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Drawer panel */}
        <div className="absolute right-0 top-0 bottom-0 w-72 bg-nat-bg p-6 shadow-2xl flex flex-col justify-between border-l border-nat-sand z-10" id="mobile-drawer-body">
          <div className="space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-nat-sand">
              <BrandLogo 
                size={38} 
                showText={true} 
                className="text-nat-sage"
              />
              <button 
                type="button" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-1.5 rounded-full hover:bg-nat-sand/30 text-nat-text/65 hover:text-nat-text"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Links vertically stacked */}
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className={`px-4 py-3 rounded-xl font-sans text-sm font-semibold tracking-wide transition-all ${
                    activeSection === item.id 
                      ? 'bg-nat-sage/10 text-nat-sage font-bold border-l-4 border-nat-sage' 
                      : 'text-nat-text/80 hover:bg-nat-sand/20 hover:text-nat-sage'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-nat-sand">
            <a 
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-nat-sand/20 hover:bg-nat-sand/40 text-nat-text/80 rounded-xl text-sm font-semibold border border-nat-sand/40"
            >
              <MessageCircle size={16} />
              Trò chuyện Fanpage
            </a>
            <a 
              href="#booking"
              onClick={(e) => handleScrollTo(e, 'booking')}
              className="block text-center w-full py-3 bg-nat-earth hover:bg-nat-earth/90 text-white rounded-xl text-sm font-bold uppercase tracking-wider shadow"
            >
              Đặt Tour ngay
            </a>
          </div>
        </div>
      </div>

      {/* 2. Khung bối cảnh (Hero Section - Introduction) */}
      <section 
        id="intro" 
        className="relative min-h-[92vh] flex items-center justify-center pt-24 overflow-hidden bg-[#0C2030]"
      >
        {/* Immersive Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80" 
            alt="Adventure Vietnam Mountains" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-50 scale-102 filter brightness-[0.7] contrast-[1.05]"
          />
          {/* Natural dark vignette to elevate readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#131714] via-transparent to-[#131714]/65" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
          
          {/* Hero left details */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-nat-sage/20 backdrop-blur-md text-nat-sand text-xs font-bold uppercase tracking-widest rounded-full border border-nat-sage/30 mx-auto lg:mx-0">
              <Sparkles size={13} className="text-nat-earth" />
              Đơn Vị Tiên Phong Trải Nghiệm May Đo
            </span>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal italic text-white leading-[1.15] tracking-wide">
              Hành Trình Giao Thoa <br className="hidden sm:inline" />
              <span className="text-nat-earth not-italic font-bold font-display block mt-1">
                Sóng Biển & Thân Tâm
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-nat-sand/90 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Thương hiệu nghỉ dưỡng chữa lành độc bản tại Bình Thuận. Cộng hưởng nguồn năng lượng sạch từ đồi cát Phan Thiết và hòn đảo hoang sơ Phú Quý, thiết kế riêng để nuôi dưỡng thân tâm trí bền vững.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#journey"
                onClick={(e) => handleScrollTo(e, 'journey')}
                className="w-full sm:w-auto px-8 py-3.5 bg-nat-sage hover:bg-nat-sage/90 active:scale-98 text-white rounded-xl text-sm font-bold tracking-wide shadow-lg shadow-nat-sage/20 transition-all text-center inline-flex items-center justify-center gap-1.5 cursor-pointer"
                id="hero-cta-explore-tours"
              >
                Xem danh mục Tour 
                <ArrowRight size={16} />
              </a>
              <a 
                href="tel:19001122" 
                className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 active:scale-98 text-white rounded-xl text-sm font-semibold tracking-wide border border-white/10 transition-all text-center inline-flex items-center justify-center gap-1.5"
              >
                <Phone size={14} />
                Hotline: 1900 1122
              </a>
            </div>

            {/* Quick trust cues badge */}
            <div className="pt-8 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 border-t border-white/10 text-white">
              <div>
                <span className="block text-2xl font-extrabold font-display text-nat-earth">100%</span>
                <span className="block text-[11px] text-nat-sand/80 mt-1 uppercase tracking-wider font-semibold">Tự nhiên hoang sơ</span>
              </div>
              <div className="border-x border-white/10 px-4">
                <span className="block text-2xl font-extrabold font-display text-nat-earth">4.9★</span>
                <span className="block text-[11px] text-nat-sand/80 mt-1 uppercase tracking-wider font-semibold">Được đánh giá cao</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold font-display text-nat-earth">24/7</span>
                <span className="block text-[11px] text-nat-sand/80 mt-1 uppercase tracking-wider font-semibold">Tư vấn chuyên biệt</span>
              </div>
            </div>
          </div>

          {/* Hero right: Floating Rapid Consultant Box (Hộp Thẻ Nổi) */}
          <div className="lg:col-span-12 xl:col-span-5 lg:ml-auto w-full max-w-sm mx-auto">
            <div 
              id="rapid-consulting-box"
              className="bg-nat-bg rounded-3xl border border-nat-sand shadow-2xl p-6 sm:p-8 relative overflow-hidden"
            >
              {/* Internal Accent lines */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-nat-sage to-nat-earth" />
              <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-nat-sage/5 rounded-full blur-xl pointer-events-none" />

              <h3 className="font-sans text-lg font-bold text-nat-text tracking-tight flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-nat-sage/10 text-nat-sage">
                  ⚡
                </span>
                Nhận Tư Vấn Nhanh 15p
              </h3>
              <p className="text-xs text-nat-text/80 mt-1.5 leading-relaxed">
                Quý khách bận việc? Chỉ cần để lại SĐT hoặc tài khoản Zalo, chúng tôi sẽ lập tức gởi trọn bộ lịch trình & chính sách ưu đãi hấp dẫn.
              </p>

              {quickSubmitStatus === 'success' ? (
                <div 
                  className="mt-6 p-4 rounded-xl bg-nat-sage/10 border border-nat-sage/20 text-center space-y-2 success-fade-in"
                  id="rapid-consult-success-notif"
                >
                  <div className="w-10 h-10 rounded-full bg-nat-sage/20 text-nat-sage flex items-center justify-center mx-auto">
                    <Check size={18} className="stroke-[3]" />
                  </div>
                  <h4 className="font-sans font-bold text-xs text-nat-text uppercase tracking-wide">
                    Đã lưu thông tin!
                  </h4>
                  <p className="text-xs text-nat-text/90 leading-relaxed font-normal">
                    Chuyên viên du lịch dồi dào kinh nghiệm sẽ gọi điện hoặc nhắn Zalo cho quý khách trong ít phút!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="mt-5 space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="quickPhone" className="block text-[11px] font-bold text-nat-text/70 uppercase tracking-widest">
                      Số điện thoại / Zalo nhận quà tặng <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="tel" 
                        id="quickPhone"
                        placeholder="Ví dụ: 0912 345 678"
                        value={quickPhone}
                        onChange={(e) => {
                          setQuickPhone(e.target.value);
                          setQuickError('');
                        }}
                        disabled={quickSubmitStatus === 'loading'}
                        className={`w-full py-3.5 px-4 bg-white/70 border border-nat-sand focus:bg-white focus:ring-2 focus:ring-nat-sage/20 focus:border-nat-sage rounded-xl text-nat-text text-sm outline-none transition-all ${
                          quickError ? 'border-red-350 bg-red-50/10 focus:ring-red-100 focus:border-red-500' : ''
                        }`}
                      />
                    </div>
                    {quickError && <p className="text-[11px] text-red-500 font-medium pl-1">{quickError}</p>}
                  </div>

                  <button 
                    type="submit"
                    disabled={quickSubmitStatus === 'loading'}
                    className="w-full py-3.5 bg-nat-text hover:bg-nat-text/90 active:scale-[0.98] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow shadow-nat-text/10 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {quickSubmitStatus === 'loading' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Đang đăng ký...
                      </>
                    ) : (
                      <>
                        Gửi Yêu Cầu Nhận Ưu Đãi
                        <Send size={12} />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-2 border-t border-nat-sand text-[10px] text-nat-text/60">
                    <ShieldCheck size={12} className="text-nat-sage" />
                    <span>Chúng tôi bảo mật tuyệt đối 100% dữ liệu danh tính.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Khung Hành Trình (Journey Section) */}
      <section 
        id="journey" 
        className="py-20 md:py-28 bg-[#FAF9F5]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 bg-nat-sage/10 text-nat-sage text-xs font-semibold uppercase tracking-wider rounded-md">
              Trị liệu & Nghỉ dưỡng 2026
            </span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-4xl font-bold text-nat-text tracking-tight whitespace-nowrap">
              Hành Trình Tái Tạo Năng Lượng Đột Phá
            </h2>
            <div className="w-48 h-1 bg-nat-earth mx-auto rounded-full" />
            <p className="text-nat-text/75 text-sm leading-relaxed">
              Dòng sản phẩm Tour Chữa Lành nguyên bản độc nhất thiết kế riêng cho Phan Thiết và Đảo Phú Quý, đưa tâm trí bạn về trạng thái tĩnh tâm tuyệt đối.
            </p>
          </div>

          {/* Grid Layout of 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="journey-packages-grid">
            {TOUR_PACKAGES.map((tour) => (
              <div 
                key={tour.id}
                className="bg-white rounded-3xl overflow-hidden border border-nat-sand flex flex-col justify-between hover:shadow-xl hover:shadow-nat-sage/5 hover:border-nat-sage/20 transition-all duration-300 group"
                id={`tour-card-${tour.id}`}
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden bg-nat-bg shrink-0">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay tags */}
                  <div className="absolute top-4 left-4 z-5 font-mono text-[10px] font-bold text-white uppercase bg-nat-text/80 backdrop-blur-md px-3 py-1 rounded-md tracking-wider flex items-center gap-1">
                    <MapPin size={10} className="text-nat-earth shrink-0" />
                    {tour.location}
                  </div>
                  <div className="absolute top-4 right-4 z-5 font-sans text-[10px] font-bold text-nat-sage bg-nat-sage/10 border border-nat-sage/20 py-1 px-2.5 rounded-full tracking-normal shadow">
                    {tour.duration}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1d231e]/30 to-transparent pointer-events-none" />
                </div>

                {/* Content Details */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Stars and feedback */}
                    <div className="flex items-center gap-1.5 mb-3.5">
                      <div className="flex text-nat-earth">
                        <Star size={13} className="fill-current" />
                      </div>
                      <span className="text-xs font-extrabold text-nat-text font-mono">{tour.rating}</span>
                      <span className="text-[11px] text-nat-text/60">({tour.reviewsCount} đánh giá thật)</span>
                    </div>

                    <h3 className="font-serif text-lg md:text-xl font-bold text-nat-text group-hover:text-nat-sage transition-colors duration-250 leading-snug">
                      {tour.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-nat-text/75 mt-3 leading-relaxed">
                      {tour.description}
                    </p>

                    {/* Highlights pill tags */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {tour.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="inline-block text-[10px] font-semibold text-nat-text/80 bg-nat-sand/35 hover:bg-nat-sand/60 px-2.5 py-1 rounded-md leading-none"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Operational Footer of the card */}
                  <div className="mt-8 pt-5 border-t border-nat-sand/50 flex items-center justify-between gap-4">
                    <div>
                      {tour.originalPrice && (
                        <span className="block text-[11px] text-nat-text/50 line-through">
                          {tour.originalPrice}
                        </span>
                      )}
                      <span className="block text-base md:text-lg font-extrabold text-nat-sage">
                        {tour.price} <span className="text-[10px] font-normal text-nat-text/50">/ khách</span>
                      </span>
                    </div>

                    <button 
                      type="button"
                      onClick={() => handleChooseTour(tour.id)}
                      className="px-4 py-2.5 bg-nat-text hover:bg-nat-sage active:scale-95 text-white text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all duration-200 cursor-pointer text-center"
                      id={`choose-tour-btn-${tour.id}`}
                    >
                      Tìm hiểu thêm →
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Khung Lịch Trình (Timeline Section - 3 Days) */}
      <section 
        id="timeline" 
        className="py-20 md:py-28 bg-[#FAF9F5] border-y border-nat-sand/65 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 bg-nat-sage/10 text-nat-sage text-xs font-semibold uppercase tracking-wider rounded-md">
              Nhịp Điệu Chữa Lành
            </span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-4xl font-bold text-nat-text tracking-tight whitespace-nowrap">
              Dòng Chảy Trị Liệu Trọn Vẹn 3 Ngày
            </h2>
            <div className="w-48 h-1 bg-nat-earth mx-auto rounded-full" />
            <p className="text-nat-text/75 text-sm leading-relaxed">
              Giải tỏa căng thẳng tinh vi qua các múi giờ được thiết kế kỹ lượng kết hợp thiền cát ấm Mũi Né và làn hơi thở đại dương Phú Quý sảng khoái.
            </p>
          </div>

          {/* Interactive Timeline Component */}
          <TimelineSection />

        </div>
      </section>

      {/* 5. Khung Trải Nghiệm Thực Tế (Gallery Media Masonry) */}
      <section 
        id="experience" 
        className="py-20 md:py-28 bg-nat-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 bg-nat-sage/10 text-nat-sage text-xs font-semibold uppercase tracking-wider rounded-md">
              Thước phim vỗ về
            </span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-4xl font-bold text-nat-text tracking-tight whitespace-nowrap">
              Thực Tế Từ Những Bước Chân Tĩnh Lặng
            </h2>
            <div className="w-48 h-1 bg-nat-earth mx-auto rounded-full" />
            <p className="text-nat-text/75 text-sm leading-relaxed">
              Cát biển lộng gió, dốc hoàng hôn đỏ tràn ngập cảm xúc tích cực chân thực 100% được lưu giữ từ góc máy của chính các thượng khách.
            </p>
          </div>

          {/* Experience Section Grid */}
          <ExperienceSection />

        </div>
      </section>

      {/* 6. Khung Đánh Giá (Feedback/Testimonial Row) */}
      <section 
        id="feedback" 
        className="py-20 md:py-28 bg-[#FAF9F5] border-y border-nat-sand/65 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-nat-sage/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-nat-earth/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 bg-nat-sage/10 text-nat-sage text-xs font-semibold uppercase tracking-wider rounded-md">
              Đôi dòng lắng đọng
            </span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-4xl font-bold text-nat-text tracking-tight whitespace-nowrap">
              Cảm Nhận Từ Những Tâm Hồn An Yên
            </h2>
            <div className="w-48 h-1 bg-nat-earth mx-auto rounded-full" />
            <p className="text-nat-text/75 text-sm leading-relaxed">
              Sự phục hồi thể chất tốt lành gieo từ chuyến dạo chơi là món quà trọn vẹn mà đội ngũ Phan Thiết Healing phụng sự gởi tặng.
            </p>
          </div>

          {/* Testimonial Rows */}
          <FeedbackSection />

        </div>
      </section>

      {/* 7. Khung Ẩm Thực (Food Tour Section - 6 authentic dishes grid) */}
      <section 
        id="food" 
        className="py-20 md:py-28 bg-nat-bg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 bg-nat-sage/10 text-nat-sage text-xs font-semibold uppercase tracking-wider rounded-md">
              Bản đồ hương vị địa phương
            </span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-4xl font-bold text-nat-text tracking-tight whitespace-nowrap">
              Hành Trình Đánh Thức Vị Giác (Food Tour)
            </h2>
            <div className="w-48 h-1 bg-nat-earth mx-auto rounded-full" />
            <p className="text-nat-text/75 text-sm leading-relaxed">
              Mỗi món ăn là một mảng di sản văn hoá quý giá. Nhấm nháp hương vị cổ xưa cùng hướng dẫn viên thông thái để thấu suốt tư duy ẩm thực vùng miền.
            </p>
          </div>

          {/* Grid Layout 3x2 of Culinary items */}
          <FoodTourSection />

        </div>
      </section>

      {/* 8. Câu Hỏi Thường Gặp (FAQ Section Accordions) */}
      <section 
        id="faq" 
        className="py-20 md:py-28 bg-[#FAF9F5] border-y border-nat-sand/65 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3.5 py-1 bg-nat-sage/10 text-nat-sage text-xs font-semibold uppercase tracking-wider rounded-md">
              Giải đáp thấu đáo
            </span>
            <h2 className="font-serif text-xl sm:text-2xl md:text-4xl font-bold text-nat-text tracking-tight whitespace-nowrap">
              Những Câu Hỏi Thường Gặp Nhất
            </h2>
            <div className="w-48 h-1 bg-nat-earth mx-auto rounded-full" />
            <p className="text-nat-text/75 text-sm leading-relaxed">
              Mọi thắc mắc và an tâm về lộ trình được tập hợp tại đây để giúp bạn cấu trúc hành trình sắp tới một cách minh bạch dễ dàng nhất.
            </p>
          </div>

          {/* Accordion List Component */}
          <FAQSection />

        </div>
      </section>

      {/* 9. Form Đặt Tour (Booking Section - Streamlined form + confirmation) */}
      <section 
        id="booking" 
        className="py-20 md:py-28 bg-nat-bg"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Booking component containing main responsive form */}
          <BookingForm initialTourId={selectedTourId} />

        </div>
      </section>

      {/* 10. Chân Trang (Footer - 4 informative columns) */}
      <footer 
        id="footer-main"
        className="bg-[#13222E] text-nat-sand/90 pt-16 pb-8 border-t border-nat-sage/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand recap/Logo */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo 
              size={54} 
              showText={true} 
              className="text-white"
            />
            <p className="text-xs text-nat-sand/75 leading-relaxed font-normal">
              Đơn vị tiên phong may đo các dòng tour nghỉ dưỡng chữa lành trọn gói đặc biệt, tích hợp trị liệu rung động chuông xoay Tây Tạng và yoga biển sâu tại dải duyên hải Bình Thuận.
            </p>
            <div className="flex items-center gap-3 text-nat-sand/65">
              <span className="text-[11px] block uppercase font-bold tracking-widest text-[#E5E2D9]">Kết nối:</span>
              <a href="#" className="hover:text-nat-earth transition-colors"><Map size={14} /></a>
              <a href="#" className="hover:text-nat-earth transition-colors"><Gift size={14} /></a>
              <a href="#" className="hover:text-nat-earth transition-colors"><Award size={14} /></a>
            </div>
          </div>

          {/* Column 2: Quick navigation links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
              Liên kết nhanh
            </h4>
            <ul className="space-y-2 text-xs text-nat-sand/80">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={item.href} 
                    onClick={(e) => handleScrollTo(e, item.id)}
                    className="hover:text-nat-earth transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 bg-nat-sage rounded-full group-hover:bg-nat-earth transition-colors" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
              Trụ sở liên hệ
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-nat-sand/80">
              <p>
                <span className="block font-bold text-white mb-0.5">Văn phòng chính:</span>
                Tầng 24, Tòa tháp BitexcoFinancial, Quận 1, Tp. Hồ Chí Minh
              </p>
              <p>
                <span className="block font-bold text-white mb-0.5">Chi nhánh miền Bắc:</span>
                Số 18, Lý Thường Kiệt, Hoàn Kiếm, Tp. Hà Nội
              </p>
            </div>
          </div>

          {/* Column 4: Hotline & Emails */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-extrabold text-white tracking-widest">
              Hỗ trợ khẩn cấp
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="p-3 bg-nat-text/20 border border-nat-sand/10 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-nat-earth/10 text-nat-earth flex items-center justify-center p-1 font-bold shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-[10px] text-nat-sand/65 uppercase font-semibold">Hotlines hoạt động 24/7</p>
                  <p className="text-sm font-bold text-white tracking-wide mt-0.5">1900 1122</p>
                </div>
              </div>
              <div className="space-y-1 text-nat-sand/85">
                <p><span className="font-semibold text-[#E5E2D9]">Email tư vấn:</span> booking@phanthiethealing.com</p>
                <p><span className="font-semibold text-[#E5E2D9]">Hợp tác đại lý:</span> partners@phanthiethealing.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright notice at bottom */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-nat-sand/60 font-white pb-2">
          <p>© 2026 PHAN THIET HEALING CO., LTD. Bảo lưu tất cả chứng nhận bản quyền thương hiệu hành trình trải nghiệm.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-nat-earth transition-colors">Điều khoản dịch vụ</a>
            <span className="text-nat-sand/30">|</span>
            <a href="#" className="hover:text-nat-earth transition-colors">Chính sách bảo mật</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
