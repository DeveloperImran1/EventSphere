// const eventsData = [
//     {
//         "id": 1,
//         "photo": "https://theinternetofthings.report/Images/EventImages/6d99b196-f9f7-4ba1-9999-a2d80a3bebc7_iot-tech-expo-europe.jpg",
//         "title": "IOT Tech Expo 2024",
//         "dateTime": "2024-10-15T10:00:00",
//         "companyName": "XYZ Innovations",
//         "price": 50,
//        "location": {
//             "country":  "USA",
//                 "city": "New York",
//                 "venue": "Downtown Convention Center"
            
//         },
//         "category": "Technology",
//         "type": "onsite",
//         "organizer": {
//             "name": "John Doe",
//             "followers": "20.3",
//             "bio": "CEO of XYZ Innovations, expert in IoT solutions easy way.",
//             "photo": "https://www.tcaa.co/wp-content/uploads/2023/09/motivational-speakers-in-usa.png"
//         },
//         "description": "The IOT Tech Expo 2024 is a comprehensive event showcasing groundbreaking advancements in IoT technology. The expo will cover key sessions, live demonstrations, and the latest innovations in the field. Don't miss our keynote speaker, John Doe, who will present cutting-edge insights on the future of IoT.",
//         "locationMap": "https://c1.10times.com/map/venue/21645.png",
//         "gallery": [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsOd3VFXjHHkslwN3ksKwTGaSaS3ojs0MnQ&s",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJh_Dmq_31DM664FRz4FjzhKnibEaoLVz4Q&s",

//         ],
//         "sponsor": {
//             "name": "TechCorp",
//             "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHpKR-St3jrJVdI1BXS19aFiBwjEowCwf5SA&s"
//         },
//           "reviews": [
//             { "name": "Karim Jannat", "review": "Great event for tech enthusiasts!" },
//             { "name": "Abid Hossen", "review": "Very insightful sessions on IoT trends!" }
//           ],
//         "contactInfo": {
//             "email": "info@xyzinnovations.com",
//             "phone": "123-456-7890"
//         },
//         "tags": ["Tech Expo", "Innovation", "Conference"]
//     },
//     {
//         "id": 2,
//         "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7YxGKZzeOvM21OHoPWHFC9XR7q-NUv5wBQ&s",
//         "title": "Music Fest 2024",
//         "dateTime": "2024-09-26T16:00:00",
//         "companyName": "Live Events Inc.",
//         "price": 75,
//         "location": {
//             "country": "Bangladesh",
//                 "city": "Dhaka",
//                 "venue": "Bangabandhu International Conference Centre"
            
//         },
//         "category": "Music",
//         "type": "onsite",
//         "organizer": {
//             "name": "Jane Smith",
//             "followers": "15",
//             "bio": "Founder of Live Events Inc., with 20 years of experience in event management.",
//             "photo": "https://as2.ftcdn.net/v2/jpg/04/70/59/93/1000_F_470599366_jGnuTnlqtSBZ39Ie2mZ8ahwKL8n65ymk.jpg"
//         },
//         "description": "An open-air concert featuring renowned artists. Jane Smith will discuss how music impacts culture during the evening session.",
//         "locationMap": "https://i.pinimg.com/564x/b9/04/69/b90469dd3dec82a2b1e1f6ed1686e0a3.jpg",
//         "gallery": [
//             "https://www.taazascoop.com/wp-content/uploads/2024/08/High-On-Music-Festival.jpg",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAP_7gf6HDhkhGFwCCdPPjxbYonUmf0pjT-TDJdiZc2MUFvIJtZfqJXriRwOCJlos6Hb4&usqp=CAU"
//         ],
//         "sponsor": {
//             "name": "MusicX",
//             "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Music_logo.png"
//         },
//     "reviews": [
//       { "name": "Alex Johnson", "review": "Incredible insights on the future of AI!" },
//       { "name": "Mia Patel", "review": "Great networking opportunities." }
//     ],
//         "contactInfo": {
//             "email": "contact@liveevents.com",
//             "phone": "987-654-3210"
//         },
//         "tags": ["Music", "Live Concert", "Culture",]
//     },
//     {
//         "id": 3,
//         "photo": "https://i.ytimg.com/vi/DNmhD8Scbj4/maxresdefault.jpg",
//         "title": "Startup Summit 2024",
//         "dateTime": "2024-0910-01T09:00:00",
//         "companyName": "Entrepreneur Hub",
//         "price": 0,
//         "location": {
//             "country": "Canada",
//                 "city": "Toronto",
//                 "venue": "Metro Convention Centre"
            
