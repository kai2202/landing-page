import { NavItem, TourPackage, TimelineDay, ExperienceMedia, Testimonial, FoodItem, FAQItem } from './types';

export const navigationItems: NavItem[] = [
  { id: 'intro', label: 'Giới thiệu', href: '#intro' },
  { id: 'journey', label: 'Hành trình', href: '#journey' },
  { id: 'timeline', label: 'Lịch trình chữa lành', href: '#timeline' },
  { id: 'experience', label: 'Trải nghiệm du khách', href: '#experience' },
  { id: 'food', label: 'Food Tour', href: '#food' },
  { id: 'faq', label: 'Giải đáp', href: '#faq' },
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'phan-thiet-healing',
    title: 'Phan Thiết Healing - Bản Giao Hưởng Của Sóng & Thiền Cát',
    duration: '3 Ngày 2 Đêm',
    rating: 4.92,
    reviewsCount: 164,
    price: '3,450,000 đ',
    originalPrice: '4,200,000 đ',
    location: 'Mũi Né, Phan Thiết',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
    tags: ['Thiền chuông xoay', 'Resort sát biển', 'Trị liệu thân tâm'],
    description: 'Hành trình tĩnh lặng, lắng nghe tiếng sóng Mũi Né vỗ về nguyên khí. Trải nghiệm tập yoga đón ánh bình minh bên bờ biển, liệu trình phục hồi cột sống và trị liệu tiếng chuông xoay trên đồi cát trắng.'
  },
  {
    id: 'phu-quy-original',
    title: 'Phú Quý Original - Tiếng Gọi Đại Dương Hoang Sơ Chữa Lành',
    duration: '3 Ngày 2 Đêm',
    rating: 4.96,
    reviewsCount: 128,
    price: '4,850,000 đ',
    originalPrice: '5,600,000 đ',
    location: 'Đảo Phú Quý, Bình Thuận',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&auto=format&fit=crop&q=80',
    tags: ['Đảo ngọc hoang sơ', 'Chèo SUP đón chiều', 'Cắm trại bờ đá'],
    description: 'Trốn xa bụi trần khói xe tại hòn đảo hoang sơ tuyệt mỹ nhất Việt Nam. Khám phá nét đẹp mộc mạc của Gành Hang, Hòn Đen, dạo bước Dốc Phượt thảnh thơi và lặn ngắm rạn san hô xanh ngọc bích.'
  },
  {
    id: 'phan-thiet-phu-quy-combo',
    title: 'Hành Trình Song Hành - Phan Thiết Phú Quý Hoà Quyện',
    duration: '4 Ngày 3 Đêm',
    rating: 4.98,
    reviewsCount: 94,
    price: '7,250,005 đ',
    originalPrice: '8,500,000 đ',
    location: 'Mũi Né & Đảo Phú Quý',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop&q=80',
    tags: ['Combo trọn gói', 'Tàu cao tốc 5★', 'Thực đơn xanh'],
    description: 'Bản hòa ca hoàn mỹ nhất giữa hai vùng đất tuyệt sắc. Thư thả chiêm bái Đồi Cát Bay Phan Thiết trước khi vượt trùng khơi chạm tay vào hoang dã đảo Phú Quý, hưởng trọn đặc quyền trị liệu spa đá nóng biển sâu.'
  }
];

