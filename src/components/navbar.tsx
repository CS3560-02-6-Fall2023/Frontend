import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu" // Update with the correct path

export default function Navbar() {
  // state to track the currently active button
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleButtonClick = (buttonIndex: number) => {
    setActiveIndex((prevActiveIndex) => prevActiveIndex === buttonIndex ? null : buttonIndex);
  };

  return (
    <NavigationMenu className="text-white p-4">
      <NavigationMenuList>
        {Array.from({ length: 6 }, (_, idx) => (
          <NavigationMenuItem key={idx}>
            <NavigationMenuTrigger
              onClick={() => handleButtonClick(idx)}
              className={`${activeIndex === idx ? 'your-active-class' : ''}`}
            >
              <span className="text-lg font-semibold">serverName</span>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
