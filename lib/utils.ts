
export const validateString = (value: unknown,maxlength:number) => {
  if(!value || typeof value != "string" || value.length > maxlength){
      return false;
    }
  return true;  
}