import React from 'react';

const ListItem = (props) => {
  return (
  <div className="h-10 flex flex-row justify-center items-center gap-2 mt-1 text-xs px-3 ml-3">
 
  <div className="flex items-center justify-center">
    {props.icon}
  </div>
 
  <div className="flex items-center ">
    {props.item}
  </div>
</div>

    
    
    
    
    
    
    
  )
};

export default ListItem;
