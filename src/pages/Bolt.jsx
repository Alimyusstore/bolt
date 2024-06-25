import BoldCard from "./BoldCard";
import driver from "../assets/images/Drive.webp"
import courier from "../assets/images/courier.webp"
import fleetOwner from "../assets/images/fleet-owner.webp"
import restaurant from "../assets/images/restaurant-payment.webp"
import BoltBtn from "./BoltBtn";
import { useState } from "react";
function Bolt() {
  let allDetails = [
    {
      id: 1,
      textBtn: "Driver",
      header: "Drive and earn money",
      details: [
        {
          numbering: 1,
          title: "Drive more, earn more",
          parag:
            "Our 150+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.",
        },
        {
          numbering: 2,
          title: "Set your schedule",
          parag:
            "Our 150+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.",
        },
        {
          numbering: 3,
          title: "Get paid each week",
          parag:
            "You’ll receive your earnings at the end of each week — no need to wait around for payday.",
        },
      ],
      image: driver,
    },
    {
      id: 2,
      textBtn: "Courier",
      header: "Make money delivering food",
      details: [
        {
          numbering: 1,
          title: "Earn extra income, fast",
          parag:
            "There’s no subscription fee. You’ll receive your earnings at the end of each week.",
        },
        {
          numbering: 2,
          title: "Make money whenever you like",
          parag: `You decide when and how often you deliver — weekdays, evenings, weekends, or just the occasional hour — it’s up to you.`,
        },
        {
          numbering: 3,
          title: "Deliver your way",
          parag: `Bike, scooter or car — you choose how to make deliveries.`,
        },
      ],

      image: courier,
    },
    {
      id: 3,
      textBtn: "Restaurant or store owner",
      header: "Increase your sales",
      details: [
        {
          numbering: 1,
          title: "Reach new customers",
          parag: `Millions of our users are ordering food or goods from restaurants and stores just like yours.`,
        },
        {
          numbering: 2,
          title: "Increase your earnings",
          parag: `Our large network of users brings more customers and business to you.`,
        },
        {
          numbering: 3,
          title: "Let us handle delivery",
          parag: `We’ll take care of the logistics, while you focus on running your business.`,
        },
      ],
      image: restaurant,
    },
    {
      id: 4,
      textBtn: "Fleet owner",
      header: "Grow your transport business",
      details: [
        {
          numbering: 1,
          title: "Boost your earnings",
          parag: `Our large rider community means more orders per day and higher earnings.`,
        },
        {
          numbering: 2,
          title: "Manage your assets",
          parag: `Easily view your vehicles, drivers and their current status.`,
        },
        {
          numbering: 3,
          title: "Keep track of performance",
          parag: `Get easy access to each driver’s completed trips, invoices, and payout information.`,
        },
      ],
      image: fleetOwner,
    },
  ];
   
  const [toggle, setToggle] = useState(1)
  function handleToggle(whatPage){
    setToggle( whatPage)
  }
  return (
    <div className="font-Roboto text-[1.1rem] ">
      <h1 className="font-bold, text-4xl text-center">Earn money with Bolt</h1>
      <div className="text-center">

      {allDetails.map((detail) => (

          <BoltBtn
            key={detail.id}
            onClick={() => {
              handleToggle(detail.id);
            }}
            {...detail}
            style={
              toggle == detail.id
                ? {
                    border: "none",
                    backgroundColor: "black",
                    color: "white",
                    padding: "10px 25px",
                  }
                : {
                    border: "2px solid grey",
                    backgroundColor: "white",
                  }
            }
          />
      ))}
      </div>
      {allDetails.map(
        (detail) =>
          toggle === detail.id && <BoldCard key={detail.id} {...detail} />
      )}
    </div>
  );
}

export default Bolt;