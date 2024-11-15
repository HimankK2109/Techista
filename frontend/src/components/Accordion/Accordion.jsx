import React, { useState } from "react";
import "./Accordion.css";

// Recursive Accordion Component
const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button className="accordion-toggle flex justify-between items-center w-full" onClick={toggleAccordion}>
      <span className="text-sm p-[2px]">{item.title}</span> 
      {item.details ? <span className="ml-auto mr-2 text-xs">&raquo;</span> : null}
      </button>

      {isOpen && item.details && (
        <div className="accordion-content">
          {item.details.map((child, index) => (
            <AccordionItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

// Main Accordion Component
const Accordion = ({ data, type }) => {
    // console.log("Data passed to Accordion:", data);
    // console.log("Type:", type);
    return (
        <>
        {data.map((item, index) => (
          item.title === type ? (  // Conditional rendering using a ternary operator
            <div className="accordion-container">
            <AccordionItem key={index} item={item} />
            </div>
          ) : null // Return null for items that do not match
        ))}
        </>     
    );
};

export default Accordion;