//         },
//         "category": "Business",
//         "type": "online",
//         "organizer": {
//             "name": "Michael Lee",
//             "followers": "10.4",
//             "bio": "Founder of Entrepreneur Hub, known for helping startups scale.",
//             "photo": "https://t3.ftcdn.net/jpg/04/69/68/08/360_F_469680894_CwL075zQ3XutShPoaAt7n1VbaRosNoqM.jpg"
//         },
//         "description": "Startup Summit 2024 brings together the top minds in entrepreneurship to discuss the future of startups. Hear from Michael Lee, a renowned startup advisor, as he shares his journey and insights.",
//         "locationMap": "https://www.newofficeamerica.com/images/map-thumbs/serviced-400-montgomery-st-san-francisco-map-thumb_250_250_s_c1_center.png",
//         "gallery": [
//             "https://ecdn.dhakatribune.net/contents/cache/images/800x450x1/uploads/media/2024/07/14/Bangladesh-Startup-Summit-2024-officially-launches-8b39b2e0347f860279c5a1905f4aeff0.JPG?jadewits_media_id=24501",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQiXqng-Ls_QAAwfzcjc7HjH3XlqDac481PwZm6KGlucceSzD7HaZfQxk7DSDnEANoPwk&usqp=CAU"
//         ],
//         "sponsor": {
//             "name": "StartupX",
//             "logo": "https://img.freepik.com/premium-vector/startup-logo-business-project-business-concept-identity-symbol_136321-649.jpg"
//         },
//           "reviews": [
//             { "name": "Sam Wilson", "review": "The best blockchain event I've attended!" },
//             { "name": "Lara Croft", "review": "Very informative and engaging." }
//           ],
//         "contactInfo": {
//             "email": "info@entrepreneurhub.com",
//             "phone": "555-678-1234"
//         },
//         "tags": ["Startup", "Networking", "Business"]
//     },
//     {
//         "id": 4,
//         "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mJXJq0z8VF7ys0Wq6JJdVqXYLTHo4gke3w&s",
//         "title": "Art & Culture Expo 2024",
//         "dateTime": "2024-10-10T11:00:00",
//         "companyName": "Creative Minds Co.",
//         "price": 30,
//         "location": {
//             "country": "India",
//                 "city": "Bangalore",
//                 "venue": "Bangalore International Exhibition Centre"
            
//         },
//         "category": "Art & Culture",
//         "type": "onsite",
//         "organizer": {
//             "name": "Emily Clark",
//             "followers": "5.1",
//             "bio": "Curator at Creative Minds Co., specializing in contemporary art.",
//             "photo": "https://img.freepik.com/premium-photo/female-motivational-speaker-stage-talking-about-how-success_146508-7260.jpg",
//         },
//         "description": "Experience a showcase of the finest contemporary art at the Art & Culture Expo 2024. Emily Clark will present on modern art trends and their impact on society.",
//         "locationMap": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBZdKTfFbdi_7QibA8pqS3Q0AkwQSyOHTYg&s",
//         "gallery": [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBRvc10g8YH_uuZ7beZCe24wHx9kqj2VqGA&s",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtHmKLXLrFDhbGr87EOXv7ezSLg1eaX--hHIBB2EPf4cVwymWfQE11o_WE8vCLX_OMiRg&usqp=CAU"
//         ],
//         "sponsor": {
//             "name": "Artisans",
//             "logo": "https://i.pinimg.com/736x/49/e6/5a/49e65a68bf5dbe61cbeaff7a5e108633.jpg"
//         },
//     "reviews": [
//       { "name": "Sophia Lee", "review": "Great platform for startups to connect with investors!" },
//       { "name": "Oliver King", "review": "Very inspiring and well-organized." }
//     ],
//         "contactInfo": {
//             "email": "support@creativeminds.com",
//             "phone": "777-888-9999"
//         },
//         "tags": ["Art", "Culture", "Creative"]
//     },
//     {
//         "id": 1,
//         "photo": "https://theinternetofthings.report/Images/EventImages/6d99b196-f9f7-4ba1-9999-a2d80a3bebc7_iot-tech-expo-europe.jpg",
//         "title": "IOT Tech Expo 2024",
//         "dateTime": "2024-10-15T10:00:00",
//         "companyName": "XYZ Innovations",
//         "price": 50,
//        "location": {
//             "country":  "USA",
//                 "city": "New York",
//                 "venue": "Downtown Convention Center"
            
