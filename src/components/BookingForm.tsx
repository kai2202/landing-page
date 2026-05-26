import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Phone, Mail, Calendar, Users, CheckCircle, X, Loader2, ArrowRight } from 'lucide-react';
import { TOUR_PACKAGES } from '../data';
import { BookingSubmission } from '../types';

interface BookingFormProps {
  initialTourId?: string;
}

export function BookingForm({ initialTourId = '' }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingSubmission>({
    fullName: '',
    phone: '',
    email: '',
    tourId: initialTourId || TOUR_PACKAGES[0]?.id || '',
    departureDate: '',
    guestsCount: 2,
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Sync initialTourId when it updates from external interactions
  useEffect(() => {
    if (initialTourId) {
      setFormData((prev) => ({ ...prev, tourId: initialTourId }));
    }
  }, [initialTourId]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập Họ & Tên.';
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = 'Họ tên phải dài ít nhất 3 ký tự.';
    }

    const phoneRegex = /^(0|84)(3|5|7|8|9)[0-9]{8}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập Số điện thoại.';
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Số điện thoại không hợp lệ (Ví dụ: 0987654321).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() && !emailRegex.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ.';
    }

    if (!formData.tourId) {
      newErrors.tourId = 'Vui lòng chọn tour mong muốn.';
    }

    if (!formData.departureDate) {
      newErrors.departureDate = 'Vui lòng chọn ngày khởi hành.';
    } else {
      const selectedDate = new Date(formData.departureDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.departureDate = 'Ngày khởi hành không thể ở quá khứ.';
      }
    }

    if (formData.guestsCount < 1) {
      newErrors.guestsCount = 'Số lượng khách phải ít nhất là 1.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    // Simulate an API call to reserve the tour
    setTimeout(() => {
      setLoading(false);
      setShowSuccessModal(true);
      // Optional: Reset form except tour selection
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        tourId: formData.tourId,
        departureDate: '',
        guestsCount: 2,
        notes: '',
      });
    }, 1500);
  };

  const selectedTourDetails = TOUR_PACKAGES.find((t) => t.id === formData.tourId);

  return (
    <div className="relative" id="booking-container">
      {/* Background decoration elements */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-nat-sage/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-nat-earth/10 rounded-full blur-3xl pointer-events-none" />

      <form 
        onSubmit={handleSubmit}
        className="relative bg-white border border-nat-sand rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl shadow-nat-sage/5"
        id="tour-booking-form"
      >
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-nat-sage/10 text-nat-sage text-xs font-semibold uppercase tracking-widest rounded-full mb-3">
            Đặt Chỗ Cho Hành Trình Mới
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-nat-text tracking-tight">
            Khởi Đầu Trải Nghiệm Mơ Ước
          </h3>
          <p className="text-sm text-nat-text/75 max-w-md mx-auto mt-2">
            Điền thông tin tinh gọn bên dưới. Đội ngũ chuyên gia thiết kế tour sẽ phản hồi trực tiếp tư vấn lộ trình trong 15 phút.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {/* Họ và tên */}
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-xs font-semibold text-nat-text/80 uppercase tracking-wider">
              Khách hàng chính <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-nat-text/50">
                <User size={18} />
              </span>
              <input
                id="fullName"
                type="text"
                placeholder="Nguyễn Văn A"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full py-3.5 pl-11 pr-4 bg-nat-bg border border-nat-sand focus:bg-white focus:ring-2 focus:ring-nat-sage/20 focus:border-nat-sage rounded-xl text-nat-text placeholder-nat-text/45 text-sm transition-all duration-300 outline-none ${
                  errors.fullName ? 'border-red-300 focus:ring-red-100 focus:border-red-500 bg-red-50/10' : ''
                }`}
              />
            </div>
            {errors.fullName && <p className="text-xs text-red-500 font-medium">{errors.fullName}</p>}
          </div>

          {/* Số điện thoại */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-xs font-semibold text-nat-text/80 uppercase tracking-wider">
              Số Điện Thoại / Zalo <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-nat-text/50">
                <Phone size={18} />
              </span>
              <input
                id="phone"
                type="tel"
                placeholder="0912345678"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full py-3.5 pl-11 pr-4 bg-nat-bg border border-nat-sand focus:bg-white focus:ring-2 focus:ring-nat-sage/20 focus:border-nat-sage rounded-xl text-nat-text placeholder-nat-text/45 text-sm transition-all duration-300 outline-none ${
                  errors.phone ? 'border-red-300 focus:ring-red-100 focus:border-red-500 bg-red-50/10' : ''
                }`}
              />
            </div>
            {errors.phone && <p className="text-xs text-red-500 font-medium">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-xs font-semibold text-nat-text/80 uppercase tracking-wider">
              Địa Chỉ Email (Không bắt buộc)
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-nat-text/50">
                <Mail size={18} />
              </span>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full py-3.5 pl-11 pr-4 bg-nat-bg border border-nat-sand focus:bg-white focus:ring-2 focus:ring-nat-sage/20 focus:border-nat-sage rounded-xl text-nat-text placeholder-nat-text/45 text-sm transition-all duration-300 outline-none ${
                  errors.email ? 'border-red-300 focus:ring-red-100 focus:border-red-500 bg-red-50/10' : ''
                }`}
              />
            </div>
            {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email}</p>}
          </div>

          {/* Chọn Tour */}
          <div className="space-y-2">
            <label htmlFor="tourId" className="block text-xs font-semibold text-nat-text/80 uppercase tracking-wider">
              Chọn Hành Trình Trải Nghiệm <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-nat-text/50">
                <Calendar size={18} />
              </span>
              <select
                id="tourId"
                value={formData.tourId}
                onChange={(e) => setFormData({ ...formData, tourId: e.target.value })}
                className={`w-full py-3.5 pl-11 pr-8 bg-nat-bg border border-nat-sand focus:bg-white focus:ring-2 focus:ring-nat-sage/20 focus:border-nat-sage rounded-xl text-nat-text text-sm transition-all duration-300 outline-none appearance-none ${
                  errors.tourId ? 'border-red-300 focus:ring-red-100 focus:border-red-500' : ''
                }`}
              >
                <option value="" disabled>-- Vui lòng chọn một hành trình --</option>
                {TOUR_PACKAGES.map((tour) => (
                  <option key={tour.id} value={tour.id}>
                    {tour.title} ({tour.duration})
                  </option>
                ))}
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-nat-text/60 text-xs">▼</span>
            </div>
            {errors.tourId && <p className="text-xs text-red-500 font-medium">{errors.tourId}</p>}
          </div>

          {/* Ngày khởi hành */}
          <div className="space-y-2">
            <label htmlFor="departureDate" className="block text-xs font-semibold text-nat-text/80 uppercase tracking-wider">
              Ngày Khởi Hành Dự Kiến <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-nat-text/50">
                <Calendar size={18} />
              </span>
              <input
                id="departureDate"
                type="date"
                value={formData.departureDate}
                onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                className={`w-full py-3.5 pl-11 pr-4 bg-nat-bg border border-nat-sand focus:bg-white focus:ring-2 focus:ring-nat-sage/20 focus:border-nat-sage rounded-xl text-nat-text text-sm transition-all duration-300 outline-none ${
                  errors.departureDate ? 'border-red-300 focus:ring-red-100 focus:border-red-500 bg-red-50/10' : ''
                }`}
              />
            </div>
            {errors.departureDate && <p className="text-xs text-red-500 font-medium">{errors.departureDate}</p>}
          </div>

          {/* Số lượng khách */}
          <div className="space-y-2">
            <label htmlFor="guestsCount" className="block text-xs font-semibold text-nat-text/80 uppercase tracking-wider">
              Số Lượng Khách Tham Gia
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-nat-text/50">
                <Users size={18} />
              </span>
              <input
                id="guestsCount"
                type="number"
                min="1"
                max="50"
                placeholder="2"
                value={formData.guestsCount}
                onChange={(e) => setFormData({ ...formData, guestsCount: parseInt(e.target.value) || 1 })}
                className={`w-full py-3.5 pl-11 pr-4 bg-nat-bg border border-nat-sand focus:bg-white focus:ring-2 focus:ring-nat-sage/20 focus:border-nat-sage rounded-xl text-nat-text text-sm transition-all duration-300 outline-none ${
                  errors.guestsCount ? 'border-red-300 focus:ring-red-100 focus:border-red-500 bg-red-50/10' : ''
                }`}
              />
            </div>
            {errors.guestsCount && <p className="text-xs text-red-500 font-medium">{errors.guestsCount}</p>}
          </div>
        </div>

        {/* Lời nhắn / Ghi chú */}
        <div className="space-y-2 mt-5 md:mt-6">
          <label htmlFor="notes" className="block text-xs font-semibold text-nat-text/70 uppercase tracking-wider">
            Yêu Cầu Đặc Biệt Có Thể Có (Ăn kiêng, phòng riêng, may đo lịch trình riêng...)
          </label>
          <textarea
            id="notes"
            rows={3}
            placeholder="Ví dụ: Đoàn mình có 1 em nhỏ cần nôi cũi, mẹ mình dị ứng đậu phộng hoặc muốn thiết kế thêm điểm tham quan..."
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            className="w-full py-3 pl-4 pr-4 bg-nat-bg border border-nat-sand focus:bg-white focus:ring-2 focus:ring-nat-sage/20 focus:border-nat-sage rounded-xl text-nat-text placeholder-nat-text/45 text-sm transition-all duration-300 outline-none resize-none"
          />
        </div>

        {/* Bảng tính toán ước lượng chi phí (Visual Selling Point) */}
        {selectedTourDetails && formData.guestsCount > 0 && (
          <div className="mt-6 p-4 bg-nat-sage/5 rounded-2xl border border-nat-sand/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-nat-sage font-bold">Bảng tính chi phí ước lượng:</span>
              <p className="text-[11px] text-nat-text/60 mt-0.5">Dịch vụ bao gồm rước đón, ăn uống và khách sạn trọn gói.</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-nat-text/70">
                {formData.guestsCount} khách x {selectedTourDetails.price}
              </span>
              <p className="text-lg font-bold text-nat-sage">
                {(parseInt(selectedTourDetails.price.replace(/[^\d]/g, '')) * formData.guestsCount).toLocaleString('vi-VN')} đ
              </p>
            </div>
          </div>
        )}

        {/* Button Gửi */}
        <div className="mt-8 text-center">
          <button
            id="submit-booking-button"
            type="submit"
            disabled={loading}
            className={`w-full sm:w-auto px-10 py-4 font-sans font-semibold tracking-wide text-white bg-nat-sage hover:bg-nat-sage/95 active:scale-[0.98] rounded-xl shadow-lg shadow-nat-sage/20 transition-all duration-300 text-sm inline-flex items-center justify-center gap-2 cursor-pointer ${
              loading ? 'opacity-80 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Đang xử lý đặt chỗ...
              </>
            ) : (
              <>
                Đặt Hành Trình Ngay
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="absolute inset-0 bg-nat-text/60 backdrop-blur-sm"
              id="modal-backdrop"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-md bg-white border border-nat-sand rounded-3xl p-8 text-center shadow-2xl z-10"
              id="success-booking-modal"
            >
              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-5 right-5 text-nat-text/50 hover:text-nat-text hover:bg-nat-sand/20 p-1.5 rounded-full transition-all"
              >
                <X size={18} />
              </button>

              <div className="flex justify-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-nat-sage/10 rounded-full text-nat-sage shadow-inner">
                  <CheckCircle size={36} className="stroke-[2]" />
                </div>
              </div>

              <h4 className="font-serif text-xl font-bold text-nat-text tracking-tight">
                Đặt Tour Thành Công!
              </h4>
              <p className="text-nat-text/80 text-sm mt-3 leading-relaxed">
                Chúng tôi đã tiếp nhận yêu cầu trải nghiệm <span className="font-semibold text-nat-sage">"{selectedTourDetails?.title}"</span> cho đại diện <span className="font-semibold text-nat-text">{formData.fullName || 'quý khách'}</span>.
              </p>

              <div className="my-5 p-4 bg-nat-bg border border-nat-sand/40 rounded-2xl text-left text-xs text-nat-text/80 leading-6 space-y-1">
                <p>🙋‍♂️ <span className="font-semibold text-nat-text">Người đặt:</span> {formData.fullName}</p>
                <p>📞 <span className="font-semibold text-nat-text">Số điện thoại:</span> {formData.phone}</p>
                <p>📅 <span className="font-semibold text-nat-text">Ngày đi:</span> {formData.departureDate}</p>
                <p>👥 <span className="font-semibold text-nat-text">Đoàn gồm:</span> {formData.guestsCount} thành viên</p>
              </div>

              <p className="text-nat-sage text-xs font-semibold bg-nat-sage/10 py-2.5 px-4 rounded-xl border border-nat-sage/15">
                ⚡ Đội ngũ hỗ trợ sẽ liên hệ lại với bạn ngay trong ít phút!
              </p>

              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="mt-6 w-full py-3.5 font-semibold text-white bg-nat-text hover:bg-nat-text/90 active:scale-98 rounded-xl transition-all duration-200 text-sm cursor-pointer"
              >
                Xác Nhận & Đóng
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
