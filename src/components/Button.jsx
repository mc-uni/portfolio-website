import React from "react";

const Button = ({ text, link, secondary = false }) => {
  return (
    <a
      href={link}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40 ${
        secondary
          ? "border border-primary text-primary hover:bg-gray-400"
          : "bg-stone-300 text-white hover:bg-blue-700"
      }`}
    >
      {text}
    </a>
  );
};

export default Button;

// const Button = ({ text, link, secondary }) => {
//   return (
//     <a
//       href={link}
//       className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
//         secondary
//           ? "border border-primary text-primary hover:bg-primary/10"
//           : "bg-primary text-white hover:bg-blue-700"
//       }`}
//     >
//       {text}
//     </a>
//   );
// };

// export default Button;
