import logo from '../assets/logo.png';
import honeyCakeImg from '../assets/كيكه العسل.png';
import chocoCakeImg from '../assets/كيكه الشوكليت.png';
import lotusImg from '../assets/تشيزكيك اللوتس.png';
import galaxyImg from '../assets/تشيزكيك شوكولاته.png'; // Assuming this is Galaxy
import lemonCakeImg from '../assets/كيكه ليمون.png';
import tiramisuImg from '../assets/تراميسو.png';
import boxImg from '../assets/بوكس السعاده.png';
import strawberryImg from '../assets/تشيزكيك فراوله.png';

export const products = [
    {
        id: 1,
        name: "كيكة العسل",
        price: 115,
        image: honeyCakeImg,
        description: "طبقات هشة من كيكة العسل الروسية"
    },
    {
        id: 2,
        name: "كيكة الشوكولاتة",
        price: 57,
        image: chocoCakeImg,
        description: "غنية بالشوكولاتة الفاخرة"
    },
    {
        id: 3,
        name: "تشيز كيك لوتس",
        price: 70,
        image: lotusImg,
        description: "طعم اللوتس الأصلي مع الكريمة الغنية"
    },
    {
        id: 4,
        name: "تشيز كيك جالكسي",
        price: 70,
        image: galaxyImg,
        description: "مذاق شوكولاتة جالكسي الناعم"
    },
    {
        id: 5,
        name: "كيكة الليمون",
        price: 57,
        image: lemonCakeImg,
        description: "نكهة الليمون المنعشة"
    },
    {
        id: 6,
        name: "تراميسو (12 حبة)",
        price: 120,
        image: tiramisuImg,
        description: "تراميسو فاخر 12 قطعة"
    },
    {
        id: 7,
        name: "بوكس السعادة",
        price: 130,
        image: boxImg,
        description: "تشكيلة مميزة من الحلويات"
    },
    {
        id: 8,
        name: "تشيز كيك فراولة",
        price: 70,
        image: strawberryImg,
        description: "تشيز كيك غني بصوص الفراولة"
    }
];