export const TIMELINE_DATA: TimelineDay[] = [
  {
    dayNum: 1,
    dayTitle: 'Chạm Vào Bình Yên - Phan Thiết Đón Chào',
    daySubtitle: 'Khởi động năng lượng bản thể từ bãi cát biển vàng êm dịu',
    activities: [
      {
        time: '08:30 - 11:30',
        title: 'Đón Khách Tại Resort & Trà Đầm Thảo Mộc',
        description: 'Chuyên viên Phan Thiết Healing chào đón quý khách tại khu nghỉ dưỡng ven biển. Thưởng thức nước dừa xiêm cùng mứt thanh long sấy dẻo đặc sản, lắng nghe triết lý du lịch chữa lành yên tịnh.',
        iconName: 'Compass'
      },
      {
        time: '14:30 - 17:30',
        title: 'Thiền Chuông Xoay Trên Đồi Cát Bay Mũi Né',
        description: 'Vượt lên đỉnh đồi cát lộng gió, đón ráng chiều hoàng hôn buông lãng mạn. Trực tiếp chìm đắm vào thanh âm rung động nguyên bản của Chuông Xoay Tây Tạng giúp rũ bỏ căng thẳng, xoa dịu hệ thần kinh.',
        iconName: 'Footprints'
      }
    ]
  },
  {
    dayNum: 2,
    dayTitle: 'Hải Trình Vượt Biển - Chạm Ngõ Phú Quý Hoang Sơ',
    daySubtitle: 'Tập trung hơi thở giữa đại dương mênh mông phóng khoáng',
    activities: [
      {
        time: '06:00 - 08:30',
        title: 'Hải Trình Tàu Cao Tốc 5 Sao & Đón Gió Biển Khơi',
        description: 'Lên khoang tàu cao tốc khang trang chuyển bánh lướt sóng Thái Bình Dương ra đảo Phú Quý. Cảm nhận bầu không khí mát lành của biển sâu, hít căng lồng ngực nguồn i-ốt tự nhiên vô giá.',
        iconName: 'Sun'
      },
      {
        time: '14:30 - 17:30',
        title: 'Chèo SUP & Lặn Biển Khám Phá Hòn Đen / Bãi Nhỏ',
        description: 'Thả trôi SUP trên mặt nước lặng lờ xanh như pha lê, trực tiếp lặn ngắm vạt san hô hình quạt hoàn toàn nguyên bản dưới làn khơi mát lịm của Đảo Ngọc Phú Quý.',
        iconName: 'Palette'
      }
    ]
  },
  {
    dayNum: 3,
    dayTitle: 'Đón Nắng Dốc Phượt - Thân Tâm An Lành Trở Về',
    daySubtitle: 'Khoảnh khắc dung hoà hoàn hảo năng lượng để quay lại nhịp sống',
    activities: [
      {
        time: '05:30 - 08:00',
        title: 'Yoga Bình Minh Tại Dốc Phượt & Cột Cờ Chủ Quyền',
        description: 'Tập bài thở Pranayama đón luồng ánh sáng mặt trời tinh khôi nhất từ cực Đông tổ quốc, phóng tầm mắt ngắm cảnh biển đá hùng vĩ tuyệt đỉnh của Gành Hang.',
        iconName: 'ShoppingBag'
      },
      {
        time: '11:00 - 13:30',
        title: 'Tiệc Hải Sản Bản Địa & Lên Tàu Cao Tốc Về Đất Liền',
        description: 'Thưởng thức cua Huỳnh Đế trứ danh hấp xả, cá mú đỏ hấp hành bổ dưỡng dồi dào năng lượng. Nhận tinh dầu lá dừa đặc trưng kỷ niệm từ Phan Thiết Healing trước khi xe đưa về lại điểm hẹn.',
        iconName: 'Heart'
      }
    ]
  }
];

