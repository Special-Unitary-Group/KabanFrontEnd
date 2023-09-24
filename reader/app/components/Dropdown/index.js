"use client"

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function App(props) {
  const {visible} = props;
    return (
       
    <Dropdown className={`bg-blue-900 rounded-xl w-80 h-40 ${visible ? '' : 'hidden'}`}>
      <DropdownTrigger>
        <Button  
          variant="light" 
          className={` bg-blue-600 p-2 text-gray-50 rounded-xl w-80 mb-10 ${visible ? '' : 'hidden'}`}
        >
          Rediscover Your Papers 📝
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className="">
        <DropdownItem key="new" className="hover:bg-blue-600 text-gray-50 ">Find</DropdownItem>
        <DropdownItem key="copy" className="hover:bg-blue-600 text-gray-50 ">Key Words</DropdownItem>
        <DropdownItem key="edit" className="hover:bg-blue-600 text-gray-50" >Extract</DropdownItem>
        <DropdownItem key="edit" className="hover:bg-blue-600 text-gray-50 border-b-1">Rank</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
