import logo from '../assets/logo.png';
import img0 from '../assets/img0.png'; // Likely Chocolate Cake
import img1 from '../assets/img1.png'; // Likely Honey Cake
import img2 from '../assets/img2.png'; // Likely Honey Cake (Alternate)
import img3 from '../assets/img3.png'; // Likely Tiramisu/Cup
import img4 from '../assets/img4.png'; // Likely Box or Cheesecake? (Using as Strawberry Cheesecake/Box placeholder)

// Note: Mapping images based on order. 
// img0: Chocolate?
// img1: Honey?
// img3: Tiramisu?

export const products = [
    {
        id: 1,
        name: "كيكة العسل",
        price: 115,
        image: img1,
        description: "طبقات هشة من كيكة العسل الروسية"
    },
    {
        id: 2,
        name: "كيكة الشوكولاتة",
        price: 57,
        image: img0,
        description: "غنية بالشوكولاتة الفاخرة"
    },
    {
        id: 3,
        name: "تشيز كيك لوتس",
        price: 70,
        image: logo, // Keep logo if no specific image yet, or use generic
        description: "طعم اللوتس الأصلي مع الكريمة الغنية"
    },
    {
        id: 4,
        name: "تشيز كيك جالكسي",
        price: 70,
        image: logo,
        description: "مذاق شوكولاتة جالكسي الناعم"
    },
    {
        id: 5,
        name: "كيكة الليمون",
        price: 57,
        image: logo, // Placeholder
        description: "نكهة الليمون المنعشة"
    },
    {
        id: 6,
        name: "تراميسو (12 حبة)",
        price: 120,
        image: img3,
        description: "تراميسو فاخر 12 قطعة"
    },
    {
        id: 7,
        name: "بوكس السعادة",
        price: 130,
        image: img4, // Assuming the box image or group image
        description: "تشكيلة مميزة من الحلويات"
    },
    {
        id: 8,
        name: "تشيز كيك فراولة",
        price: 70,
        image: logo, // Placeholder
        description: "تشيز كيك غني بصوص الفراولة"
    }
];
