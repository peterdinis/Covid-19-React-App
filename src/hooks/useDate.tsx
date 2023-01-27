import React from "react";

export const useDate = () => {
    const locale = 'sk';
    const [today, setDate] = React.useState(new Date());
  
    React.useEffect(() => {
        const timer = setInterval(() => { 
        setDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer);
      }
    }, []);
  
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    return {
      date,
    };
  };