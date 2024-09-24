  const eventsData = [
    {
        "id": 1,
        "photo": "https://theinternetofthings.report/Images/EventImages/6d99b196-f9f7-4ba1-9999-a2d80a3bebc7_iot-tech-expo-europe.jpg",
        "title": "IOT Tech Expo 2024",
        "dateTime": "2024-03-15T10:00:00",
        "companyName": "XYZ Innovations",
        "price": 50,
        "location": "Downtown Convention Center, New York",
        "category": "Technology",
        "organizer": {
            "name": "John Doe",
            "followers": "20.3 k",
            "bio": "CEO of XYZ Innovations, expert in IoT solutions easy way."
        },
        "description": "The IOT Tech Expo 2024 is a comprehensive event showcasing groundbreaking advancements in IoT technology. The expo will cover key sessions, live demonstrations, and the latest innovations in the field. Don't miss our keynote speaker, John Doe, who will present cutting-edge insights on the future of IoT.",
        "locationMap": "https://goo.gl/maps/examplelink",
        "gallery": [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg"
        ],
        "sponsor": {
            "name": "TechCorp",
            "logo": "https://example.com/techcorp-logo.png"
        },
        "faqs": [
            {
                "question": "Is parking available?",
                "answer": "Yes, parking is available at the venue."
            },
            {
                "question": "Are refreshments provided?",
                "answer": "Refreshments will be available for purchase."
            },
            {
                "question": "Can I get a refund?",
                "answer": "Refunds are available up to 7 days before the event."
            }
        ],
        "reviews": [
            "Great event for tech enthusiasts! - Sarah M.",
            "Very insightful sessions on IoT trends!"
        ],
        "contactInfo": {
            "email": "info@xyzinnovations.com",
            "phone": "123-456-7890"
        },
        "tags": [ "Tech Expo", "Innovation", "Conference"]
    },
    {
        "id": 2,
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7YxGKZzeOvM21OHoPWHFC9XR7q-NUv5wBQ&s",
        "title": "Music Fest 2024",
        "dateTime": "2024-04-20T16:00:00",
        "companyName": "Live Events Inc.",
        "price": 75,
        "location": "Central Park, New York",
        "category": "Music",
        "organizer": {
            "name": "Jane Smith",
            "followers": "15 K",
            "bio": "Founder of Live Events Inc., with 20 years of experience in event management."
        },
        "description": "An open-air concert featuring renowned artists. Jane Smith will discuss how music impacts culture during the evening session.",
        "locationMap": "https://goo.gl/maps/examplelink",
        "gallery": [
            "https://example.com/image3.jpg",
            "https://example.com/image4.jpg"
        ],
        "sponsor": {
            "name": "MusicX",
            "logo": "https://example.com/musicx-logo.png"
        },
        "faqs": [
            {
                "question": "Can I bring food?",
                "answer": "Yes, but alcohol is prohibited."
            },
            {
                "question": "Is seating provided?",
                "answer": "No, it's a standing event. Feel free to bring blankets."
            },
            {
                "question": "Can I buy tickets at the event?",
                "answer": "Tickets are only available online."
            }
        ],
        "reviews": [
            "The music was incredible! Can't wait for next year. - Alex W."
        ],
        "contactInfo": {
            "email": "contact@liveevents.com",
            "phone": "987-654-3210"
        },
        "tags": ["Music", "Live Concert",  "Culture", ]
    },
    {
        "id": 3,
        "photo": "https://i.ytimg.com/vi/DNmhD8Scbj4/maxresdefault.jpg",
        "title": "Startup Summit 2024",
        "dateTime": "2024-05-05T09:00:00",
        "companyName": "Entrepreneur Hub",
        "price": 0,
        "location": "Silicon Valley Conference Center, California",
        "category": "Business",
        "organizer": {
            "name": "Michael Lee",
            "followers": "10.4 k",
            "bio": "Founder of Entrepreneur Hub, known for helping startups scale."
        },
        "description": "Startup Summit 2024 brings together the top minds in entrepreneurship to discuss the future of startups. Hear from Michael Lee, a renowned startup advisor, as he shares his journey and insights.",
        "locationMap": "https://goo.gl/maps/examplelink",
        "gallery": [
            "https://example.com/image5.jpg",
            "https://example.com/image6.jpg"
        ],
        "sponsor": {
            "name": "StartupX",
            "logo": "https://example.com/startupx-logo.png"
        },
        "faqs": [
            {
                "question": "Is there a fee to attend?",
                "answer": "The event is free for all attendees."
            },
            {
                "question": "Do I need to register?",
                "answer": "Yes, registration is mandatory."
            },
            {
                "question": "Will there be networking opportunities?",
                "answer": "Yes, there will be a dedicated networking session."
            }
        ],
        "reviews": [
            "A great opportunity to meet investors! - John P."
        ],
        "contactInfo": {
            "email": "info@entrepreneurhub.com",
            "phone": "555-678-1234"
        },
        "tags": ["Startup",  "Networking", "Business"]
    },
    {
        "id": 4,
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mJXJq0z8VF7ys0Wq6JJdVqXYLTHo4gke3w&s",
        "title": "Art & Culture Expo 2024",
        "dateTime": "2024-06-10T11:00:00",
        "companyName": "Creative Minds Co.",
        "price": 30,
        "location": "Art Gallery, San Francisco",
        "category": "Art & Culture",
        "organizer": {
            "name": "Emily Clark",
            "followers": "5.1 k",
            "bio": "Curator at Creative Minds Co., specializing in contemporary art."
        },
        "description": "Experience a showcase of the finest contemporary art at the Art & Culture Expo 2024. Emily Clark will present on modern art trends and their impact on society.",
        "locationMap": "https://goo.gl/maps/examplelink",
        "gallery": [
            "https://example.com/image7.jpg",
            "https://example.com/image8.jpg"
        ],
        "sponsor": {
            "name": "Artisans",
            "logo": "https://example.com/artisans-logo.png"
        },
        "faqs": [
            {
                "question": "Are tickets available at the door?",
                "answer": "Yes, but availability is limited."
            },
            {
                "question": "Can I bring my camera?",
                "answer": "Yes, but flash photography is not allowed."
            },
            {
                "question": "Is there a dress code?",
                "answer": "Smart casual attire is recommended."
            }
        ],
        "reviews": [
            "A must-visit for art lovers! - Megan R."
        ],
        "contactInfo": {
            "email": "support@creativeminds.com",
            "phone": "777-888-9999"
        },
        "tags": ["Art", "Culture", "Creative"]
    }
]


export default eventsData;