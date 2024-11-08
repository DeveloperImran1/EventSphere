"use client"
import BooksCard from "./BookCard";

const Books = () => {

    const books = [
        {
            _id: "1",
            category: "Electronics",
            color: "Black",
            description: "High-quality wireless headphones with noise cancellation.",
            image: "https://www.shutterstock.com/image-vector/3d-wireless-headphones-mockup-set-260nw-2130630635.jpg",
            offer: 20,
            price: 79.99,
            title: "Wireless Headphones",
            totalAvailable: 30,
        },
        {
            _id: "2",
            category: "Home Appliances",
            color: "Silver",
            description: "Energy-efficient smart vacuum cleaner.",
            image: "https://img.drz.lazcdn.com/static/bd/p/70de89e7dfae0fdc030ed5c5006f93d2.jpg_720x720q80.jpg",
            offer: 15,
            price: 199.99,
            title: "Smart Vacuum Cleaner",
            totalAvailable: 15,
        },
        {
            _id: "3",
            category: "Fashion",
            color: "Blue",
            description: "Stylish denim jacket for all occasions.",
            image: "https://www.shutterstock.com/image-vector/3d-wireless-headphones-mockup-set-260nw-2130630635.jpg",
            offer: 10,
            price: 49.99,
            title: "Denim Jacket",
            totalAvailable: 25,
        },
        {
            _id: "4",
            category: "Fitness",
            color: "Green",
            description: "Durable yoga mat for all fitness levels.",
            image: "https://img.drz.lazcdn.com/static/bd/p/70de89e7dfae0fdc030ed5c5006f93d2.jpg_720x720q80.jpg",
            offer: 5,
            price: 29.99,
            title: "Yoga Mat",
            totalAvailable: 50,
        },
        {
            _id: "5",
            category: "Books",
            color: "Multi",
            description: "A motivational book for personal growth.",
            image: "https://img.drz.lazcdn.com/static/bd/p/70de89e7dfae0fdc030ed5c5006f93d2.jpg_720x720q80.jpg",
            offer: 25,
            price: 14.99,
            title: "Motivational Book",
            totalAvailable: 100,
        },
    ];
    


    return (
        <div className="mt-[100px] container mx-auto">
 
            <div className="grid sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {
                    books?.map((product, index) => { return <BooksCard key={index} product={product}></BooksCard> })
                }
            </div>
        </div>
    );
};

export default Books;