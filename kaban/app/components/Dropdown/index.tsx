"use client"
import { IDropdown } from "@/app/interfaces/IDropdown";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button
} from "@nextui-org/react";

const DropDown: React.FC<IDropdown> = ({ visible, type, setType }) => {

  const handleTypeChange = (kind: string) => {
    setType(kind)
  }

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
        <DropdownItem
          key="new"
          className="hover:bg-blue-600 text-gray-50"
          onClick={() => { handleTypeChange('Find') }}
        >
          Find
        </DropdownItem>
        <DropdownItem
          key="copy"
          className="hover:bg-blue-600 text-gray-50"
          onClick={() => { handleTypeChange('Ranker') }}
        >
          Ranked
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropDown;