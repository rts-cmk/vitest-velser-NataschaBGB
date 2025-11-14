export default function HandleValues(value) {

    if (value === null) return "No value";
  
    if (typeof value === "number") {
    
        if (isNaN(value)) return "Invalid number";

        return `Number: ${value}`;  
    }
  
    if (typeof value === "string") {
    
        if (value.trim() === "") return "Empty string";
    
        return `String: ${value}`;
    }
  
    return "Unknown type";
}