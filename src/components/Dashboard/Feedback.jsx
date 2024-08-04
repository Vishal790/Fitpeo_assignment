import React from 'react'
import ReactStars from 'react-stars';
import Profile from "../../assets/profile.png"

const Feedback = () => {
   const feedbacks = [
     {
       name: "Jenny Wilson",
       feedback:
         "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
       rating: 5,
     },
     {
       name: "Dianne Russell",
       feedback:
         "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
       rating: 3.5,
     },
     {
       name: "Devon Lane",
       feedback:
         "Normally wings are wings, but theirs are lean meaty and tender; and...",
       rating: 5,
     },
     {
       name: "Courtney Henry",
       feedback:
         "The ambiance was delightful, and the staff was extremely attentive. The desserts were to die for!",
       rating: 4,
     },
     {
       name: "Arlene McCoy",
       feedback:
         "Great experience overall. The pasta was perfectly cooked and the wine selection was impressive.",
       rating: 4.5,
     },
     {
       name: "Ralph Edwards",
       feedback:
         "The steak was cooked to perfection, and the side dishes complemented the meal wonderfully. Highly recommend.",
       rating: 5,
     },
     {
       name: "Cody Fisher",
       feedback:
         "Service was a bit slow, but the food made up for it. The seafood platter was fresh and delicious.",
       rating: 3,
     },
     {
       name: "Jane Cooper",
       feedback:
         "A fantastic dining experience. The chef's special was unique and flavorful. Will definitely return.",
       rating: 4.5,
     },
     {
       name: "Wade Warren",
       feedback:
         "The breakfast menu is outstanding. Loved the pancakes and freshly squeezed orange juice.",
       rating: 4,
     },
     {
       name: "Esther Howard",
       feedback:
         "A cozy place with great food. The vegan options were impressive and very tasty.",
       rating: 4.5,
     },
     {
       name: "Ronald Richards",
       feedback:
         "The appetizers were amazing, but the main course was a bit underwhelming. Could be improved.",
       rating: 3,
     },
     {
       name: "Bessie Cooper",
       feedback:
         "Friendly staff and a great atmosphere. The cocktails were a highlight of the evening.",
       rating: 4,
     },
   ];


  return (
    <div className=" h-full  mx-auto text-white rounded-xl shadow-md space-y-2">
      {feedbacks.map((feedback, index) => (
        <div key={index} className="flex flex-col gap-y-2 border-b border-richblack-400">
          <div className="flex items-center space-x-2">
            <img
              src={Profile}
              alt={feedback.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-lg font-medium">{feedback.name}</h3>
            </div>
          </div>
          <ReactStars
            count={5}
            value={feedback.rating}
            size={24}
            color2={"#ffd700"}
            edit={false}
          />
          <p className=' text-xs text-richblack-25'>{feedback.feedback}</p>
        </div>
      ))}
    </div>
  );
}

export default Feedback