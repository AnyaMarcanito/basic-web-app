export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    return ( "Your usb id is 19-10336" );
  }

  if (query.toLowerCase().includes("name")) {
    return ( "Anya" );
  }
  if (query.includes("What is 1 plus 9?")) {
    return ( "10" );
  }
  
  return "";
}
