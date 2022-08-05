import { useDisclosure } from '@chakra-ui/react';
import { createContext, ReactNode, useContext, useState } from 'react';


interface UserNameProviderProps {
  children: ReactNode;
}


interface UserNameContextData {
  userName: string;
  setUserName: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  
}

const UserNameContext = createContext<UserNameContextData>({} as UserNameContextData);

export function UserNameProvider({ children }: UserNameProviderProps): JSX.Element {
  const [userName, setUserName] = useState<string | "">("");
  const { isOpen, onToggle } = useDisclosure();
  return (
    <UserNameContext.Provider
      value={{ userName, setUserName, isOpen, onToggle}}
    >
      {children}
    </UserNameContext.Provider>
  );
  
  };


export function useUserName(): UserNameContextData {
  const context = useContext(UserNameContext);

  return context;
}