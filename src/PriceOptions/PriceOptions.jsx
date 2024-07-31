import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  
    const PriceOptions = [
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 19.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "One free personal training session per month"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 39.99,
          "features": [
            "All Basic Plan features",
            "Access to group fitness classes",
            "Free guest pass (1 per month)",
            "10% discount on gym merchandise"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 59.99,
          "features": [
            "All Standard Plan features",
            "Unlimited guest passes",
            "Priority booking for classes",
            "Access to VIP lounge",
            "Free monthly massage (30 minutes)"
          ]
        },
        {
          "id": 4,
          "name": "Elite Plan",
          "price": 79.99,
          "features": [
            "All Premium Plan features",
            "Personalized nutrition plan",
            "Unlimited personal training sessions",
            "Free gym merchandise (up to $50 value per month)",
            "Exclusive access to special events and workshops"
          ]
        }
      ]
      

    return (
        <div className="m-12">
            <h2 className="text-4xl text-center mb-5 font-bold ">Best Prices in the town</h2>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:gap-6">
            {
                PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;