export const EXPERIENCE_MEDIA: ExperienceMedia[] = [
  {
    id: 'exp-video-1',
    type: 'image',
    url: '/images/exp/exp-1.jpg',
    thumbnailUrl: '/images/exp/exp-1.jpg',
    title: 'Hải trường sóng biếc rì rào chạm bờ đá Gành Hang Phú Quý',
    author: 'Khánh An',
    aspectClass: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 'exp-img-1',
    type: 'image',
    url: '/images/exp/exp-2.jpg',
    thumbnailUrl: '/images/exp/exp-2.jpg',
    title: 'Du khách thư thả thăng bằng tâm thức qua bài Yoga trên bãi cát Mũi Né',
    author: 'Trọng Nghĩa',
    aspectClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'exp-img-2',
    type: 'image',
    url: '/images/exp/exp-3.jpg',
    thumbnailUrl: '/images/exp/exp-3.jpg',
    title: 'Bãi đá rêu phủ lãng mạn lướt mát chân trần dạo biển của các thượng khách',
    author: 'Linh Đan',
    aspectClass: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 'exp-video-2',
    type: 'image',
    url: '/images/exp/exp-4.jpg',
    thumbnailUrl: '/images/exp/exp-4.jpg',
    title: 'Ghi lại khoảnh khắc chèo thuyền SUP lướt nước ngọc pha lê tại Hòn Đen',
    author: 'Thế Vinh',
    aspectClass: 'md:col-span-2 md:row-span-1'
  },
  {
    id: 'exp-img-3',
    type: 'image',
    url: '/images/exp/exp-5.jpg',
    thumbnailUrl: '/images/exp/exp-5.jpg',
    title: 'Bể sủi khoáng thảo dược xua tan mệt mỏi tại khu Spa sát sóng biển',
    author: 'Mai Phương',
    aspectClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'exp-video-3',
    type: 'image',
    url: '/images/exp/exp-6.jpg',
    thumbnailUrl: '/images/exp/exp-6.jpg',
    title: 'Thước phim hoang dại thơ mộng nơi bờ dốc biển đón nắng chiều nồng nàn',
    author: 'Robert Jenkins',
    aspectClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'exp-img-4',
    type: 'image',
    url: '/images/exp/exp-7.jpg',
    thumbnailUrl: '/images/exp/exp-7.jpg',
    title: 'Đồi Cát Đỏ lộng gió phủ sắc cam rực kỳ bí trong mắt các nhiếp ảnh gia',
    author: 'Hùng Sơn',
    aspectClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'exp-video-4',
    type: 'image',
    url: '/images/exp/exp-8.jpg',
    thumbnailUrl: '/images/exp/exp-8.jpg',
    title: 'Thác mát thanh lành rì rầm chảy uốn sau rặng tre làng chài mộc mạc',
    author: 'Thanh Vân',
    aspectClass: 'md:col-span-1 md:row-span-1'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Nguyễn Thế Hoàng',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
    rating: 5,
    isVerified: true,
    content: 'Đợt rồi cả nhà mình đi tour Phan Thiết của Phan Thiết Healing, quả thực là phong cách nghỉ dưỡng chữa lành tuyệt sắc. Từ khâu thiền chuông xoay trên đồi cát rực rỡ nắng đến các bữa ăn hải sản nhạt nêm nếm mộc mạc, các cháu chăm sóc tận tình vô cùng an tâm!',
    tourName: 'Phan Thiết Healing - Bản Giao Hưởng Của Sóng & Thiền Cát',
    date: '10/05/2026'
  },
  {
    id: 'test-2',
    name: 'Trần Ánh Tuyết',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
    rating: 5,
    isVerified: true,
    content: 'Phú Quý thực sự đẹp không tì vết, hoang dã vô cùng. Hướng dẫn viên của Phan Thiết Healing am hiểu từng mỏm đá gành hang, dắt bọn mình đi đúng khung giờ Dốc Phượt vắng nhất để ghi trọn vẹn album ảnh gia đình đón buổi chiều đỏ ửng lãng mạn cực kì giá trị!',
    tourName: 'Phú Quý Original - Tiếng Gọi Đại Dương Hoang Sơ Chữa Lành',
    date: '22/05/2026'
  },
  {
    id: 'test-3',
    name: 'Robert Jenkins',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&auto=format&fit=crop&q=80',
    rating: 5,
    isVerified: true,
    content: 'The combo package is high quality. Sound bath therapy on the red sand dunes was magnificent, followed by an incredibly smooth express boat ride to Phu Quy Island. Pristine coastal ecosystem preserved with style. Premium local organic seafood is served daily.',
    tourName: 'Hành Trình Song Hành - Phan Thiết Phú Quý Hoà Quyện',
    date: '15/05/2026'
  }
];

