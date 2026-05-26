export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  rating: number;
  reviewsCount: number;
  price: string;
  originalPrice?: string;
  image: string;
  location: string;
  tags: string[];
  description: string;
}

export interface TimelineActivity {
  time: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamic associate Lucide icons
}

export interface TimelineDay {
  dayNum: number;
  dayTitle: string;
  daySubtitle: string;
  activities: TimelineActivity[];
}

export interface ExperienceMedia {
  id: string;
  type: 'image' | 'video';
  url: string; // Source URL or embed URL
  thumbnailUrl: string;
  title: string;
  author: string;
  aspectClass?: string; // For masonry layouts
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  isVerified: boolean;
  content: string;
  tourName: string;
  date: string;
}

export interface FoodItem {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingSubmission {
  fullName: string;
  phone: string;
  email: string;
  tourId: string;
  departureDate: string;
  guestsCount: number;
  notes?: string;
}
