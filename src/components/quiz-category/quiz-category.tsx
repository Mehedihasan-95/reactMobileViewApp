import "./quiz-category.scss";

const QuizCategory = ({categoryList}: any) => {

    // console.log(categoryList);
    
   
    return (
            <div className="p-3 bg-qc flex flex-col items-center rounded-lg h-24">
                <img src={categoryList.icon} alt="" className="w-14 h-14"/>
  
                <p className="m-0 font-tatsam-regular text-sm text-gray-600 pt-1">{categoryList.name}</p>
            </div>
            );
}

export default QuizCategory;