//         },
//         "category": "Technology",
//         "type": "onsite",
//         "organizer": {
//             "name": "John Doe",
//             "followers": "20.3",
//             "bio": "CEO of XYZ Innovations, expert in IoT solutions easy way.",
//             "photo": "https://www.tcaa.co/wp-content/uploads/2023/09/motivational-speakers-in-usa.png"
//         },
//         "description": "The IOT Tech Expo 2024 is a comprehensive event showcasing groundbreaking advancements in IoT technology. The expo will cover key sessions, live demonstrations, and the latest innovations in the field. Don't miss our keynote speaker, John Doe, who will present cutting-edge insights on the future of IoT.",
//         "locationMap": "https://c1.10times.com/map/venue/21645.png",
//         "gallery": [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsOd3VFXjHHkslwN3ksKwTGaSaS3ojs0MnQ&s",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoJh_Dmq_31DM664FRz4FjzhKnibEaoLVz4Q&s",

//         ],
//         "sponsor": {
//             "name": "TechCorp",
//             "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHpKR-St3jrJVdI1BXS19aFiBwjEowCwf5SA&s"
//         },
//           "reviews": [
//             { "name": "Karim Jannat", "review": "Great event for tech enthusiasts!" },
//             { "name": "Abid Hossen", "review": "Very insightful sessions on IoT trends!" }
//           ],
//         "contactInfo": {
//             "email": "info@xyzinnovations.com",
//             "phone": "123-456-7890"
//         },
//         "tags": ["Tech Expo", "Innovation", "Conference"]
//     },
//     {
//         "id": 2,
//         "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7YxGKZzeOvM21OHoPWHFC9XR7q-NUv5wBQ&s",
//         "title": "Music Fest 2024",
//         "dateTime": "2024-09-26T16:00:00",
//         "companyName": "Live Events Inc.",
//         "price": 75,
//         "location": {
//             "country": "Bangladesh",
//                 "city": "Dhaka",
//                 "venue": "Bangabandhu International Conference Centre"
            
//         },
//         "category": "Music",
//         "type": "onsite",
//         "organizer": {
//             "name": "Jane Smith",
//             "followers": "15",
//             "bio": "Founder of Live Events Inc., with 20 years of experience in event management.",
//             "photo": "https://as2.ftcdn.net/v2/jpg/04/70/59/93/1000_F_470599366_jGnuTnlqtSBZ39Ie2mZ8ahwKL8n65ymk.jpg"
//         },
//         "description": "An open-air concert featuring renowned artists. Jane Smith will discuss how music impacts culture during the evening session.",
//         "locationMap": "https://i.pinimg.com/564x/b9/04/69/b90469dd3dec82a2b1e1f6ed1686e0a3.jpg",
//         "gallery": [
//             "https://www.taazascoop.com/wp-content/uploads/2024/08/High-On-Music-Festival.jpg",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAP_7gf6HDhkhGFwCCdPPjxbYonUmf0pjT-TDJdiZc2MUFvIJtZfqJXriRwOCJlos6Hb4&usqp=CAU"
//         ],
//         "sponsor": {
//             "name": "MusicX",
//             "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Music_logo.png"
//         },
//     "reviews": [
//       { "name": "Alex Johnson", "review": "Incredible insights on the future of AI!" },
//       { "name": "Mia Patel", "review": "Great networking opportunities." }
//     ],
//         "contactInfo": {
//             "email": "contact@liveevents.com",
//             "phone": "987-654-3210"
//         },
//         "tags": ["Music", "Live Concert", "Culture",]
//     },
//     {
//         "id": 3,
//         "photo": "https://i.ytimg.com/vi/DNmhD8Scbj4/maxresdefault.jpg",
//         "title": "Startup Summit 2024",
//         "dateTime": "2024-0910-01T09:00:00",
//         "companyName": "Entrepreneur Hub",
//         "price": 0,
//         "location": {
//             "country": "Canada",
//                 "city": "Toronto",
//                 "venue": "Metro Convention Centre"
            