export const FOOD_ITEMS: FoodItem[] = [
  {
    id: 'food-lau-tha',
    name: 'Lẩu Thả Phan Thiết Cổ Truyền',
    image: 'https://cdn2.fptshop.com.vn/unsafe/lau_tha_phan_thiet_bia_3053317136.jpg',
    description: 'Bản hòa sắc tuyệt diệu từ cá mai bóp khế, thịt ba chỉ xắt sợi, trứng chiên mỏng, rau thơm bắp chuối bày trên bẹ chuối mộc mạc.',
    price: 'Hương vị biển dã',
    category: 'Món đặc sản'
  },
  {
    id: 'food-cua-huynh-de',
    name: 'Cua Huỳnh Đế Phú Quý Thần Mặt Trời',
    image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzQtE1q_OQwnEsWUkKq-eZTQLSckrx7zBKhucXAbWECDsmKMwk-dJTK9QZ9hdokpYtmQar-BaX2kLugD7G5Bx56ayAbVFOuVaFZzlgmQSOHhbb1twVjmVXfTWxIY3qKbk336dfCimydTfd/s1600/cua+huynh+de+1.jpg',
    description: 'Cua Huỳnh Đế độc bản tiến vua đánh bắt xa khơi, thớ thịt ngọt lịm chắc nịch hấp cùng lá gừng dại chấm muối ớt xanh thơm nồng.',
    price: 'Tinh tú đại dương',
    category: 'Thượng hạng'
  },
  {
    id: 'food-banh-xeo',
    name: 'Bánh Xèo Phan Thiết Đất Cát',
    image: 'https://static.vinwonders.com/production/banh-xeo-phan-thiet-thumb.jpg',
    description: 'Những chiếc bánh xèo khuôn nhỏ giòn tan, ngập tràn tôm biển tươi rói và mực sữa ngọt thịt ăn cùng nước mắm đậu phộng sánh béo.',
    price: 'Mộc mạc chân phương',
    category: 'Món bánh'
  },
  {
    id: 'food-muc-mot-nang',
    name: 'Mực Một Nắng Mũi Né Nướng Than Hồng',
    image: 'http://file.hstatic.net/1000030244/article/muc-mot-nang-lam-gi-ngon-1_b0705300e2f74b4f840974acade983b1.jpg',
    description: 'Mực ống câu đêm xẻ thịt phơi đúng một nắng dòn dẻo ngậm sương, nướng lửa than hoa ngạt thơm thớ thịt ngọt lịm nguyên vị.',
    price: 'Tinh túy Bình Thuận',
    category: 'Món nướng'
  },
  {
    id: 'food-banh-canh',
    name: 'Bánh Canh Chả Cá Thác Lác Phan Thiết',
    image: 'https://buulong.com.vn/wp-content/uploads/2026/04/banh-canh-cha-ca-phan-thiet-f9222e.webp',
    description: 'Sợi bánh mượt mà chan nước dùng ngọt thanh hầm xương cá suốt 12 tiếng, điểm xuyết những lát chả cá thu chiên vàng thơm ngậy.',
    price: 'Thanh mát tâm can',
    category: 'Món nước'
  },
  {
    id: 'food-nuoc-ep-thanh-long',
    name: 'Nước Ép Thanh Long Đỏ Bình Thuận',
    image: 'https://cdn2.fptshop.com.vn/unsafe/nuoc_ep_thanh_long_1_615bdfe213.jpg',
    description: 'Ly sinh tố đỏ tía chiết xuất từ thanh long ruột đỏ chín mọng sương sớm của vùng đất đầy cát gió biển Bình Thuận.',
    price: 'Detox thanh lọc',
    category: 'Thức uống xanh'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Tàu cao tốc từ Phan Thiết ra Phú Quý có dễ say sóng không?',
    answer: 'Phan Thiết Healing sử dụng dòng tàu cao tốc Superdong hoặc Phú Quý Express hai thân thế hệ mới nhất, trang bị giảm rung lắc hiện đại giúp hành trình vượt 56 hải lý êm ái tối đa. Đội ngũ y tế luôn túc trực chuẩn bị sẵn kẹo gừng mật ong và thuốc chống say thảo dược cao cấp cho quý khách mẫn cảm.'
  },
  {
    id: 'faq-2',
    question: 'Mô hình du lịch "Thiền chuông xoay" và "Yoga chữa lành" diễn ra thế như thế nào?',
    answer: 'Đây là các bài tập được cấu trúc trị liệu khoa học hỗ trợ khôi phục năng lượng nhẹ nhàng. Các thiền sư và chuyên gia trị liệu âm thanh sẽ gõ chuông xoay Nepal nguyên bản tạo ra làn sóng tần số rung động sâu lắng trên đồi cát hoặc bãi biển tĩnh lặng. Quý khách hoàn toàn nằm/ngồi thư giãn cảm nhận luồng khí mà không cần bất kì kỹ năng tập luyện nào từ trước!'
  },
  {
    id: 'faq-3',
    question: 'Nếu thời tiết biển động không thể ra Phú Quý thì xử lý ra sao?',
    answer: 'Trong điều kiện cảng vụ Bình Thuận cấm biển do gió lớn, Phan Thiết Healing sẽ chủ động linh hoạt đổi hướng sang lịch trình nghỉ dưỡng cao cấp tại Resort 5 sao Mũi Né kết hợp tắm bùn khoáng nóng, trekking Thác Bà hoang sơ và hoàn phí chênh lệch chặng tàu đảo Phú Quý vô cùng minh bạch rõ ràng cho quý khách.'
  },
  {
    id: 'faq-4',
    question: 'Tôi đi tour một mình có thể tham gia được không?',
    answer: 'Hoàn toàn được! Gần 40% lượng khách của Phan Thiết Healing là những người tìm kiếm khoảng lặng một mình để chiêm nghiệm. Chúng tôi hỗ trợ ghép phòng hoặc bố trí bungalow đơn lập sát biển hướng yên tĩnh tuyệt đối để quý khách hưởng trọn những giây phút kết nối lại với tâm hồn của bản thân.'
  },
  {
    id: 'faq-5',
    question: 'Chế độ ẩm thực hữu cơ thực đơn xanh của tour ra sao?',
    answer: 'Chúng tôi thiết kế các mâm cơm vùng biển vô cùng dinh dưỡng tinh tế, giảm mì chính/muối tối đa để bài độc cơ thể. Toàn bộ hải sản được đánh bắt tự nhiên trong ngày từ làng chài hoang dã kết hợp lượng rau hữu cơ phong phú vùng miền.'
  }
];