//         },
//         "category": "Business",
//         "type": "online",
//         "organizer": {
//             "name": "Michael Lee",
//             "followers": "10.4",
//             "bio": "Founder of Entrepreneur Hub, known for helping startups scale.",
//             "photo": "https://t3.ftcdn.net/jpg/04/69/68/08/360_F_469680894_CwL075zQ3XutShPoaAt7n1VbaRosNoqM.jpg"
//         },
//         "description": "Startup Summit 2024 brings together the top minds in entrepreneurship to discuss the future of startups. Hear from Michael Lee, a renowned startup advisor, as he shares his journey and insights.",
//         "locationMap": "https://www.newofficeamerica.com/images/map-thumbs/serviced-400-montgomery-st-san-francisco-map-thumb_250_250_s_c1_center.png",
//         "gallery": [
//             "https://ecdn.dhakatribune.net/contents/cache/images/800x450x1/uploads/media/2024/07/14/Bangladesh-Startup-Summit-2024-officially-launches-8b39b2e0347f860279c5a1905f4aeff0.JPG?jadewits_media_id=24501",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQiXqng-Ls_QAAwfzcjc7HjH3XlqDac481PwZm6KGlucceSzD7HaZfQxk7DSDnEANoPwk&usqp=CAU"
//         ],
//         "sponsor": {
//             "name": "StartupX",
//             "logo": "https://img.freepik.com/premium-vector/startup-logo-business-project-business-concept-identity-symbol_136321-649.jpg"
//         },
//           "reviews": [
//             { "name": "Sam Wilson", "review": "The best blockchain event I've attended!" },
//             { "name": "Lara Croft", "review": "Very informative and engaging." }
//           ],
//         "contactInfo": {
//             "email": "info@entrepreneurhub.com",
//             "phone": "555-678-1234"
//         },
//         "tags": ["Startup", "Networking", "Business"]
//     },
//     {
//         "id": 4,
//         "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mJXJq0z8VF7ys0Wq6JJdVqXYLTHo4gke3w&s",
//         "title": "Art & Culture Expo 2024",
//         "dateTime": "2024-10-10T11:00:00",
//         "companyName": "Creative Minds Co.",
//         "price": 30,
//         "location": {
//             "country": "India",
//                 "city": "Bangalore",
//                 "venue": "Bangalore International Exhibition Centre"
            
//         },
//         "category": "Art & Culture",
//         "type": "onsite",
//         "organizer": {
//             "name": "Emily Clark",
//             "followers": "5.1",
//             "bio": "Curator at Creative Minds Co., specializing in contemporary art.",
//             "photo": "https://img.freepik.com/premium-photo/female-motivational-speaker-stage-talking-about-how-success_146508-7260.jpg",
//         },
//         "description": "Experience a showcase of the finest contemporary art at the Art & Culture Expo 2024. Emily Clark will present on modern art trends and their impact on society.",
//         "locationMap": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBZdKTfFbdi_7QibA8pqS3Q0AkwQSyOHTYg&s",
//         "gallery": [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBRvc10g8YH_uuZ7beZCe24wHx9kqj2VqGA&s",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtHmKLXLrFDhbGr87EOXv7ezSLg1eaX--hHIBB2EPf4cVwymWfQE11o_WE8vCLX_OMiRg&usqp=CAU"
//         ],
//         "sponsor": {
//             "name": "Artisans",
//             "logo": "https://i.pinimg.com/736x/49/e6/5a/49e65a68bf5dbe61cbeaff7a5e108633.jpg"
//         },
//     "reviews": [
//       { "name": "Sophia Lee", "review": "Great platform for startups to connect with investors!" },
//       { "name": "Oliver King", "review": "Very inspiring and well-organized." }
//     ],
//         "contactInfo": {
//             "email": "support@creativeminds.com",
//             "phone": "777-888-9999"
//         },
//         "tags": ["Art", "Culture", "Creative"]
//     }
// ]


// // export default eventsData;

// // api/eventsApi.js
// import axios from 'axios';

const fetchEventsData = async () => {
  try {
    const response = await axios.get(`process.env.SERVER_SIDE_BASE_URL/events`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};

// export default fetchEventsData